import React, { useState } from "react";
import { css } from "@emotion/css";
import numberWithSpaces from "../../Helpers/numberWithSpaces";
import calculateMonthlyPayment from "../../Helpers/calculateMonthlyPayment";
import InputRange from "../UI/InputRange";
import centerInvestLogo from "../../Assets/Img/centrinvest.png";
import lokaLogo from "../../Assets/Img/loko_bank.png";
import vtbLogo from "../../Assets/Img/vtb.png";
import sberLogo from "../../Assets/Img/sberbank.png";

const calculatorStyle = css`
	margin: 80px 15px 40px 15px;

	.row {
		display: flex;
	}
	.title {
		margin-bottom: 40px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 20px;
		font-weight: 600;
	}
	.calculator {
		margin-right: -15px;
		margin-left: -15px;
		display: grid;
		grid-template-rows: auto max-content;
		grid-template-columns: calc((100% / 12) * 8) 1fr;
		flex-basis: calc((100% / 12) * 9);
		padding: 0 15px;
	}
	.mortgage {
		padding-right: 30px;
		border-right: 1px solid #d8d8d8;
		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: var(--font-color);
			line-height: 1.3;
			font-size: 18px;
		}
		&__result {
			font-weight: 600;
		}
		&__slider {
			margin-bottom: 30px;
		}

		&__footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 5px;
			color: #606067;
			line-height: 1.2;
			font-size: 14px;
		}
	}

	.result {
		padding-left: 30px;
		padding-right: 15px;
		&__payment-title,
		&__interest-title {
			display: block;
			margin-bottom: 10px;
			color: #606067;
			line-height: 1.2;
			font-size: 12px;
			font-weight: 500;
			white-space: nowrap;
		}
		&__payment-amount {
			position: relative;
			color: var(--font-color);
			line-height: 1.2;
			font-size: 32px;
			font-weight: 700;
			white-space: nowrap;
			&::before {
				content: "";
				position: absolute;
				display: block;
				left: 0;
				bottom: -10px;
				height: 2px;
				width: 100px;
				background-color: var(--primary-color);
			}
		}
		&__payment,
		&__interest {
			margin-bottom: 22px;
		}
		&__interest-num {
			color: var(--font-color);
			line-height: 1.2;
			font-size: 21px;
			font-weight: 700;
		}
	}

	.subtitle {
		flex-basis: calc((100% / 12) * 8);
		padding-right: 30px;
		border-right: 1px solid #d8d8d8;
		&__text {
			color: var(--gray-color--light);
			line-height: 1.3;
			font-size: 14px;
			margin-bottom: 0;
		}
	}

	.consultation {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-basis: calc((100% / 12) * 4);
		padding: 0 15px 22px 30px;
		height: fit-content;
		&__title {
			color: var(--gray-color);
			line-height: 1.2;
			font-size: 14px;
			margin-bottom: 1px;
			display: block;
		}
		&__phone {
			font-size: 18px;
			margin-bottom: 10px;
			display: block;
			color: var(--primary-color);
			line-height: 1.13;
			font-weight: 600;
			white-space: nowrap;
		}
		&__phone:hover {
			text-decoration: underline;
		}
		&__whatsapp {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: 0px;
			background: var(--primary-color);
			color: var(--theme-color);
			line-height: 1;
			font-size: 16px;
			font-weight: 600;
			transition: background 0.3s ease;
			text-align: center;
			width: max-content;
			padding: 2px 25px 4px;
		}
		&__whatsapp:hover {
			background: var(--theme-color);
			color: var(--primary-color);
		}
		&__whatsapp-icon {
			margin-right: 7px;
			transition: 0.3s color ease;
		}
	}
	.banks {
		display: block;
		flex-basis: calc((100% / 12) * 3);
		max-width: calc((100% / 12) * 3);
		margin: 15px;
		padding-right: 15px;
		padding-left: 15px;
		&__list {
			display: flex;
			flex-wrap: wrap;
			height: 100%;
		}
		&__item {
			width: 50%;
			margin-bottom: 40px;
			height: 35px;
			padding: 0;
		}
		&__logo {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		&__item:nth-child(2n) {
			padding-left: 25px;
		}
	}

	@media screen and (max-width: 1200px) {
		.row {
			flex-direction: column;
		}
		.subtitle {
			margin-bottom: 60px;
		}
		.banks {
			flex-basis: 100%;
			max-width: 100%;
			&__item {
				padding: 0;
			}
		}
	}
	@media screen and (max-width: 767px) {
		margin: 40px 0 0;
		.calculator {
			grid-template-rows: auto;
			grid-template-columns: 1fr;
		}
		.mortgage {
			padding-right: 0;
			border-right: none;
			&__slider:last-child::after {
				content: "";
				display: block;
				height: 1px;
				width: 245px;
				background-color: #d8d8d8;
				margin-top: 30px;
			}
		}
		.result {
			display: flex;
			padding: 0;
			margin-bottom: 37px;
			&__payment {
				width: 50%;
			}
		}
		.subtitle {
			padding-right: 0;
			border-right: none;
			order: 4;
		}
		.consultation {
			padding: 0;
			margin-bottom: 40px;
			&__phone {
				margin-top: 5px;
			}
			&__whatsapp {
				position: static;
			}
		}

		.banks {
			margin: 0;
			padding: 0;
			&__logo {
				height: auto;
				max-width: 100%;
				max-height: 100%;
			}
		}
	}
	@media screen and (max-width: 424px) {
		.result {
			justify-content: space-between;
		}
		.banks__item:nth-child(2n) {
			padding-left: 25px;
		}
		.result__payment {
			width: auto;
		}
	}
`;

