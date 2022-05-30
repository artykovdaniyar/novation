import React from "react";
import SectionTitle from "../../Components/UI/SectionTitle";
import { css } from "@emotion/css";

const aboutStyle = css`
	.list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-row-gap: 50px;
		grid-column-gap: 30px;
		padding: 45px 0 100px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
	}
	.item {
		position: relative;
		padding: 0 15px 0 35px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 16px;
		font-weight: 600;
		&:before {
			position: absolute;
      content: ' ';
      display: block;
      width: 10px;
      height: 10px;
      background-color: #E1E1E8;
      position: absolute;
      left: 15px;
      top: 6px;
  }
		}
	}
	.gray {
		margin-top: 13px;
		color: #89909c;
	}

`;

const About = () => {
	return (
		<section className={aboutStyle}>
			<SectionTitle>О наших проектах</SectionTitle>
			<ul className="list">
				<li className="item">
					Все проекты разработаны нашей командой архитекторов и строителей
					<p className="gray">Мы — не портал, перепродающий проекты сторонних архитекторов</p>
				</li>
				<li className="item">
					Мы построили более 400 домов и понимаем, что нужно строителям
					<p className="gray">
						Проекты выполнены понятными для строителей (минимум вопросов и возражений).
					</p>
				</li>
				<li className="item">
					Наши дома оптимальны по стоимости строительства и эксплуатации
					<p className="gray">
						В проектах мы не используем дорогие и непрактичные в эксплуатации решения
					</p>
				</li>
				<li className="item">В проект включены все необходимые разделы для производства работ</li>
				<li className="item">
					Из проекта исключены разделы, не имеющие практического применения
					<p className="gray">Вам не придется за них платить</p>
				</li>
				<li className="item">
					Современные архитектурные решения, которые возможно недорого реализовать на практике
				</li>
				<li className="item">
					Функциональные планировки, многие из которых откорректированы на основании опыта
					проживания клиентов в наших домах
				</li>
				<li className="item">Высокое качество проектной документации</li>
				<li className="item">
					Большинство наших проектов реализованы и в них устранены все ошибки и недочеты, выявленные
					в процессе строительства
				</li>
				<li className="item">
					Возможность проконсультироваться с архитектором проекта и главным инженером
				</li>
				<li className="item">
					Быстро и недорого вносим изменения в типовые проекты. Бесплатно доставляем по РФ
				</li>
				<li className="item">
					Возможность купить электронную версию проекта в PDF
					<p className="gray">
						Удобно для жителей Украины, Казахстана, Белоруссии и других стран СНГ, Европы и Азии
					</p>
				</li>
			</ul>
		</section>
	);
};

export default About;
