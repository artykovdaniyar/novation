import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideNav } from "../../../Redux/reducers/navSlice";
import SideNav from "./SideNav";
import OverLay from "./OverLay";
import logoImg from "../../../Assets/Img/Icons/logo.svg";

const headerStyles = css`
	min-height: 110px;
	width: 100%;
	.header {&__container {
			position: fixed;
			top: -120px;
			transform: translateY(0);
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100vw;
			padding: 32px 40px;
			background: var(--theme-color);
			z-index: 2;
			transition: transform 0.7s ease;
			&.opened {
				transform: translateY(120px);
			}
			&.behind {
				z-index: 0;
			}
		}
		&__contacts {
			display: flex;
			flex-direction: column;
			& > a:hover {
				text-decoration: underline;
			}
		}
		&__contacts-phone {
			color: var(--primary-color);
			line-height: 1.4;
			font-size: 15px;
			font-weight: 600;
		}
		&__contacts-instagram {
			display: flex;
			align-items: center;
			font-size: 14px;
			color: var(--font-color);
		}
		&__burger-btn {
			position: relative;
			display: none;
			overflow: visible;
			margin: 0;
			padding: 15px;
			cursor: pointer;
			text-transform: none;
			color: inherit;
			border: 0;
			background-color: transparent;
			z-index: 10000;
		}
		&__burger-btn.active {
			.header__burger-icon:before {
				transform: translate3d(-8px, 0, 0) rotate(-45deg) scaleX(0.7);
				top: -5px;
				z-index: 10;
			}
			.header__burger-icon:after {
				transform: translate3d(-8px, 0, 0) rotate(45deg) scaleX(0.7);
				width: 23px;
				bottom: -5px;
			}
		}
		&__burger-box {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 23px;
			height: 2px;
			pointer-events: none;
		}
		&__burger-icon {
			position: absolute;
			top: 50%;
			border-radius: 4px;
			background-color: #000;
			display: flex;
			justify-content: flex-end;
			width: 23px;
			height: 2px;
			border-radius: 0px;
			margin-top: 2px;
			pointer-events: none;
			&::before {
				content: "";
				position: absolute;
				border-radius: 4px;
				background-color: #000;
				width: 23px;
				height: 2px;
				border-radius: 0px;
				top: -6px;
				pointer-events: none;
				transition: 0.3s transform ease;
			}
			&::after {
				content: "";
				position: absolute;
				border-radius: 4px;
				background-color: #000;
				width: 16px;
				height: 2px;
				border-radius: 0px;
				bottom: -6px;
				pointer-events: none;
				transition: 0.3s transform ease;
			}
		}
	}
	@media screen and (max-width: 1439px) {
		min-height: 78px;
		.header {
			&__container {
				padding: 17px 40px;
			}
			&__contacts {
				justify-content: center;
				align-items: center;
			}
			&__contacts-phone {
				display: none;
			}
			&__contacts-text {
				display: none;
			}
			&__contacts-instagram {
				transform: translateY(3.5px);
			}
		}
	}
	@media screen and (max-width: 1200px) {
		.header {
			&__burger-btn {
				display: block;
			}
		}
	}
	@media screen and (max-width: 800px) {
		.header {
			&__container {
				padding: 10px 10px 10px 20px;
				flex-wrap: wrap;
			}
			&__contacts {
				order: -1;
				width: 100%;
				flex-direction: row-reverse;
				justify-content: space-between;
				border-bottom: 1px solid #d0d0d0;
				margin-bottom: 11px;
			}
			&__contacts-phone {
				display: block;
				padding: 11px 10px 11px 0;
			}
			&__contacts-text {
				display: block;
			}
			&__contacts-instagram {
				padding: 11px 0;
				transform: translateY(0);
			}
		}
	}
`;

const Header = () => {
	const [isHeaderNavOpened, setIsHeaderNavOpened] = useState(false);
	const dispatch = useDispatch();
	const isSideNavOpened = useSelector((state) => state.nav.isSideNavOpened);

	function openMenuHandler(event) {
		event.target.classList.toggle("active");
		dispatch(toggleSideNav());
	}

	useEffect(() => {
		let scrollBefore = 0;
		setIsHeaderNavOpened(true);

		const showNavHandler = () => {
			let scrolled = window.scrollY;
			if (window.scrollY === 0) {
				setIsHeaderNavOpened(true);
			} else if (scrollBefore > scrolled) {
				scrollBefore = scrolled;
				setIsHeaderNavOpened(true);
			} else if (scrollBefore < scrolled && scrolled > 54) {
				scrollBefore = scrolled;
				setIsHeaderNavOpened(false);
			}
		};

		window.addEventListener("scroll", showNavHandler);

		return () => {
			window.removeEventListener("scroll", showNavHandler);
		};
	}, []);

	return (
		<>
			<header className={headerStyles}>
				<div className={`header__container ${isHeaderNavOpened ? "opened" : ""}`}>
					<Link to="/" className="header__logo-link">
						<img src={logoImg} alt="Логатип компании" />
					</Link>

					<Nav />
					<div className="header__contacts">
						<a href="tel:88612040026" className="header__contacts-phone" rel="noreferrer">
							8 (861) 204-00-26
						</a>
						<a
							href="https://www.instagram.com/sk_novazia/"
							target="_blank"
							className="header__contacts-instagram"
							rel="noreferrer"
						>
							<svg
								style={{ marginRight: 5 }}
								width="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
									fill="var(--primary-color)"
								></path>
							</svg>
							<span className="header__contacts-text">sk_novazia</span>
						</a>
					</div>
					<button
						onClick={(event) => openMenuHandler(event)}
						className={`header__burger-btn ${isSideNavOpened ? "active" : ""}`}
					>
						<span className="header__burger-box">
							<span className="header__burger-icon"></span>
						</span>
					</button>
					<SideNav />
					<OverLay />
				</div>
			</header>
		</>
	);
};

export default Header;
