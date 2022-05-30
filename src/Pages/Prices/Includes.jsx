import React from "react";
import { css } from "@emotion/css";
import SectionTitle from "../../Components/UI/SectionTitle";
import deliveryImg from "../../Assets/Img/Icons/materials_delivery.svg";
import worksImg from "../../Assets/Img/Icons/works.svg";
import technicsImg from "../../Assets/Img/Icons/technics.svg";
import doubleControlImg from "../../Assets/Img/Icons/double_control.svg";
import personalManagerImg from "../../Assets/Img/Icons/personal_manager.svg";
import serviceImg from "../../Assets/Img/Icons/service.svg";

const includesStyle = css`
	padding: 100px 0 60px;
	.list {
		padding: 70px 0 0;
		display: flex;
		flex-wrap: wrap;
	}
	.list-item {
		flex-basis: calc(100% / 3);
		padding: 0 15px;
		margin-bottom: 40px;
	}
	icon {
		margin-bottom: 15px;
	}
	.descr {
		margin-top: 9px;
		color: #89909c;
		line-height: 1.3;
		font-size: 14px;
	}
	@media screen and (max-width: 767px) {
		.list-item {
			padding: 0;
			flex-basis: 50%;
		}
	}
`;
const Includes = () => {
	return (
		<section className={includesStyle}>
			<SectionTitle>Что входит в базовую стоимость строительства</SectionTitle>
			<ul className="list">
				<li className="list-item">
					<img
						width="45"
						height="45"
						src={deliveryImg}
						alt="Материалы и их доставка"
						className="icon"
					/>
					<h3 className="name">Материалы и их доставка</h3>
				</li>

				<li className="list-item">
					<img
						width="45"
						height="45"
						src={worksImg}
						alt="Материалы и их доставка"
						className="icon"
					/>
					<h3 className="name">Работы</h3>
				</li>

				<li className="list-item">
					<img
						width="45"
						height="45"
						src={technicsImg}
						alt="Материалы и их доставка"
						className="icon"
					/>
					<h3 className="name">Техника и оборудование</h3>
				</li>

				<li className="list-item">
					<img
						width="45"
						height="45"
						src={doubleControlImg}
						alt="Материалы и их доставка"
						className="icon"
					/>
					<h3 className="name">Двойной контроль</h3>
					<p className="descr">производитель работ и главный инженер</p>
				</li>

				<li className="list-item">
					<img
						width="45"
						height="45"
						src={personalManagerImg}
						alt="Материалы и их доставка"
						className="icon"
					/>
					<h3 className="name">Персональный менеджер</h3>
				</li>

				<li className="list-item">
					<img
						width="45"
						height="45"
						src={serviceImg}
						alt="Материалы и их доставка"
						className="icon"
					/>
					<h3 className="name">Сервис</h3>
				</li>
			</ul>
		</section>
	);
};

export default Includes;
