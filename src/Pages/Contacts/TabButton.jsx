import React from "react";
import { css } from "@emotion/css";

const tabButtonStyle = css`
	font-size: 14px;
	line-height: 1.1;
	font-weight: 700;
	padding: 5px 9px;
	border-radius: 5px;
	background: var(--gray-color--light);
	color: var(--theme-color);
	white-space: nowrap;
	transition: background 0.3s ease;
	&:hover,
	&:focus {
		background: var(--primary-color);
	}
	&.active {
		background: var(--primary-color);
	}
`;

const TabButton = ({ children, state, setState, activeTabNum }) => {
	const openTabContentHandeler = (tabIndex) => {
		setState(tabIndex);
	};

	return (
		<button
			onClick={() => openTabContentHandeler(activeTabNum)}
			className={`${tabButtonStyle} ${state === activeTabNum ? "active" : ""}`}
		>
			{children}
		</button>
	);
};

export default TabButton;
