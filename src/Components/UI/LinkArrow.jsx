import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const LinkArrowStyle = css`
	display: flex;
	align-items: center;
	color: var(--primary-color);
	line-height: 1.25;
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
	.link__icon {
		transform: translateY(1px);
		margin-left: 10px;
		transition: 0.3s transform;
	}
	&:hover > .link__icon {
		transform: translate(5px, 1px);
	}
`;

const LinkArrow = ({ path = "", children }) => {
	return (
		<Link to={`/${path}`} className={LinkArrowStyle}>
			{children}
			<svg
				className="link__icon"
				width="17"
				height="9"
				viewBox="0 0 28 15"
				fill="var(--primary-color)"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.3431 0.292895L27.7071 6.65686C28.0976 7.04738 28.0976 7.68055 27.7071 8.07107L21.3431 14.435C20.9526 14.8256 20.3195 14.8256 19.9289 14.435C19.5384 14.0445 19.5384 13.4113 19.9289 13.0208L24.5858 8.36396L-7.31201e-07 8.36396L-5.56355e-07 6.36396L24.5858 6.36396L19.9289 1.70711C19.5384 1.31658 19.5384 0.683419 19.9289 0.292895C20.3195 -0.0976293 20.9526 -0.0976293 21.3431 0.292895Z"
					fill="var(--primary-color)"
				/>
			</svg>
		</Link>
	);
};

export default LinkArrow;
