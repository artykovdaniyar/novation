import React, { useState } from "react";
import { css } from "@emotion/css";
import { Fade } from "react-awesome-reveal";
import tabImg1 from "../../Assets/Img/tab-img1.jpg";
import tabImg2 from "../../Assets/Img/tab-img2.jpg";

const topicTabsStyle = css`
	padding-bottom: 100px;
	.header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 60px;
	}
	.header__item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90px;
		flex-grow: 1;
		padding: 7px 18px;
		border-left: 1px solid #d8d8d8;
		&:last-child {
			border-right: 1px solid #d8d8d8;
		}
	}
	.header__btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 0 5px;
		font-size: 14px;

		text-align: center;
		color: var(--font-color);
		line-height: 1.1;
		background-color: var(--theme-color);
		transition: background 0.3s ease, color 0.3s ease, filter 0.3s ease;
		p {
			margin-top: 9px;
			color: #9a9a9a;
			transition: color 0.3s ease;
		}
		&:hover {
			color: var(--theme-color);
			background: var(--primary-color);
			p {
				color: #67dac0;
			}
		}
		&.active {
			color: var(--theme-color);
			background: var(--primary-color);
			p {
				color: #67dac0;
			}
		}
	}
	.content__item {
		display: none;
	}
	.content__item.active {
		display: block;
	}
	.content__promo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		.img-wrapper {
			flex-grow: 1;
		}
		.img {
			margin-right: 20px;
		}
		.info {
			flex-grow: 1;
		}
		.title {
			color: #606067;
			line-height: 1.2;
			font-size: 24px;
			font-weight: 600;
		}
		.subtitle {
			color: var(--gray-color);
			line-height: 1.3;
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 30px;
		}
		.price {
			color: var(--primary-color);
			line-height: 1.2;
			font-size: 20px;
			font-weight: 600;
			white-space: nowrap;
		}
	}
	.content__descr {
		display: flex;
		flex-wrap: wrap;
		margin-top: 60px;
		.column {
			flex-basis: 50%;
		}
		.title {
			margin-top: 25px;
			color: #606067;
			line-height: 1.2;
			font-size: 24px;
			font-weight: 600;
			margin-bottom: 25px;
			flex-grow: 1;
			width: 100%;
		}
		.list {
			padding: 0 15px;
			flex-grow: 1;
		}
		.item {
			color: #606067;
			line-height: 1.3;
			font-size: 10px;

			padding-bottom: 15px;
			padding-left: 5px;
		}
		.item::marker {
			color: var(--gray-color);
		}
		.sub-list {
			margin-top: 5px;
			list-style-type: "-";
			padding-left: 40px;
			li {
				padding-bottom: 7px;
			}
		}
	}

	@media (max-width: 1200px) {
		.content__descr {
			margin-top: 0;
			flex-direction: column;
			.list-wrapper {
				width: 100%;

				display: flex;
			}
		}
	}
	@media (max-width: 991px) {
		.content__promo {
			.info {
				margin-top: 40px;
				flex-grow: 1;
			}
		}
	}
	@media (max-width: 767px) {
		.header {
			flex-direction: column;
			padding-bottom: 40px;
		}
		.header__item {
			border-right: 1px solid #d8d8d8;
			margin-bottom: 10px;
			height: 80px;
		}
		.content__promo {
			.img-wrapper {
				margin-right: 0px;
			}
			.img {
				width: 100%;
				height: auto;
			}
		}
		.content__descr {
			.list-wrapper {
				flex-direction: column;
			}
			.sub-list {
				padding-left: 20px;
			}
		}
	}
`;

