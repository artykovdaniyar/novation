import React from "react";
import { useParams } from "react-router-dom";
import { css } from "@emotion/css";
import ProjectDetailsImg from "../../Assets/Img/project-details.jpg";
import PageNav from "../../Components/Shared/PageNav";
import SectionTitle from "../../Components/UI/SectionTitle";
import Fancybox from "../../Components/Shared/Fancybox";
import WhatsappConsultation from "../../Components/Shared/WhatsappConsultation";
import { Fade } from "react-awesome-reveal";

const heroStyle = css`
	.project-hero__row {
		display: flex;
		flex-wrap: wrap;
	}
	.project-hero__img-column {
		flex-basis: calc((100% / 12) * 8);
		padding: 0 15px;
	}
	.project-img__link {
	}
	.project-img__img {
		width: 100%;
		max-height: 660px;
		object-fit: cover;
	}
	.project-hero__info-column {
		flex-basis: calc((100% / 12) * 4);
		padding: 0 15px 0 50px;
	}
	.project-blocks {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.project-info__pagenav {
		margin-bottom: 10px;
		ul {
			padding: 0;
		}
		a {
			color: var(--primary-color);
			font-size: 12px;
		}
	}
	.project-hero__info-title {
		margin-bottom: 5px;
	}
	.project-info {
		display: flex;
		flex-direction: column;
	}
	.project-price {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		&__name {
			color: var(--gray-color);
			line-height: 1.3;
			font-size: 14px;

			margin-right: 12px;
		}
		&__price {
			line-height: 1.3;
			font-size: 14px;
			color: var(--primary-color);
		}
	}

	.project-sets {
		margin-top: auto;
		&__title {
			color: var(--font-color);
			line-height: 1.2;
			font-size: 16px;
			font-weight: 600;
			margin-bottom: 15px;
		}
		&__row {
			display: flex;
			align-items: center;
			margin-bottom: 14px;
		}
		&__name {
			width: 90px;
			color: var(--font-color);
			line-height: 1.15;
			font-size: 14px;
			margin-right: 4px;
		}
		&__price {
			color: var(--primary-color);
			line-height: 1;
			font-size: 25px;
			font-weight: 700;
			display: inline-block;
			white-space: nowrap;
		}
		&__more-btn {
			display: inline-block;
			background: var(--primary-color);
			color: var(--theme-color);
			line-height: 1;
			font-size: 16px;
			font-weight: 600;
			padding: 2px 11px 4px;
			transition: background 0.3s ease;
			text-align: center;
			margin-bottom: 20px;
		}
		&__more-icon {
			margin-left: 5px;
		}
		&__more-btn:hover {
			color: var(--primary-color);
			background: transparent;
		}
	}
	.project-mortage {
		margin-top: auto;
		margin-bottom: 12px;
		&--bottom {
			display: none;
		}
		&__title {
			color: var(--font-color);
			line-height: 1.2;
			font-size: 20px;
			font-weight: 500;
			margin-bottom: 15px;
		}
		&__item {
			position: relative;
			color: var(--font-color);
			line-height: 1.2;
			font-size: 16px;
			padding-left: 20px;
			margin-bottom: 8px;
		}
		&__item:before {
			content: " ";
			display: block;
			width: 10px;
			height: 10px;
			background: #e1e1e8;
			position: absolute;
			left: 0;
			top: 6px;
		}
		&__interest {
			font-weight: 600;
			color: var(--primary-color);
		}
	}
	.project-consultation {
		margin-bottom: 20px;
		margin-top: auto;
	}
	.project-stages {
		margin-top: auto;
		&__title {
			color: var(--gray-color);
			line-height: 1.2;
			font-size: 14px;

			margin-bottom: 8px;
		}
		&__list {
			display: flex;
		}
		&__item {
			color: var(--font-color);
			line-height: 1.2;
			font-size: 12px;
			&:not(:last-child) {
				margin-right: 30px;
			}
		}
		&__name {
			display: block;
			font-size: 16px;
			font-weight: 600;
		}
	}
	@media (max-width: 1299px) {
		.project-mortage--bottom {
			display: block;
			margin-top: 10px;
			padding-left: 55px;
			flex: 1 0 100%;
		}
		.project-mortage {
			display: none;
			&__title {
				margin-bottom: 8px;
			}
			&__list {
				display: flex;
			}
			&__item:not(:last-child) {
				margin-right: 50px;
			}
		}
	}
	@media (max-width: 1023px) {
		.project-info {
			margin-top: 28px;
			flex-basis: 100%;
		}
		.project-hero__img-column {
			flex-basis: 100%;
			padding: 0;
		}
		.project-img__img {
			max-height: 990px;
		}
		.project-mortage--bottom {
			display: none;
		}
		.project-mortage {
			display: block;
			&__list {
				display: block;
			}
			&__item:not(:last-child) {
				margin-right: 0;
			}
		}
		.project-title {
			display: flex;
			align-items: flex-end;
			flex-wrap: wrap;
			margin-bottom: 30px;
		}
		.project-price {
			margin-left: 10px;
			margin-bottom: 0;
		}
		.project-sets,
		.project-mortage,
		.project-consultation,
		.project-stages {
			flex-basis: 50%;
		}
		.project-consultation,
		.project-stages {
			margin-top: 40px;
		}
		.project-blocks {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
	@media (max-width: 767px) {
		.project-info {
			padding: 0 20px;
		}
		.project-sets,
		.project-mortage,
		.project-consultation,
		.project-stages {
			flex-basis: 100%;
		}
		.project-sets {
			display: flex;
			flex-wrap: wrap;
			&__title,
			&__more-btn {
				flex: 1 0 100%;
			}
			&__row {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				flex: 1 0 50%;
				margin-bottom: 20px;
			}
		}
		.project-mortage {
			&__list {
				display: flex;
				flex-wrap: wrap;
			}
			&__item {
				flex: 1 0 50%;
			}
		}
		.project-consultation {
			.title {
				width: 172px;
			}
			.links {
			}
		}
		.project-stages {
			&__list {
				justify-content: space-between;
				width: 100%;
				flex-wrap: wrap;
			}
			&__item:not(:last-child) {
				margin-right: 0;
			}
		}
	}
	@media (max-width: 425px) {
		.project-mortage {
			&__item {
				flex: 1 0 100%;
			}
		}
		.project-price {
			margin-left: 0;
		}
		.project-sets {
			margin-bottom: 40px;
			&__more-btn {
				margin-bottom: 0;
			}
		}
		.project-consultation {
			.title {
				width: 100%;
			}
		}
	}
`;

