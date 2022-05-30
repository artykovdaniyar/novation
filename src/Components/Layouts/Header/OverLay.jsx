import React from "react";
import { css } from "@emotion/css";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideNav } from "../../../Redux/reducers/navSlice";
import unscrollBody from "../../../Helpers/unscrollBody";

const OverLayStyle = css`
	display: none;
	@media (max-width: 1200px) {
		position: fixed;
		display: block;
		opacity: 0;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100vh;
		z-index: 3;
		background-color: rgba(0, 0, 0, 0.7);
		cursor: pointer;
		pointer-events: none;
		transition: 1s opacity ease;
		&.active {
			opacity: 1;
			pointer-events: all;
		}
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

const OverLay = () => {
	const dispatch = useDispatch();
	const isSideNavOpened = useSelector((state) => state.nav.isSideNavOpened);

	return (
		<div
			onClick={() => {
				dispatch(toggleSideNav());
				unscrollBody();
			}}
			className={`${OverLayStyle} ${isSideNavOpened ? "active" : ""}`}
		></div>
	);
};

export default OverLay;
