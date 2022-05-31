import React, { useEffect } from "react";
import SideNavItem from "./SideNavItem";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import unscrollBody from "../../../Helpers/unscrollBody";
const SideNavStyle = css`
	display: none;
	.nav {
		&__list {
			display: flex;
			align-items: flex-start;
		}
	}
	@media screen and (max-width: 1439px) {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 100vh;
		right: 0;
		top: 0;
		bottom: 0;
		transform: translateX(100%);
		background: var(--theme-color);
		z-index: 4;
		transition: 0.8s right ease;
		&.active {
			right: 50%;
		}
		.nav {
			&__list {
				text-align: left;
				flex-direction: column;
			}
			&__item:first-child {
				margin-bottom: 28px;
			}
			&__item:nth-child(4) {
				margin-bottom: 28px;
			}
		}
	}
	@media screen and (max-width: 800px) {
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		transform: translate(0, calc(100% + 100vh));
		transition: 0.8s top ease;
		&.active {
			top: -200vh;
		}
	}
`;

const SideNav = () => {
	const isSideNavOpened = useSelector((state) => state.nav.isSideNavOpened);
	const pages = useSelector((state) => state.nav.navLinks);
	useEffect(() => {
		unscrollBody(isSideNavOpened);
	}, [isSideNavOpened]);
	return (
		<nav className={`${SideNavStyle} ${isSideNavOpened ? "active" : ""}`}>
			<ul className="nav__list">
				{pages.map((page) => (
					<SideNavItem page={page} key={page.path} />
				))}
			</ul>
		</nav>
	);
};

export default SideNav;
