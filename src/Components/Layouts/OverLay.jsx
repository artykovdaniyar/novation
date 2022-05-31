import React from "react";
import { css } from "@emotion/css";

const OverLayStyle = css`
	display: none;
	position: fixed;
	display: block;
	opacity: 0;
	pointer-events: none;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.7);
	cursor: pointer;
	transition: 0.5s opacity ease;
	&.active {
		opacity: 1;
		pointer-events: all;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

const OverLay = ({ state, setState, stateValue = false }) => {
	return (
		<div
			onClick={() => {
				setState(stateValue);
			}}
			className={`${OverLayStyle} ${state > 0 || state === true ? "active" : ""}`}
		></div>
	);
};

export default OverLay;
