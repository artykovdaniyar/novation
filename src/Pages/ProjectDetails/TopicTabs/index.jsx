import React, { useState } from "react";
import { css } from "@emotion/css";
import Foundation from "./Foundation";
import { Fade } from "react-awesome-reveal";
import Brick from "./Brick";
import Boards from "./Boards";
import Stairs from "./Stairs";
import Ceramic from "./Ceramic";
import Roof from "./Roof";
import ArrowButton from "../ArrowButton";

const topicTabStyle = css`
	margin-bottom: 120px;
	.tabs-header {
		padding-bottom: 55px;
		&__list {
			display: flex;
		}
		&__item {
			padding: 14px 8px;
			width: 25%;
			height: 170px;
			border-left: 1px solid #d8d8d8;
			&:last-child {
				border-right: 1px solid #d8d8d8;
			}
		}
		&__btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			color: var(--font-color);
			line-height: 1.1;
			font-size: 14px;
			background: var(--theme-color);
			transition: background 0.3s ease, color 0.3s ease, font-size 0.3s ease;
			&:hover {
				background-color: var(--primary-color);
				color: var(--theme-color);
				font-size: 16px;
			}
			&.active {
				position: relative;
				background-color: var(--primary-color);
				color: var(--theme-color);
				font-size: 16px;
				z-index: 1;
			}
		}
	}
	.tabs-content {
		&__item {
			display: none;
		}
		&__item.active {
			display: block;
		}
	}
	.tabs-more-btn {
		margin-top: 40px;
	}
	@media screen and (max-width: 1199px) {
		.tabs-header {
			padding-bottom: 35px;
			&__item {
				height: 80px;
				padding: 6px 5px;
			}
		}
	}
	@media screen and (max-width: 991px) {
		.tabs-header {
			padding-bottom: 75px;
			&__list {
				flex-wrap: wrap;
			}
			&__item {
				margin-bottom: 6px;
				padding: 7px 8px;
			}
		}
	}
	@media screen and (max-width: 767px) {
		margin-bottom: 60px;
		.tabs-header {
			padding-bottom: 35px;
			&__item {
				border: 0;
				width: calc(100% / 3);
				margin-bottom: 0;
				padding: 4px;
			}
			&__item:last-child {
				border-right: 0;
			}
			&__item:nth-child(2),
			&__item:nth-child(5) {
				border-right: 1px solid #d8d8d8;
				border-left: 1px solid #d8d8d8;
			}
			&__item:first-child,
			&__item:nth-child(2),
			&__item:nth-child(3) {
				border-bottom: 1px solid #d8d8d8;
			}
			&__item:first-child,
			&__item:nth-child(2) {
				position: relative;
				&::after {
					display: block;
					content: "";
					width: 10px;
					height: 10px;
					position: absolute;
					background: var(--theme-color);
					right: -5px;
					bottom: -4px;
					z-index: 1;
				}
			}
			&__btn {
				font-size: 11px;
				&.active {
					font-size: 11px;
				}
			}
		}
	}
	@media screen and (max-width: 500px) {
		.tabs-header {
			&__item {
				padding: 5px 3px;
				height: 65px;
			}
		}
	}
`;
const TopicTab = ({ setState }) => {
	const [activeTabIndex, setActiveTabIndex] = useState(1);
	return (
		<section className={topicTabStyle}>
			<header className="tabs-header">
				<ul className="tabs-header__list">
					<li className="tabs-header__item">
						<button
							className={`tabs-header__btn ${activeTabIndex === 1 && "active"}`}
							onClick={() => setActiveTabIndex(1)}
						>
							Фундамент
						</button>
					</li>
					<li className="tabs-header__item">
						<button
							className={`tabs-header__btn ${activeTabIndex === 2 && "active"}`}
							onClick={() => setActiveTabIndex(2)}
						>
							Стены и<br /> перегородки
						</button>
					</li>
					<li className="tabs-header__item">
						<button
							className={`tabs-header__btn ${activeTabIndex === 3 && "active"}`}
							onClick={() => setActiveTabIndex(3)}
						>
							Перекрытия
						</button>
					</li>
					<li className="tabs-header__item">
						<button
							className={`tabs-header__btn ${activeTabIndex === 4 && "active"}`}
							onClick={() => setActiveTabIndex(4)}
						>
							Лестница
						</button>
					</li>
					<li className="tabs-header__item">
						<button
							className={`tabs-header__btn ${activeTabIndex === 5 && "active"}`}
							onClick={() => setActiveTabIndex(5)}
						>
							Отделка фасада
						</button>
					</li>
					<li className="tabs-header__item">
						<button
							className={`tabs-header__btn ${activeTabIndex === 6 && "active"}`}
							onClick={() => setActiveTabIndex(6)}
						>
							Кровля
						</button>
					</li>
				</ul>
			</header>
			<ul className="tabs-content">
				<li className={`tabs-content__item ${activeTabIndex === 1 && "active"}`}>
					<Fade triggerOnce>
						<Foundation />
					</Fade>
				</li>
				<li className={`tabs-content__item ${activeTabIndex === 2 && "active"}`}>
					<Fade triggerOnce>
						<Brick />
					</Fade>
				</li>
				<li className={`tabs-content__item ${activeTabIndex === 3 && "active"}`}>
					<Fade triggerOnce>
						<Boards />
					</Fade>
				</li>
				<li className={`tabs-content__item ${activeTabIndex === 4 && "active"}`}>
					<Fade triggerOnce>
						<Stairs />
					</Fade>
				</li>
				<li className={`tabs-content__item ${activeTabIndex === 5 && "active"}`}>
					<Fade triggerOnce>
						<Ceramic />
					</Fade>
				</li>
				<li className={`tabs-content__item ${activeTabIndex === 6 && "active"}`}>
					<Fade triggerOnce>
						<Roof />
					</Fade>
				</li>
			</ul>
			<ArrowButton sideInfoIndex={2} setState={setState} className="tabs-more-btn">
				Другие варианты конструктивных решений
			</ArrowButton>
		</section>
	);
};

export default TopicTab;
