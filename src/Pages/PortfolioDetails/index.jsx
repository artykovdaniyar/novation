import React from "react";
import Container from "../../Components/Layouts/Container";
import Fancybox from "../../Components/Shared/Fancybox";
import PageNav from "../../Components/Shared/PageNav";
import squareIcon from "../../Assets/Img/Icons/area-back.svg";
import bedIcon from "../../Assets/Img/Icons/bed.svg";

import LinkArrow from "../../Components/UI/LinkArrow";
import portfolioImg1 from "../../Assets/Img/portfolio-details-1.jpg";
import portfolioImg2 from "../../Assets/Img/portfolio-details-2.jpg";
import portfolioImg3 from "../../Assets/Img/portfolio-details-3.jpg";
import portfolioImg4 from "../../Assets/Img/portfolio-details-4.jpg";
import portfolioImg5 from "../../Assets/Img/portfolio-details-5.jpg";
import portfolioImg6 from "../../Assets/Img/portfolio-details-6.jpg";
import portfolioImg7 from "../../Assets/Img/portfolio-details-7.jpg";
import portfolioImg8 from "../../Assets/Img/portfolio-details-8.jpg";
import portfolioImg9 from "../../Assets/Img/portfolio-details-9.jpg";
import portfolioImg10 from "../../Assets/Img/portfolio-details-10.jpg";
import portfolioImg11 from "../../Assets/Img/portfolio-details-11.jpg";
import portfolioImg12 from "../../Assets/Img/portfolio-details-12.jpg";
import portfolioImg13 from "../../Assets/Img/portfolio-details-13.jpg";
import portfolioImg14 from "../../Assets/Img/portfolio-details-14.jpg";
import portfolioImg15 from "../../Assets/Img/portfolio-details-15.jpg";
import portfolioImg16 from "../../Assets/Img/portfolio-details-16.jpg";
import portfolioImg17 from "../../Assets/Img/portfolio-details-17.jpg";
import portfolioImg18 from "../../Assets/Img/portfolio-details-18.jpg";
import portfolioImg19 from "../../Assets/Img/portfolio-details-19.jpg";
import portfolioImg20 from "../../Assets/Img/portfolio-details-20.jpg";
import portfolioImg21 from "../../Assets/Img/portfolio-details-21.jpg";
import portfolioImg22 from "../../Assets/Img/portfolio-details-22.jpg";
import portfolioProjectImg from "../../Assets/Img/portfolio-details-link.jpg";

import { css } from "@emotion/css";
import { Fade } from "react-awesome-reveal";

const portfolioDetailsStyle = css`
	.portfolio-details {
		&__row {
			display: flex;
			width: 100%;
		}
		&__gallery {
			flex-grow: 1;
		}
		&__item {
			width: 100%;
			margin-bottom: 20px;
		}
		&__link {
			width: 100%;
		}
		&__img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}

		&__info {
			min-width: calc((100% / 12) * 4);
			flex-shrink: 1;
			padding-left: 30px;
		}
		&__info-container {
			margin-top: 20px;
			position: fixed;
			display: flex;
			flex-direction: column;
			top: 108px;
		}
		&__pagnav {
			color: var(--primary-color);
			font-weight: 600;
			margin-bottom: 10px;
			ul {
				flex-wrap: wrap;
				padding: 0;
			}
			li {
				padding: 5px 0;
			}
		}
		&__info-title {
			margin-bottom: 10px;
			font-size: 30px;
			color: #363636;
			line-height: 1.1;
			font-weight: 600;
		}
		&__info-wrapper {
			margin-top: 48px;
		}
		&__info-row {
			display: flex;
			align-items: center;
		}
		&__info-icon {
			margin: 7px 10px 7px 0;
		}
		&__info-name {
			display: inline-block;
			color: #9b9ea2;
			line-height: 1.3;
			font-size: 14px;
			font-weight: 600;
			margin-right: 7px;
		}
		&__info-num {
			color: #606067;
			line-height: 1.3;
			font-size: 14px;
			font-weight: 600;
		}
		&__project {
			margin-top: 48px;
		}
		&__project-img {
			margin-bottom: 10px;
		}
	}
	@media screen and (max-width: 991px) {
		.portfolio-details {
			&__row {
				flex-direction: column-reverse;
			}
			&__info {
				margin-bottom: 65px;
				margin-top: 50px;
				padding-left: 0;
			}
			&__info-row {
				flex-wrap: wrap;
				padding-right: 10px;
			}
			&__info-container {
				position: static;
			}
			&__info-wrapper {
				display: flex;
				align-items: flex-end;
				justify-content: space-between;
			}
			&__info-icon {
				margin-right: 100%;
			}

			&__project-img {
				width: 20vw;
				height: 124px;
				object-fit: cover;
			}
		}
	}
	@media screen and (max-width: 767px) {
		.portfolio-details {
			&__info-wrapper {
				flex-wrap: wrap;
			}
			&__project {
				margin-top: 20px;
			}
			&__project-img {
				display: none;
			}
		}
	}
	@media screen and (max-width: 424px) {
		.portfolio-details {
			&__info-icon {
				margin-right: 10px;
			}
			&__info-wrapper {
				flex-direction: column;
				align-items: flex-start;
			}
		}
	}
`;

