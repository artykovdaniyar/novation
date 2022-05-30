import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

const NavItemStyles = css`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: var(--gray-color--dark);
	line-height: 1.2;
	font-size: 14px;
	font-weight: 600;
	padding: 8px 22px;
	text-decoration: none;
	margin-top: 7px;
	&:after {
		content: "";
		margin: 0 auto;
		display: block;
		height: 2px;
		width: 0;
		background: var(--primary-color);
		transform: translateY(7px);
		transition: width 0.2s ease;
	}
	&.active {
		&:after {
			width: 35px;
		}
	}
	&:hover {
		&:after {
			width: 35px;
		}
	}
	@media screen and (max-width: 1200px) {
		&.tablet {
			display: none;
		}
	}
	@media screen and (max-width: 800px) {
		align-items: flex-start;
		color: var(--font-color);
		line-height: 1.25;
		font-size: 24px;

		padding: 6px 0;
		width: 100%;
		&.tablet {
			display: block;
		}
		&.active {
			color: #d8d8d8;
		}
		&:after {
			display: none;
		}
	}
`;

const NavItem = ({ page }) => {
	return (
		<li className="nav__item">
			<NavLink className={`${NavItemStyles} ${!page.tablet ? "tablet" : ""}`} to={`${page.path}`}>
				{page.name}
			</NavLink>
		</li>
	);
};

export default NavItem;
