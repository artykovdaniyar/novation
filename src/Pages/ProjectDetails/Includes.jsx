import React from "react";
import SectionTitle from "../../Components/UI/SectionTitle";
import { css } from "@emotion/css";
import deliveryIcon from "../../Assets/Img/Icons/materials_delivery.svg";
import workIcon from "../../Assets/Img/Icons/works.svg";
import equapmentsIcon from "../../Assets/Img/Icons/technics.svg";
import designIcon from "../../Assets/Img/Icons/project-design.svg";

const includesStyle = css`
	margin-bottom: 65px;
	.includes {
		&__title {
			margin-bottom: 60px;
		}
		&__list {
			display: flex;
			flex-wrap: wrap;
		}
		&__item {
			flex-basis: 25%;
		}
		&__name {
			color: var(--font-color);
			line-height: 1.2;
			font-size: 16px;
			font-weight: 600;
		}
		&__icon {
			margin-bottom: 15px;
		}
	}

	@media (max-width: 1199px) {
		margin-bottom: 45px;
		.includes {
			&__title {
				margin-bottom: 45px;
			}
		}
	}
	@media (max-width: 991px) {
		margin-bottom: 60px;

		.includes {
			&__title {
				margin-bottom: 40px;
			}
		}
	}
	@media (max-width: 767px) {
		margin-bottom: 30px;

		.includes {
			&__title {
				margin-bottom: 50px;
				font-size: 25px;
			}
			&__item {
				margin-bottom: 30px;
				flex-basis: 50%;
			}
		}
	}
`;

const Includes = () => {
	return (
		<section id="includes" className={includesStyle}>
			<SectionTitle className="includes__title">
				Что входит в стоимость строительства комплектации Комфорт
			</SectionTitle>
			<ul className="includes__list">
				<li className="includes__item">
					<img className="includes__icon" width="45" height="45" src={deliveryIcon} alt="Иконка" />
					<h3 className="includes__name">Материалы и доставка</h3>
				</li>
				<li className="includes__item">
					<img className="includes__icon" width="45" height="45" src={workIcon} alt="Иконка" />
					<h3 className="includes__name">Работы</h3>
				</li>
				<li className="includes__item">
					<img
						className="includes__icon"
						width="45"
						height="45"
						src={equapmentsIcon}
						alt="Иконка"
					/>
					<h3 className="includes__name">Техника и оборудование</h3>
				</li>
				<li className="includes__item">
					<img className="includes__icon" width="45" height="45" src={designIcon} alt="Иконка" />
					<h3 className="includes__name">Проект</h3>
				</li>
			</ul>
		</section>
	);
};

export default Includes;
