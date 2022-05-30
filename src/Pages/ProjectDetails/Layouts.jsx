import React, { useState } from "react";
import SectionTitle from "../../Components/UI/SectionTitle";
import { css } from "@emotion/css";
import squareIcon from "../../Assets/Img/Icons/area-back.svg";
import planImg1 from "../../Assets/Img/plan-floor1.jpg";
import planImg2 from "../../Assets/Img/plan-floor2.jpg";
import Fancybox from "../../Components/Shared/Fancybox";
import ArrowButton from "./ArrowButton";

const layoutsStyle = css`
	.project-layout__title {
		margin-bottom: 10px;
	}
	.layout-header {
		display: flex;
		justify-content: space-between;
		&__row {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}
		&__title {
			white-space: nowrap;
			margin-right: 25px;
			color: #606067;
			line-height: 1.3;
			font-size: 24px;
		}
	}
	.layout-square {
		display: flex;
		align-items: center;
		line-height: 1.3;
		font-size: 14px;
		font-weight: 600;
		&:not(:last-child) {
			margin-right: 33px;
		}
		&__icon {
			margin-right: 10px;
		}
		&__name {
			color: var(--gray-color);
			margin-right: 7px;
		}
		&__num {
			color: #606067;
		}
	}
	.layout-gallery {
		padding: 50px 0 80px;
		&__list {
			display: flex;
			justify-content: space-between;
		}
		&__item {
			flex-basis: calc((100% / 12) * 5);
		}
		&__title {
			margin-bottom: 30px;
			color: #606067;
			line-height: 1.3;
			font-size: 14px;
		}
		&__img {
			width: 100%;
		}
	}
	@media (max-width: 991px) {
		.layout-header {
			flex-direction: column;
			&__row:first-child {
				justify-content: space-between;
				margin-bottom: 25px;
			}
		}
	}
	@media (max-width: 767px) {
		.layout-gallery {
			&__list {
				flex-direction: column;
			}
			&__item {
				margin-top: 40px;
				flex-basis: 100%;
			}
		}
		.layout-gallery {
			padding: 20px 0 70px;
		}
	}
`;
const Layouts = ({ state, setState }) => {
	return (
		<div className={layoutsStyle}>
			<SectionTitle className="project-layout__title">Планировки</SectionTitle>
			<div className="project-layout__variant">
				<header className="project-layout__header layout-header">
					<div className="layout-header__row">
						<h3 className="layout-header__title">Вариант 1</h3>
						<ArrowButton
							sideInfoIndex={1}
							setState={setState}
							className="layout-header__arrow-link"
						>
							внести изменения в проект
						</ArrowButton>
					</div>
					<div className="layout-header__row">
						<div className="layout-header__square layout-square">
							<img
								src={squareIcon}
								alt="Иконка площади"
								className="layout-square__icon"
								width="28"
								height="28"
							/>

							<div className="layout-square__name">общая площадь</div>
							<div className="layout-square__num">
								224м<sup>2</sup>
							</div>
						</div>
						<div className="layout-header__square layout-square">
							<img
								src={squareIcon}
								alt="Иконка площади"
								className="layout-square__icon"
								width="28"
								height="28"
							/>

							<div className="layout-square__name">строительная площадь</div>
							<div className="layout-square__num">
								257м<sup>2</sup>
							</div>
						</div>
					</div>
				</header>
				<div className="project-layout__gallery layout-gallery">
					<ul className="layout-gallery__list">
						<Fancybox>
							<li className="layout-gallery__item">
								<h4 className="layout-gallery__title">План первого этажа</h4>
								<a href={planImg1} data-fancybox="gallery" className="layout-gallery__link">
									<img
										className="layout-gallery__img"
										src={planImg1}
										alt="Изображения плана дома"
									/>
								</a>
							</li>
							<li className="layout-gallery__item">
								<h4 className="layout-gallery__title">План второго этажа</h4>
								<a data-fancybox="gallery" href={planImg2} className="layout-gallery__link">
									<img
										className="layout-gallery__img"
										src={planImg2}
										alt="Изображения плана дома"
									/>
								</a>
							</li>
						</Fancybox>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Layouts;