const PortfolioDetails = () => {
	return (
		<Fade triggerOnce className={portfolioDetailsStyle}>
			<Container>
				<div className="portfolio-details__row">
					<Fade triggerOnce delay="150">
						<ul className="portfolio-details__gallery">
							<Fancybox>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg1}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											src={portfolioImg1}
											alt="Изображения стройки дома"
											className="portfolio-details__img"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg2}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg2}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg3}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg3}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg4}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg4}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg5}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg5}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg6}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg6}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg7}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg7}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg8}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg8}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>

								<li className="portfolio-details__item">
									<a
										href={portfolioImg9}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg9}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg10}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg10}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg11}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg11}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg12}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg12}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg13}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg13}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg14}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg14}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg15}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg15}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>

								<li className="portfolio-details__item">
									<a
										href={portfolioImg16}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg16}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg17}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg17}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg18}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg18}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg19}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg19}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg20}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg20}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg21}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg21}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
								<li className="portfolio-details__item">
									<a
										href={portfolioImg22}
										data-fancybox="gallery"
										className="portfolio-details__link"
									>
										<img
											className="portfolio-details__img"
											src={portfolioImg22}
											alt="Изображения стройки дома"
										/>
									</a>
								</li>
							</Fancybox>
						</ul>
					</Fade>

					<aside className="portfolio-details__info">
						<div className="portfolio-details__info-container">
							<Fade triggerOnce delay="30">
								<PageNav
									prevPage={{ name: "Портфолио", path: "/portfolio" }}
									curPage="СНТ Изумруд 5"
									className="portfolio-details__pagnav"
								/>
							</Fade>
							<Fade triggerOnce delay="50">
								<h2 className="portfolio-details__info-title">СНТ Изумруд 5</h2>
							</Fade>

							<div className="portfolio-details__info-wrapper">
								<Fade triggerOnce delay="70">
									<p className="portfolio-details__info-row">
										<img
											src={squareIcon}
											alt="Иконка полощади"
											className="portfolio-details__info-icon"
										/>
										<span className="portfolio-details__info-name">общая площадь</span>
										<span className="portfolio-details__info-num">
											169м<sup>2</sup>
										</span>
									</p>
								</Fade>
								<Fade triggerOnce delay="90">
									<p className="portfolio-details__info-row">
										<img
											src={bedIcon}
											alt="Иконка полощади"
											className="portfolio-details__info-icon"
										/>
										<span className="portfolio-details__info-name">общая площадь</span>
										<span className="portfolio-details__info-num">4</span>
									</p>
								</Fade>

								<div className="portfolio-details__project">
									<Fade triggerOnce delay="110">
										<img
											width="250"
											height="162"
											src={portfolioProjectImg}
											alt=""
											className="portfolio-details__project-img"
										/>
									</Fade>
									<Fade triggerOnce delay="130">
										<LinkArrow path="projects/106">к проекту №106</LinkArrow>
									</Fade>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</Container>
		</Fade>
	);
};

export default PortfolioDetails;
