import React from "react";
import { css } from "@emotion/css";
import Blind from "../../../Components/UI/Blind";
import SectionSubtitle from "../../../Components/UI/SectionSubtitle";
import SectionTitle from "../../../Components/UI/SectionTitle";
import standartImg1 from "../../../Assets/Img/standart1.jpg";
import standartImg2 from "../../../Assets/Img/standart2.jpg";
import standartImg3 from "../../../Assets/Img/standart3.jpg";
import standartImg4 from "../../../Assets/Img/standart4.jpg";
import standartImg5 from "../../../Assets/Img/standart5.jpg";
import standartImg6 from "../../../Assets/Img/standart6.jpg";
import standartImg7 from "../../../Assets/Img/standart7.jpg";
import standartImg8 from "../../../Assets/Img/standart8.jpg";
import standartImg9 from "../../../Assets/Img/standart9.jpg";
import standartImg10 from "../../../Assets/Img/standart10.jpg";
import unscrollBody from "../../../Helpers/unscrollBody";

const standartGridStyle = css`
	.standart__container {
		max-width: 1440px;
		margin: 0 auto;
		width: 100%;
		padding: 0 130px;
	}
	.standart__list {
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(4, 270px);
	}
	.standart__item {
		overflow: hidden;
		position: relative;
	}
	.standart__item:first-child {
		grid-row: 1 / 3;
	}
	.standart__item:last-child {
		grid-row: 3 / 5;
		grid-column: 3 / 4;
	}
	.standart__btn {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 20px;
		width: 100%;
		height: 100%;
		text-align: left;
		color: var(--theme-color);
	}
	.standart__img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		object-fit: cover;
	}
	.standart__title {
		line-height: 1.1;
		font-size: 20px;
		font-weight: 600;
	}
	.standart__subtitle {
		margin-top: 11px;
		color: var(--theme-color);
		line-height: 1.4;
		font-size: 15px;
		font-weight: 600;
	}
	.standart__more {
		display: block;
		margin-top: 25px;
		background: var(--primary-color);
		color: var(--theme-color);
		line-height: 1;
		font-size: 16px;
		font-weight: 600;
		padding: 2px 11px 4px;
		outline: 0 !important;
		border: 0 !important;
		transition: background 0.3s ease;
		text-align: center;
	}
	.standart__btn:hover .standart__more {
		color: var(--primary-color);
		background: var(--theme-color);
	}
	@media screen and (max-width: 1439px) {
		.standart__container {
			padding: 0 20px;
		}
	}
	@media screen and (max-width: 1023px) {
		.standart__list {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(6, 330px);
		}
		.standart__item:first-child {
			grid-row: 1 / 3;
		}
		.standart__item:last-child {
			grid-row: 5 / 7;
			grid-column: 2 / 3;
		}
	}
	@media screen and (max-width: 767px) {
		.standart__list {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(10, 400px);
		}
		.standart__item:first-child {
			grid-row: auto;
		}
		.standart__item:last-child {
			grid-row: auto;
			grid-column: auto;
		}
	}
	@media screen and (max-width: 425px) {
		.standart__list {
			grid-template-rows: repeat(10, 300px);
		}
	}
`;
const StandartGrid = ({ setState }) => {
	const openSideInfoHandler = (index) => {
		setState(index);
		unscrollBody();
	};
	return (
		<section className={standartGridStyle}>
			<div className="standart__container">
				<SectionTitle>Nova стандарт</SectionTitle>
				<SectionSubtitle>Наш подход к проектированию и строительству домов</SectionSubtitle>
				<ul className="standart__list">
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(1)}>
							<img className="standart__img" src={standartImg1} alt="img" />
							<h3 className="standart__title">Современный и долговечный продукт</h3>
							<p className="standart__subtitle">
								Мы строим надежные дома, которые долго прослужат нашим заказчикам с минимальными...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(2)}>
							<img className="standart__img" src={standartImg2} alt="img" />
							<h3 className="standart__title">Комплекс услуг</h3>
							<p className="standart__subtitle">
								Наш заказчик получает ответы на любые вопросы и оперативное решение задач связан...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(3)}>
							<img className="standart__img" src={standartImg3} alt="img" />
							<h3 className="standart__title">Гарантия</h3>
							<p className="standart__subtitle">
								За всю историю существования у нашей компании не было ни одного судебного иска. ...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(4)}>
							<img className="standart__img" src={standartImg4} alt="img" />
							<h3 className="standart__title">Функциональные планировки</h3>
							<p className="standart__subtitle">
								Грамотное зонирование помещений значительно увеличивает удобство про...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(5)}>
							<img className="standart__img" src={standartImg5} alt="img" />
							<h3 className="standart__title">Надежность всех конструкций</h3>
							<p className="standart__subtitle">
								Мы проектируем и строим дома так, чтобы они служили долго, без дополнительного р...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(6)}>
							<img className="standart__img" src={standartImg6} alt="img" />
							<h3 className="standart__title">Энергоэффективность</h3>
							<p className="standart__subtitle">
								Наши дома помогают экономить на отоплении, поскольку мы профессионально подходим...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(7)}>
							<img className="standart__img" src={standartImg7} alt="img" />
							<h3 className="standart__title">Шумоизоляция</h3>
							<p className="standart__subtitle">
								В наших домах тихо, поскольку мы уделяем особое внимание вопросу шумоизоляции ка...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(8)}>
							<img className="standart__img" src={standartImg9} alt="img" />
							<h3 className="standart__title">Экологичные материалы</h3>
							<p className="standart__subtitle">
								Любые строительные конструкции наших домов не наносят вред здоровью. ...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(9)}>
							<img className="standart__img" src={standartImg8} alt="img" />
							<h3 className="standart__title">Инженерные сети</h3>
							<p className="standart__subtitle">
								Мы надежно проектируем все инженерные сети, а также детально продумываем удобств...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
					<li className="standart__item">
						<button className="standart__btn" onClick={() => openSideInfoHandler(10)}>
							<img className="standart__img" src={standartImg10} alt="img" />
							<h3 className="standart__title">Качество строительства</h3>
							<p className="standart__subtitle">
								Мы разработали и внедрили систему контроля качества на этапах проектирования и с...
							</p>
							<span className="standart__more">подробнее</span>
						</button>
						<Blind />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default StandartGrid;
