import React from "react";
import SectionTitle from "../../Components/UI/SectionTitle";
import { css } from "@emotion/css";
import swingsIcon from "../../Assets/Img/Icons/swings.svg";
import guaranteeIcon from "../../Assets/Img/Icons/guarantee.svg";
import objectLocationIcon from "../../Assets/Img/Icons/object-location.svg";
import workValueIcon from "../../Assets/Img/Icons/works-value.svg";
import constructiveChangesIcon from "../../Assets/Img/Icons/constructive-changes.svg";
import architectureSolutionsIcon from "../../Assets/Img/Icons/architecture-solutions.svg";

const costEffectStyle = css`
	margin-bottom: 80px;
	.cost-effect {
		&__title {
			margin-bottom: 70px;
		}

		&__list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 40px 30px;
		}
		&__icon {
			margin-bottom: 15px;
		}
		&__name {
			color: var(--font-color);
			line-height: 1.2;
			font-size: 16px;
		}
		&__details-item {
			margin-top: 9px;
			color: #89909c;
			line-height: 1.3;
			font-size: 14px;
		}
	}

	@media screen and (max-width: 767px) {
		.cost-effect {
			&__title {
				margin-bottom: 42px;
			}
			&__list {
				grid-template-columns: repeat(2, 1fr);
			}
			&__item:nth-child(5) {
				order: 6;
			}
			&__item:nth-child(4) {
				order: 5;
			}
		}
	}
	@media screen and (max-width: 374px) {
		.cost-effect {
			&__list {
				grid-template-columns: 1fr;
			}
		}
	}
`;

const CostEffect = () => {
	return (
		<section className={costEffectStyle}>
			<SectionTitle className="cost-effect__title">Что может повлиять на стоимость</SectionTitle>
			<ul className="cost-effect__list">
				<li className="cost-effect__item">
					<img src={swingsIcon} alt="Иконка" width="45" height="45" className="cost-effect__icon" />
					<h3 className="cost-effect__name">Перепады на участке </h3>
				</li>

				<li className="cost-effect__item">
					<img
						src={guaranteeIcon}
						alt="Иконка"
						width="45"
						height="45"
						className="cost-effect__icon"
					/>
					<h3 className="cost-effect__name">Грунты, грунтовые воды </h3>
				</li>

				<li className="cost-effect__item">
					<img
						src={objectLocationIcon}
						alt="Иконка"
						width="45"
						height="45"
						className="cost-effect__icon"
					/>
					<h3 className="cost-effect__name">Расположение объекта</h3>
				</li>

				<li className="cost-effect__item details">
					<img
						src={workValueIcon}
						alt="Иконка"
						width="45"
						height="45"
						className="cost-effect__icon"
					/>
					<h3 className="cost-effect__name ">Объём подготовительных работ </h3>
					<ul className="cost-effect__details">
						<li className="cost-effect__details-item">планировка участка</li>
						<li className="cost-effect__details-item">спил деревьев</li>
						<li className="cost-effect__details-item">подъездные пути</li>
						<li className="cost-effect__details-item">демонтаж строений</li>
					</ul>
				</li>

				<li className="cost-effect__item">
					<img
						src={constructiveChangesIcon}
						alt="Иконка"
						width="45"
						height="45"
						className="cost-effect__icon"
					/>
					<h3 className="cost-effect__name">Изменение конструктива и материалов</h3>
				</li>

				<li className="cost-effect__item">
					<img
						src={architectureSolutionsIcon}
						alt="Иконка"
						width="45"
						height="45"
						className="cost-effect__icon"
					/>
					<h3 className="cost-effect__name">Изменение архитектурных решений</h3>
				</li>
			</ul>
		</section>
	);
};

export default CostEffect;
