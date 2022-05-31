import React, { useState } from "react";
import SectionTitle from "../../Components/UI/SectionTitle";
import { css } from "@emotion/css";

const schemeStyle = css`
	.scheme__list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 75px 0 100px;
	}
	.scheme__item {
		display: flex;
		flex-direction: column;
		height: 460px;
		border-right: 1px solid #d8d8d8;
		border-left: 1px solid #d8d8d8;
		padding: 0 15px;
		justify-content: space-between;
	}
	.scheme__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header__number {
		color: var(--primary-color);
		line-height: 1.35;
		font-size: 50px;
		font-weight: 600;
	}
	.header__title {
		color: var(--font-color);
		line-height: 1.3;
		font-size: 14px;

		text-transform: uppercase;
		text-align: right;
	}
	.scheme__info {
		margin-bottom: 25px;
	}
	.info__list {
		text-align: right;
		list-style-type: none;
	}
	.info__item {
		padding: 0 0 15px 15px;
		color: var(--font-color);
		line-height: 1.4;
		font-size: 15px;
	}
	.info__number {
		display: block;
		color: var(--primary-color);
		font-weight: 600;
	}
	@media screen and (max-width: 1023px) {
		.scheme__list {
			grid-template-columns: repeat(2, 1fr);
		}
		.scheme__item {
			border-bottom: 1px solid #d8d8d8;
		}
	}
	@media screen and (max-width: 767px) {
		.header__number {
			font-size: 40px;
		}
		.scheme__list {
			grid-template-columns: 1fr;
		}
		.scheme__item {
			position: relative;
			overflow: hidden;
			height: 90px;
			border: 1px solid #d8d8d8;
			padding: 15px;
			transition: height 0.5s ease;
		}
		.scheme__item.active {
			height: 390px;
			&::before {
				opacity: 0;
			}
		}
		.scheme__item::before {
			position: absolute;
			content: "";
			display: block;
			width: 16px;
			height: 16px;
			clip-path: polygon(100% 3%, 0% 100%, 100% 100%);
			background: var(--primary-color);
			bottom: 0;
			right: 0;
			transition: opacity 1s ease;
		}

		.info__list {
			height: 305px;
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
			flex-direction: column;
		}
	}
`;

const Scheme = () => {
	const [activeCollapseTab, setActiveCollapseTab] = useState(0);

	const openCollapseTabHandeler = (index) => {
		if (activeCollapseTab === index) {
			setActiveCollapseTab(0);
		} else {
			setActiveCollapseTab(index);
		}
	};
	return (
		<section className={schemeStyle}>
			<SectionTitle className="title">Схема работы</SectionTitle>
			<ul className="scheme__list">
				<li
					className={`scheme__item ${activeCollapseTab === 1 ? "active" : ""}`}
					onClick={() => openCollapseTabHandeler(1)}
				>
					<header className="scheme__header">
						<span className="header__number">No.1</span>
						<h3 className="header__title">ОБЩЕНИЕ ПО ТЕЛЕФОНУ</h3>
					</header>
					<div className="scheme__info">
						<ol className="info__list">
							<li className="info__item">
								<span className="info__number">1</span>
								выявление потребностей заказчика
							</li>
							<li className="info__item">
								<span className="info__number">2</span>
								консультация заказчика по всем интересующим его вопросам
							</li>
							<li className="info__item">
								<span className="info__number">3</span>
								консультация по стоимости строительства
							</li>
						</ol>
					</div>
				</li>

				<li
					className={`scheme__item ${activeCollapseTab === 2 ? "active" : ""}`}
					onClick={() => openCollapseTabHandeler(2)}
				>
					<header className="scheme__header">
						<span className="header__number">No.2</span>
						<h3 className="header__title">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ И ЗАКЛЮЧЕНИЕ ДОГОВОРА</h3>
					</header>
					<div className="info">
						<ol className="info__list">
							<li className="info__item">
								<span className="info__number">1</span>
								составление технического задания
							</li>
							<li className="info__item">
								<span className="info__number">2</span>
								коммерческое предложение на проектирование (включает стоимость и сроки)
							</li>
							<li className="info__item">
								<span className="info__number">3</span>
								заключение договора
							</li>
						</ol>
					</div>
				</li>

				<li
					className={`scheme__item ${activeCollapseTab === 3 ? "active" : ""}`}
					onClick={() => openCollapseTabHandeler(3)}
				>
					<header className="scheme__header">
						<span className="header__number">No.3</span>
						<h3 className="header__title">СДАЧА РАБОТ</h3>
					</header>
					<div className="scheme__info">
						<ol className="info__list">
							<li className="info__item">
								<span className="info__number">1</span>
								сдача выполненных работ по акту
							</li>
							<li className="info__item">
								<span className="info__number">2</span>
								окончательный расчет по договору
							</li>
							<li className="info__item">
								<span className="info__number">3</span>
								коммерческое предложение на строительство
							</li>
						</ol>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Scheme;
