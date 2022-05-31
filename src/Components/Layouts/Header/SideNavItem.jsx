import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "../../../Redux/reducers/navSlice";
import { css } from "@emotion/css";

const SideNavItemStyles = css`
	@media screen and (max-width: 1439px) {
		position: relative;
		display: flex;
		flex-direction: row-reverse;
		color: var(--font-color);
		line-height: 1.25;
		font-size: 24px;

		padding: 6px 0;
		width: 100%;
		transition: 0.3s all;
		&:after {
			position: absolute;
			bottom: 0;
			left: 0;
			content: "";
			display: block;
			height: 2px;
			width: 0;
			margin-right: 10px;
			background: var(--primary-color);

			transition: 0.3s width ease;
			z-index: -1;
		}
		&:hover {
			color: var(--primary-color);
		}
		&:hover::after {
			// width: 100%;
		}
		&.active {
			color: #d8d8d8;
		}
	}
`;

const SideNavItem = ({ page }) => {
	const dispatch = useDispatch();
	const clickSideNavLinkHandeler = () => {
		dispatch(toggleSideNav());
	};

	return (
		<li className="nav__item">
			<NavLink
				onClick={() => clickSideNavLinkHandeler()}
				className={SideNavItemStyles}
				to={`${page.path}`}
			>
				{page.name}
			</NavLink>
		</li>
	);
};

export default SideNavItem;
