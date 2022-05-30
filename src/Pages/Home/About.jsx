import React from "react";
import { css } from "@emotion/css";
import aboutImg from "../../Assets/Img/about.jpg";
import SectionTitle from "../../Components/UI/SectionTitle";
import SectionSubtitle from "../../Components/UI/SectionSubtitle";
import Blind from "../../Components/UI/Blind";
import WhatsappConsultation from "../../Components/Shared/WhatsappConsultation";

const AboutStyle = css`
	position: relative;
	.about__container {
		max-width: 1440px;
		margin: 0 auto;
		width: 100%;
		padding: 80px 0;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
	}
	.about__img {
		position: relative;
		overflow: hidden;
		background-image: url(${aboutImg});
		width: 50%;
		height: 870px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.about__info {
		position: relative;
		overflow: hidden;
		width: 50%;
		padding: 145px 90px 145px 130px;
	}
	.about__paragraph {
		color: var(--font-color);
		line-height: 1.4;
		font-size: 18px;
		font-weight: 600;
		margin: 37px 0;
	}
	.about__contacts {
		margin-top: 10px;
	}
	.about__contacts-title {
		color: var(--gray-color);
		line-height: 1.2;
		font-size: 14px;

		margin-bottom: 1px;
		display: block;
	}
	.about__contacts-phone {
		display: block;
		color: var(--primary-color);
		line-height: 1.13;
		font-size: 20px;
		font-weight: 600;
		padding: 10px 0;
	}
	.about__contacts-phone:hover,
	.about__contacts-phone:focus {
		text-decoration: underline;
	}
	.about__contacts-whatsapp {
		display: flex;
		align-items: center;
		width: max-content;
		padding: 2px 25px 4px;
		background-color: var(--primary-color);
		color: var(--theme-color);
		line-height: 1;
		font-size: 16px;
		font-weight: 600;
		transition: background-color 0.3s ease;
		text-align: center;
	}
	.about__contacts-whatsapp:hover,
	.about__contacts-whatsapp:focus {
		background-color: transparent;
		color: var(--primary-color);
	}
	.about__contacts-icon {
		margin-right: 7px;
	}
	@media screen and (max-width: 1439px) {
		.about__container {
			flex-direction: column;
			align-items: flex-start;
		}
		.about__img {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 37.6vw;
		}
		.about__info {
			position: relative;
			overflow: hidden;
			display: flex;
			width: 100%;
			padding: 30px 40px 0;
		}
		.about__texts {
			width: 50%;
		}
		.about__contacts {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 50%;
		}
		.about__contacts-wrapper {
			width: fit-content;
		}
	}
	@media screen and (max-width: 1023px) {
		.about__img {
			height: 43.6vw;
		}
		.about__info {
			flex-direction: column;
		}
		.about__texts {
			width: 100%;
		}
		.about__contacts {
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
		}
	}
	@media screen and (max-width: 767px) {
		.about__img {
			height: 53.6vw;
		}
	}
`;

const About = () => {
	return (
		<section className={AboutStyle}>
			<div className="about__container">
				<div className="about__img">
					<Blind trigerOn="-100px" />
				</div>
				<div className="about__info">
					<div className="about__texts">
						<SectionTitle headingNUm="2">О компании</SectionTitle>
						<SectionSubtitle>
							Работаем в Краснодаре, Ростове-на-Дону, Московской области
						</SectionSubtitle>
						<p className="about__paragraph">
							Строим и проектируем современные качественные дома, обеспечивая при этом высокий
							уровень сервиса для наших клиентов на всех этапах взаимодействия.
						</p>
						<p className="about__paragraph">
							По состоянию на конец 2021 года нами построено более 800 домов (из них 90% домов
							построено по нашим типовым проектам).
						</p>
						<p className="about__paragraph">
							Опыт и и компетенции нашей проектно-строительной компании позволяют создавать
							современные дома высокого качества с оптимальной стоимостью строительства.
						</p>
					</div>

					<div className="about__contacts">
						<Blind trigerOn="-100px" />
						<WhatsappConsultation className="about__contacts-wrapper" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