const Hero = () => {
	const { projectNumber } = useParams();
	return (
		<section className={heroStyle}>
			<div className="project-hero__row">
				<Fade triggerOnce delay="30" className="project-hero__img-column project-img">
					<Fancybox options={{ infinite: false }}>
						<a href={ProjectDetailsImg} data-fancybox className="project-img__link">
							<img src={ProjectDetailsImg} className="project-img__img" alt="Изображение проекта" />
						</a>
					</Fancybox>
				</Fade>

				<Fade triggerOnce delay="50">
					<div className="project-hero__info-column project-info">
						<PageNav
							className="project-info__pagenav"
							prevPage={{ path: "/projects", name: "Проекты" }}
							curPage={`№${projectNumber}`}
						/>
						<div className="project-title">
							<SectionTitle className="project-info__title">Проект №{projectNumber}</SectionTitle>
							<div className="project-info__price project-price">
								<span className="project-price__name">цена проекта</span>
								<span className="project-price__price">33 000 ₽</span>
							</div>
						</div>
						<div className="project-blocks">
							<div className="project-info__sets project-sets">
								<h3 className="project-sets__title">цена строительства дома</h3>
								<div className="project-sets__row">
									<span className="project-sets__name">базовая от</span>
									<span className="project-sets__price">3 790 000 ₽</span>
								</div>
								<div className="project-sets__row">
									<span className="project-sets__name">комфорт от</span>
									<span className="project-sets__price">4 490 000 ₽</span>
								</div>
								<a href="#includes" className="project-sets__more-btn">
									что входит в стоимость
									<svg
										className="project-sets__more-icon"
										width="9"
										height="9"
										viewBox="0 0 9 9"
										fill="none"
									>
										<path
											d="M4.55575 0L9 4.30703V4.7084L4.55575 9L3.29735 7.78045L5.83009 5.3259L4.73097 5.37221H0V3.61235H4.73097L5.79823 3.65866L3.29735 1.23499L4.55575 0Z"
											fill="currentColor"
										></path>
									</svg>
								</a>
							</div>
							<div className="project-info__mortage project-mortage">
								<h3 className="project-mortage__title">Ипотека</h3>
								<ul className="project-mortage__list">
									<li className="project-mortage__item">
										Семейная от <span className="project-mortage__interest">5,3%</span>
									</li>
									<li className="project-mortage__item">
										Льготная от <span className="project-mortage__interest">8,5%</span>
									</li>
									<li className="project-mortage__item">
										Субсидированная{" "}
										<div className="project-mortage__interest">от 0,1% на 10 лет</div>
									</li>
								</ul>
							</div>

							<WhatsappConsultation className="project-consultation" />

							<div className="project-info__stages project-stages">
								<h3 className="project-stages__title">возможно поэтапное строительство</h3>
								<ul className="project-stages__list">
									<li className="project-stages__item">
										1 этап
										<span className="project-stages__name">фундамент</span>
									</li>
									<li className="project-stages__item">
										2 этап
										<span className="project-stages__name">коробка</span>
									</li>
									<li className="project-stages__item">
										3 этап
										<span className="project-stages__name">фасад</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Fade>

				<div className="project-mortage--bottom">
					<h3 className="project-mortage__title">Ипотека</h3>
					<ul className="project-mortage__list">
						<li className="project-mortage__item">
							Семейная от <span className="project-mortage__interest">5,3%</span>
						</li>
						<li className="project-mortage__item">
							Льготная от <span className="project-mortage__interest">8,5%</span>
						</li>
						<li className="project-mortage__item">
							Субсидированная <div className="project-mortage__interest">от 0,1% на 10 лет</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Hero;