const TopicTabs = () => {
	const [tabNumToShow, setTabNumToShow] = useState(1);
	const toggleTabs = (index) => {
		setTabNumToShow(index);
	};
	return (
		<section className={topicTabsStyle}>
			<ul className="header">
				<li className="header__item">
					<button
						className={tabNumToShow === 1 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(1)}
					>
						Архитектурный раздел
						<p>
							от 350 ₽/м<sup>2</sup>
						</p>
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 2 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(2)}
					>
						Конструктивный раздел
						<p>
							от 350 ₽/м<sup>2</sup>
						</p>
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 3 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(3)}
					>
						Дизайн и инженерные сети
						<p>
							от 1000 ₽/м<sup>2</sup>
						</p>
					</button>
				</li>
			</ul>

			<ul className="content">
				<li className={tabNumToShow === 1 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<header className="content__promo">
							<div className="img-wrapper">
								<img
									width="474"
									height="308"
									src={tabImg1}
									alt="Изображение дома"
									className="img"
								/>
							</div>
							<div className="info">
								<h3 className="title">Архитектурный раздел - АР</h3>
								<h4 className="subtitle">срок проектирования 1,5 месяца</h4>
								<p className="price">
									от 350 ₽/м<sup>2</sup>
								</p>
							</div>
						</header>
						<div className="content__descr">
							<div className="column">
								<h3 className="title">Базовый комплект</h3>
								<div className="list-wrapper">
									<ol className="list">
										<li className="item">
											Пояснительная записка с основными технико-экономическими показателями (ТЭП)
										</li>
										<li className="item">
											Поэтажные кладочные планы с указанием всех кладочных размеров и осевых
											привязок
										</li>
										<li className="item">
											Поэтажные функциональные планы с расстановкой мебели для понимания зонирования
											и габаритов помещений
										</li>
										<li className="item">План перекрытия для домов 2-х и более этажей</li>
										<li className="item">План кровли с указанием размеров скатов и уклонов</li>
										<li className="item">
											Фасады с указанием высотных отметок всех основных элементов
										</li>
									</ol>
									<ol className="list">
										<li className="item">Спецификация материалов и элементов наружной отделки</li>
										<li className="item">
											Разрезы по основным архитектурным объемам для понимания высоты помещений,
											дверных и оконных проемов
										</li>
										<li className="item">Вентканалы в кладочных кирпичных размерах</li>
										<li className="item">
											Оконные проемы подсчет типологии окон, основные размеры и дизайн
										</li>
										<li className="item">
											Цветовое решение фасадов, трехмерные 3D изображения с 4-х сторон
										</li>
									</ol>
								</div>
							</div>
							<div className="column">
								<h3 className="title">Расширенный комплект</h3>
								<ol className="list">
									<li className="item">
										Расчет и конструирование фундамента на основании геологии участка. Стоимость
										расчета формируется индивидуально после изучения проекта и геологии участка
										инженером конструктором
									</li>
									<li className="item">Конструктивные решения кровли (+7 000 рублей)</li>
								</ol>
							</div>
						</div>
					</Fade>
				</li>

				<li className={tabNumToShow === 2 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<header className="content__promo">
							<div className="img-wrapper">
								<img
									width="474"
									height="308"
									src={tabImg1}
									alt="Изображение дома"
									className="img"
								/>
							</div>
							<div className="info">
								<h3 className="title">Конструктивный раздел (КР)</h3>
								<h4 className="subtitle">срок проектирования 1,5 месяца</h4>
								<p className="price">
									от 350 ₽/м<sup>2</sup>
								</p>
							</div>
						</header>
						<div className="content__descr">
							<div className="column">
								<h3 className="title">Исходные данные для разработки проекта</h3>
								<div className="list-wrapper">
									<ol className="list">
										<li className="item">Геологические изыскания</li>
										<li className="item">Топографическая съемка</li>
									</ol>
									<ol className="list" start={2}>
										<li className="item">Архитектурный проект / техническое задание</li>
									</ol>
								</div>
							</div>
							<div className="column">
								<h3 className="title">Состав проекта КР</h3>
								<ol className="list">
									<li className="item">
										Конструктивные решения фундамента:
										<ul className="sub-list">
											<li>опалубочный план фундамента</li>
											<li>разрез</li>
											<li>армирование</li>
											<li>спецификация</li>
											<li>детали и узлы</li>
										</ul>
									</li>
									<li className="item">
										Конструктивные решения железобетонных конструкций (колонны, стены, перекрытия,
										лестницы, балки монолитные, перемычки, армопояс)
										<ul className="sub-list">
											<li>опалубочные планы</li>
											<li>разрез</li>
											<li>армирование</li>
											<li>спецификация</li>
											<li>узлы</li>
										</ul>
									</li>
									<li className="item">
										Конструктивные решения металлических конструкций (колонны террасы, металлические
										колонны балконов)
										<ul className="sub-list">
											<li>разрез</li>
											<li>узлы</li>
											<li>спецификация</li>
										</ul>
									</li>
									<li className="item">
										Конструктивные решения ограждающих конструкций
										<ul className="sub-list">
											<li>разрез наружной стены</li>
											<li>узлы (перевязка стен и перегородок)</li>
										</ul>
									</li>
									<li className="item">
										Конструктивные решения кровли
										<ul className="sub-list">
											<li>стропильная система кровли</li>
											<li>разрезы</li>
											<li>узлы</li>
											<li>спецификация материалов</li>
										</ul>
									</li>
								</ol>
							</div>
						</div>
					</Fade>
				</li>
				<li className={tabNumToShow === 3 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<header className="content__promo">
							<div className="img-wrapper">
								<img
									width="474"
									height="308"
									src={tabImg2}
									alt="Изображение дома"
									className="img"
								/>
							</div>
							<div className="info">
								<h3 className="title">Индивидуальный дизайн-проект</h3>
								<h4 className="subtitle">срок проектирования 2 месяца</h4>
								<p className="price">
									от 1000 ₽/м<sup>2</sup>
								</p>
							</div>
						</header>
						<div className="content__descr">
							<h3 className="title">Дизайн-проект</h3>
							<div className="column">
								<ol className="list">
									<li className="item">Общие данные</li>
									<li className="item">Маркировочные планы этажей</li>
									<li className="item">Планы этажей с расстановкой мебели</li>
									<li className="item">Ведомости отделки</li>
									<li className="item">План полов</li>
									<li className="item">План потолков</li>
									<li className="item">План осветительного оборудования</li>
									<li className="item">
										Планы этажей с размещением электровыключателей и терморегуляторов
									</li>
								</ol>
							</div>
							<div className="column">
								<ol className="list">
									<li className="item">Планы этажей с размещением розеток и электровыводов</li>
									<li className="item">Развертки стен</li>
									<li className="item">Планы санузлов с привязкой сантехнического оборудования</li>
									<li className="item">Узлы, Фрагменты, Сечения и Детали</li>
									<li className="item">3D Визуализации помещений</li>
									<li className="item">Спецификации материалов</li>
									<li className="item">Образцы отделки фото</li>
								</ol>
							</div>
						</div>
					</Fade>
				</li>
			</ul>
		</section>
	);
};

export default TopicTabs;
