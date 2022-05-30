import React, { useEffect, useState } from "react";
import PageNav from "../../Components/Shared/PageNav";
import PageTitle from "../../Components/UI/PageTitle";
import { css } from "@emotion/css";
import Tables from "./Tables";
import Calculator from "../../Components/Shared/Calculator";
import Docs from "../../Components/Shared/Docs";
import Tax from "../../Components/Shared/Tax";
import Refund from "../../Components/Shared/Refund";
import MaternalCapital from "../../Components/Shared/MaternalCapital";
import SideNav from "./SideNav";
import Title from "../../Components/Shared/Title";
import { Fade } from "react-awesome-reveal";

const mortgageStyle = css`
	.row {
		display: flex;
	}
	.tables {
		flex-basis: calc((100% / 12) * 9);
		padding: 0 15px;
	}
	.aside {
		flex-basis: calc((100% / 12) * 3);
		transition: top 1s ease-in-out, right 0.4s ease-in-out;
	}
	.aside.fixed {
		position: fixed;
		right: calc((100vw - 1217px) / 2);
		top: 100px;
		overflow-y: auto;
	}
	@media screen and (max-width: 1200px) {
		.aside {
			display: none;
		}
		.tables {
			flex-basis: 100%;
		}
	}
	@media screen and (max-width: 767px) {
		.tables {
			flex-basis: 100%;
		}
	}
`;

const Mortgage = () => {
	const [sideNavFixed, setSideNavFixed] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY > 320) {
				setSideNavFixed(true);
			} else if (window.scrollY < 320) {
				setSideNavFixed(false);
			}
		};

		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, [sideNavFixed]);

	return (
		<div className={mortgageStyle}>
			<Title>Ипотека | СК Новация</Title>
			<Fade cascade={true} damping={0.3} triggerOnce className="container">
				<PageNav curPage="Ипотека" />
				<PageTitle>Ипотека</PageTitle>
				<div className="row">
					<div className="tables">
						<Fade triggerOnce>
							<Tables />
						</Fade>
						<Fade triggerOnce>
							<Calculator />
						</Fade>
						<Fade triggerOnce>
							<Docs />
						</Fade>
						<Fade triggerOnce>
							<Tax />
						</Fade>
						<Fade triggerOnce>
							<Refund />
						</Fade>
						<Fade triggerOnce>
							<MaternalCapital />
						</Fade>
					</div>
					<aside className={sideNavFixed ? "aside fixed" : "aside"}>
						<SideNav />
					</aside>
				</div>
			</Fade>
		</div>
	);
};

export default Mortgage;
