import React, { useEffect } from "react";
import { css } from "@emotion/css";
import unscrollBody from "../../Helpers/unscrollBody";

const sideInfoStyle = css`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 50%;
	height: 100%;
	right: -100%;
	bottom: 0;
	overflow-y: scroll;
	padding: 130px 0 60px;
	background: var(--theme-color);
	z-index: 5;
	transition: transform 0.7s cubic-bezier(0.65, 0.05, 0.36, 1);
	&.active {
		transform: translateX(-200%);
	}
	svg {
		transition: transform 0.3s;
	}
	.close-btn {
		position: absolute;
		right: 0;
		top: 0;
		padding: 20px;
		&:hover svg {
			color: red;
			transform: rotate(180deg);
		}
	}

	@media screen and (max-width: 800px) {
		width: 100%;
		right: 0;
		bottom: -100%;
		transition: 1s transform ease;
		&.active {
			transform: translateY(-100%);
		}
	}
`;

const SideInfo = ({ children, sideInfoIndex = true, state, setState, stateValue = false }) => {
	useEffect(() => {
		unscrollBody(state);
	}, [state]);

	return (
		<>
			<aside className={`${sideInfoStyle} ${state === sideInfoIndex ? "active" : ""}`}>
				<button
					onClick={() => {
						setState(stateValue);
					}}
					className="close-btn"
				>
					<svg width="24" height="24" viewBox="0 0 18 18" fill="none">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13.9497 5.46446L5.46446 13.9497L4.05025 12.5355L12.5355 4.05025L13.9497 5.46446Z"
							fill="currentColor"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.46447 4.05025L13.9498 12.5355L12.5355 13.9497L4.05026 5.46446L5.46447 4.05025Z"
							fill="currentColor"
						/>
					</svg>
				</button>
				{children}
			</aside>
		</>
	);
};

export default SideInfo;
