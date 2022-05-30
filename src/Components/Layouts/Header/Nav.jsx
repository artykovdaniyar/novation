import React from "react";
import NavItem from "./NavItem";
import { css } from "@emotion/css";
import { useSelector } from "react-redux";

const NavStyles = css`
	display: flex;
	justify-content: center;
	flex-grow: 1;
	.nav {
		&__list {
			display: flex;
		}
	}
	@media screen and (max-width: 1439px) {
		display: flex;
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
`;

const Nav = () => {
	const pages = useSelector((state) => state.nav.navLinks);

	return (
		<nav className={NavStyles}>
			<ul className="nav__list">
				{pages.map((page) => (
					<NavItem page={page} key={page.path} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
