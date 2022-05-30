import React from "react";
import { css } from "@emotion/css";

import SectionTitle from "../../Components/UI/SectionTitle";
import LinkArrow from "../../Components/UI/LinkArrow";
import Blind from "../../Components/UI/Blind";

const SectionHeaderStyle = css`
	max-width: 1920px;
	margin: 0 auto;
	padding: 29px 40px;
	display: flex;
	.secion-header__info {
		position: relative;
		max-width: 33%;
		margin-left: 109px;
	}
	.secion-header__descr {
		color: #6c6c6c;
		line-height: 1.3;
		font-size: 14px;
		font-weight: 600;
	}

	@media screen and (max-width: 1439px) {
		padding: 52px 40px;
	}
	@media screen and (max-width: 1023px) {
		padding: 107px 40px;
		.secion-header __info {
			margin-left: 101px;
			max-width: 32%;
		}
	}
	@media screen and (max-width: 768px) {
		padding: 63px 20px;
		flex-direction: column;
		.secion-header__info {
			max-width: 100%;
			margin-left: 0;
			margin-top: 40px;
		}
		.secion-header__descr {
		}
	}
`;

const SectionHeader = () => {
	return (
		<section className={SectionHeaderStyle}>
			<SectionTitle headingNUm="1">
				Строительство
				<br />и проектирование домов
				<Blind />
			</SectionTitle>

			<div className="secion-header__info">
				<p className="secion-header__descr">
					Работаем в Краснодаре, Ростове-на-Дону, Московской области
				</p>
				<LinkArrow path="projects">посмотреть проекты</LinkArrow>
				<Blind />
			</div>
		</section>
	);
};

export default SectionHeader;
