import React, { useState } from "react";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkArrow from "../../Components/UI/LinkArrow";
import { Fade } from "react-awesome-reveal";
import Blind from "../../Components/UI/Blind";

import squareIcon from "../../Assets/Img/Icons/area-back.svg";
import bedIcon from "../../Assets/Img/Icons/bed.svg";

import projectTab1Img from "../../Assets/Img/project-tab1.png";
import projectTab11Img from "../../Assets/Img/project-tab1-1.jpg";
import projectTab12Img from "../../Assets/Img/project-tab1-2.jpg";

import projectTab2Img from "../../Assets/Img/project-tab2.png";
import projectTab21Img from "../../Assets/Img/project-tab2-1.jpg";
import projectTab22Img from "../../Assets/Img/project-tab2-2.jpg";

import projectTab3Img from "../../Assets/Img/project-tab3.png";
import projectTab31Img from "../../Assets/Img/project-tab3-1.jpg";
import projectTab32Img from "../../Assets/Img/project-tab3-2.jpg";
import projectTab33Img from "../../Assets/Img/project-tab3-3.jpg";

import projectTab5Img from "../../Assets/Img/project-tab5.png";
import projectTab51Img from "../../Assets/Img/project-tab5-1.jpg";
import projectTab52Img from "../../Assets/Img/project-tab5-2.jpg";

import projectTab6Img from "../../Assets/Img/project-tab6.png";
import projectTab61Img from "../../Assets/Img/project-tab6-1.jpg";
import projectTab62Img from "../../Assets/Img/project-tab6-2.jpg";

import projectTab7Img from "../../Assets/Img/project-tab7.png";
import projectTab71Img from "../../Assets/Img/project-tab7-1.jpg";
import projectTab72Img from "../../Assets/Img/project-tab7-2.jpg";