const Calculator = () => {
	const [mortgageAmount, setMortgageAmount] = useState(100000);
	const [mortgageTerm, setMortgageTerm] = useState(5);

	return (
		<section className={calculatorStyle} id="calculator">
			<h3 className="title">Рассчитать ипотеку</h3>
			<div className="row">
				<div className="calculator">
					<div className="mortgage">
						<div className="mortgage__slider">
							<header className="mortgage__header">
								<span>Сумма ипотеки</span>
								<span className="mortgage__result">{numberWithSpaces(mortgageAmount)} р.</span>
							</header>
							<div className="mortgage__input-wrapper">
								<InputRange
									min="100000"
									max="12000000"
									step="100000"
									value={mortgageAmount}
									fn={setMortgageAmount}
								/>
							</div>
							<footer className="mortgage__footer">
								<span>100 тыс. р.</span>
								<span>12 млн. р.</span>
							</footer>
						</div>
						<div className="mortgage__slider">
							<header className="mortgage__header">
								<span>Срок ипотеки</span>
								<span className="mortgage__result">{mortgageTerm} лет</span>
							</header>
							<div className="mortgage__input-wrapper">
								<InputRange min="5" max="20" step="1" value={mortgageTerm} fn={setMortgageTerm} />
							</div>
							<footer className="mortgage__footer">
								<span>5 лет</span>
								<span>20 лет</span>
							</footer>
						</div>
					</div>
					<div className="result">
						<div className="result__payment">
							<span className="result__payment-title">Ежемесячный платеж</span>
							<h4 className="result__payment-amount">
								{numberWithSpaces(calculateMonthlyPayment(mortgageAmount, mortgageTerm))} р.
							</h4>
						</div>
						<div className="result__interest">
							<span className="result__interest-title">Ставка</span>
							<h4 className="result__interest-num">6,00%</h4>
						</div>
					</div>
					<div className="subtitle">
						<p className="subtitle__text">
							Рассчёт предварительный, по средней ставке. Точная ставка и сумма ипотеки будут
							определены при оформлении договора.Банк вправе отказать в выдаче ипотеки без
							объяснения причин.
						</p>
					</div>
					<div className="consultation">
						<h5 className="consultation__title">получить консультацию</h5>
						<a
							href="tel:88612040026"
							target="_blank"
							className="consultation__phone"
							rel="noreferrer"
						>
							8 (861) 204-00-26
						</a>
						<a
							href="https://api.whatsapp.com/send?phone=79388678708"
							target="_blank"
							className="consultation__whatsapp"
							rel="noreferrer"
						>
							<svg
								className="consultation__whatsapp-icon"
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
							>
								<path
									d="M11.1026 2.77493C9.30751 -9.17322e-05 5.64261 -0.825098 2.80044 0.899915C0.0330687 2.62493 -0.864458 6.37496 0.930596 9.14998L1.08018 9.37498L0.481832 11.625L2.72565 11.025L2.95003 11.175C3.92235 11.7 4.96947 12 6.01658 12C7.13849 12 8.2604 11.7 9.23272 11.1C12.0001 9.29998 12.8228 5.62495 11.1026 2.77493ZM9.53189 8.54997C9.23272 8.99998 8.85875 9.29998 8.33519 9.37498C8.03602 9.37498 7.66205 9.52498 6.16617 8.92498C4.89467 8.32497 3.84756 7.34996 3.09962 6.22496C2.65086 5.69995 2.42647 5.02495 2.35168 4.34994C2.35168 3.74994 2.57606 3.22493 2.95003 2.84993C3.09962 2.69993 3.24921 2.62493 3.39879 2.62493H3.77276C3.92235 2.62493 4.07194 2.62493 4.14673 2.92493C4.29632 3.29993 4.67029 4.19994 4.67029 4.27494C4.74508 4.34994 4.74508 4.49994 4.67029 4.57494C4.74508 4.72494 4.67029 4.87495 4.5955 4.94995C4.5207 5.02495 4.44591 5.17495 4.37111 5.24995C4.22153 5.32495 4.14673 5.47495 4.22153 5.62495C4.5207 6.07495 4.89467 6.52496 5.26864 6.89996C5.7174 7.27496 6.16617 7.57497 6.68972 7.79997C6.83931 7.87497 6.9889 7.87497 7.06369 7.72497C7.13849 7.57497 7.51246 7.19996 7.66205 7.04996C7.81163 6.89996 7.88643 6.89996 8.03602 6.97496L9.23272 7.57497C9.38231 7.64997 9.53189 7.72497 9.60669 7.79997C9.68148 8.02497 9.68148 8.32497 9.53189 8.54997Z"
									fill="currentColor"
								/>
							</svg>
							написать в WhatsApp
						</a>
					</div>
				</div>
				<div className="banks">
					<ul className="banks__list">
						<li className="banks__item">
							<img className="banks__logo" src={centerInvestLogo} alt="Логотип банка" />
						</li>
						<li className="banks__item">
							<img className="banks__logo" src={lokaLogo} alt="Логотип банка" />
						</li>
						<li className="banks__item">
							<img className="banks__logo" src={vtbLogo} alt="Логотип банка" />
						</li>
						<li className="banks__item">
							<img className="banks__logo" src={sberLogo} alt="Логотип банка" />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Calculator;