const completedProjectsStyle = css`
	position: relative;
	.swiper {
		flex-direction: column-reverse;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		overflow: hidden;
		list-style: none;
		padding: 0;
		z-index: 1;
		height: 135px;
		margin: 96px 0 60px;
	}
	.swiper-vertical > .swiper-wrapper {
		flex-direction: column;
	}
	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 515px;
		z-index: 1;
		display: flex;
		transition-property: transform;
		box-sizing: content-box;
	}
	.swiper-android .swiper-slide,
	.swiper-wrapper {
		transform: translate3d(0px, 0, 0);
	}
	.swiper-pointer-events {
		touch-action: pan-y;
	}
	.swiper-pointer-events.swiper-vertical {
		touch-action: pan-x;
	}
	.swiper-slide {
		position: relative;
		width: 100%;
		/* min-width: 152.5px; */
		height: 100%;
		padding: 15px 8px;
		flex-shrink: 0;
		transition: padding 0.5s ease-in-out !important;
		cursor: pointer;
	}
	.swiper-slide-active {
		padding: 0;
		.tabs_img-wrapper {
			background: #05a984;
			opacity: 0.8;
			font-size: 20px;
		}
	}
	.swiper-slide:hover {
		padding: 0;
	}
	.swiper-slide:before {
		content: "";
		z-index: 3;
		position: absolute;
		top: 0;
		left: -1px !important;
		border: 1px solid #d8d8d8;
		height: 100%;
	}
	.tabs_btn {
		display: block;
		width: 100%;
		height: 100%;
		position: relative;
	}

	.tabs_img {
		width: 100%;
		height: 100%;
		object-fit: none;
	}
	.swiper-slide:hover .tabs_img-wrapper {
		background: #05a984;
		opacity: 0.8;
		font-size: 20px;
	}
	.tabs_img-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		opacity: 0.4;
		position: absolute;
		top: 0;
		left: 0;
		line-height: 1.2;
		font-size: 14px;
		font-weight: 600;
		transition: background 0.4s ease-in-out, opacity 0.4s ease-in;
	}

	.tab-content {
		&__list {
		}
		&__item {
			display: none;
		}
		&__item.active {
			display: flex;
		}
		&__row {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&__column-1 {
			position: relative;
			display: flex;
		}
		&__column-2 {
			position: relative;
			display: flex;
			flex-wrap: wrap;
		}
		&__wrapper {
			flex-grow: 1;
		}
	}
	.tab-column-1 {
		&__img {
			width: 373px;
			height: 280px;
			object-fit: cover;
		}
		&__info {
			margin-left: 30px;
		}
		&__title {
			color: #363636;
			line-height: 1.25;
			font-size: 24px;
			font-weight: 600;
			white-space: nowrap;
			margin-bottom: 12px;
		}
		&__parameter {
			margin-top: 35px;
		}
		&__row {
			display: flex;
			align-items: center;
		}
		&__row-icon {
			margin: 7px 10px 7px 0;
		}
		&__row-name {
			color: #9b9ea2;
			line-height: 1.3;
			font-size: 14px;
			font-weight: 600;
		}
		&__row-num {
			color: #606067;
			margin-left: 7px;
		}
	}
	.tab-column-2 {
		&__img {
			width: 271px;
			height: 176px;
			object-fit: cover;
		}
		&__info {
			margin-left: 30px;
		}
		&__title {
			color: #9b9ea2;
			line-height: 1.3;
			font-size: 14px;
			font-weight: 600;
			transition: all 0.5s ease;
			margin-bottom: 7px;
		}
		&__price {
			display: block;
			color: #05a984;
			line-height: 1;
			font-size: 20px;
			font-weight: 700;
			margin-bottom: 16px;
		}
	}

	@media screen and (max-width: 1439px) {
		.swiper-slide {
			padding: 11px 6px;
		}
		.tab-content {
			&__column-2 {
				flex-direction: column;
			}
		}
	}
	@media screen and (max-width: 1023px) {
		.swiper-slide {
			padding: 8px 7px;
		}
		.tab-content {
			&__column-1 {
				margin-bottom: 23px;
			}
			&__column-2 {
				flex-direction: row;
			}
		}
		.tab-column-1 {
			&__img {
				width: 43vw;
				height: auto;
			}
		}
		.tab-column-2 {
			&__img {
				width: 43vw;
				height: auto;
			}
		}
	}
	@media screen and (max-width: 767px) {
		.swiper {
			height: 23vw;
		}
		.tabs_img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		.tab-column-1 {
			&__img {
				width: 100%;
			}
			&__info {
				margin-left: 0;
				margin-top: 26px;
			}
			&__parameter {
				margin-top: 30px;
				margin-bottom: 60px;
			}
		}
		.tab-column-2 {
			&__img {
				width: 100%;
			}
			&__info {
				margin-left: 0;
				margin-top: 26px;
			}
		}
		.tab-content {
			&__column-1 {
				flex-direction: column;
			}
			&__column-2 {
				width: 100%;
				flex-direction: column;
			}
		}
	}
`;

const CompletedProjects = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(1);
	const selectTabHandler = (index) => {
		setActiveTabIndex(index);
	};
	return (
		<section className={completedProjectsStyle}>
			<div className="container">
				<Swiper slidesPerView={7}>
					<SwiperSlide>
						<img src={projectTab1Img} alt="" className="tabs_img" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={projectTab1Img} alt="" className="tabs_img" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={projectTab1Img} alt="" className="tabs_img" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={projectTab1Img} alt="" className="tabs_img" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={projectTab1Img} alt="" className="tabs_img" />
					</SwiperSlide>
				</Swiper>
				<Swiper
					speed={500}
					slideToClickedSlide={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={7}
					breakpoints={{
						0: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 5,
						},
						1023: {
							slidesPerView: 7,
						},
					}}
				>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(1)}>
						<div className="tabs_btn">
							<img src={projectTab1Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(2)}>
						<div className="tabs_btn">
							<img src={projectTab2Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(3)}>
						<div className="tabs_btn">
							<img src={projectTab3Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(4)}>
						<div className="tabs_btn">
							<img src={projectTab3Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(5)}>
						<div className="tabs_btn">
							<img src={projectTab5Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(6)}>
						<div className="tabs_btn">
							<img src={projectTab6Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide tag="button" onClick={() => selectTabHandler(7)}>
						<div className="tabs_btn">
							<img src={projectTab7Img} alt="tab img" className="tabs_img" />
							<div className="tabs_img-wrapper"></div>
						</div>
					</SwiperSlide>
				</Swiper>

				<ul className="tab-content__list">
					<li className={`tab-content__item ${activeTabIndex === 1 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab11Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">ул. Дзержиннского</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													130 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">4</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab12Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">3 330 000 ₽</span>
										<LinkArrow path="projects/81">К проекту №81</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
					<li className={`tab-content__item ${activeTabIndex === 2 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab21Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">пер. Ярославского</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													151 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">3</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab22Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">4 470 000 ₽</span>
										<LinkArrow path="projects/102">К проекту №102</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
					<li className={`tab-content__item ${activeTabIndex === 3 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab31Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">ул. 3-й Мастеровой</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													163 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">4</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab32Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">4 070 000 ₽</span>
										<LinkArrow path="projects/36">К проекту №36</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
					<li className={`tab-content__item ${activeTabIndex === 4 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab33Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">ул. Галактическая</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													163 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt=""
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">4</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab32Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">4 070 000 ₽</span>
										<LinkArrow path="projects/36">К проекту №36</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
					<li className={`tab-content__item ${activeTabIndex === 5 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab51Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">Жемчужный 1</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt="Изображение дома"
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													118 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt="Изображение дома"
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">3</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab52Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">3 130 000 ₽</span>
										<LinkArrow path="projects/235">К проекту №235</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
					<li className={`tab-content__item ${activeTabIndex === 6 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab61Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">ул. Таисии Юркевич</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt="Изображение дома"
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													157 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt="Изображение дома"
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">4</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab62Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">3 960 000 ₽</span>
										<LinkArrow path="projects/148">К проекту №148</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
					<li className={`tab-content__item ${activeTabIndex === 7 ? "active" : ""}`}>
						<Fade triggerOnce className="tab-content__wrapper">
							<div className="tab-content__row">
								<div className="tab-content__column-1">
									<img src={projectTab71Img} alt="Изображение дома" className="tab-column-1__img" />
									<div className="tab-column-1__info">
										<h3 className="tab-column-1__title">КП Близкий 9</h3>
										<LinkArrow path="portfolio/dzerzhinnskogo">посмотреть дом </LinkArrow>
										<div className="tab-column-1__parameter">
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={squareIcon}
													alt="Изображение дома"
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">общая площадь</span>
												<span className="tab-column-1__row-num">
													296 m <sup>2</sup>
												</span>
											</p>
											<p className="tab-column-1__row">
												<img
													width="28"
													height="28"
													src={bedIcon}
													alt="Изображение дома"
													className="tab-column-1__row-icon"
												/>
												<span className="tab-column-1__row-name">количество спален</span>
												<span className="tab-column-1__row-num">4</span>
											</p>
										</div>
									</div>
								</div>
								<div className="tab-content__column-2">
									<img src={projectTab72Img} alt="" className="tab-column-2__img" />
									<div className="tab-column-2__info">
										<h3 className="tab-column-2__title">цена дома</h3>
										<span className="tab-column-2__price">7 140 000 ₽</span>
										<LinkArrow path="projects/251">К проекту №251</LinkArrow>
									</div>
								</div>
							</div>
						</Fade>
					</li>
				</ul>
			</div>
			<Blind duration="1s" />
		</section>
	);
};

export default CompletedProjects;
