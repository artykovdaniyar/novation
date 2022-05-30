import React from "react";
import { css } from "@emotion/css";

const docsStyle = css`
	.row {
		display: flex;
	}
	.title {
		margin-bottom: 30px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 20px;
		font-weight: 600;
	}
	.column {
		padding: 0 15px;
		margin-bottom: 70px;
	}
	.list {
		list-style-type: none;
		counter-reset: my-counter;
	}
	.list-item {
		position: relative;
		color: var(--font-color);
		line-height: 1.4;
		font-size: 15px;
		font-weight: 500;
		padding-bottom: 15px;
		padding-left: 20px;
	}
	.list-item::before {
		content: counter(my-counter) " ";
		counter-increment: my-counter;
		color: var(--gray-color);
		line-height: 1.4;
		font-size: 14px;

		margin-right: 15px;
		display: block;
		position: absolute;
		left: 0px;
	}
	.descr {
		color: var(--gray-color--light);
		line-height: 1.3;
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 0;
	}
	@media screen and (max-width: 767px) {
		.row {
			flex-direction: column;
		}
	}
`;

const Docs = () => {
	return (
		<section className={docsStyle}>
			<div className="row">
				<div className="column">
					<h2 className="title">Документы, необходимые для ипотеки</h2>
					<ol className="list">
						<li className="list-item">Паспорт, СНИЛС, ИНН физического лица</li>
						<li className="list-item">Копия трудовой книжки</li>
						<li className="list-item">
							Документы на земельный участок (если в качестве залога по кредиту используется
							участок)
						</li>
						<li className="list-item">
							Справка о доходах: <br />
							Вариант 1: 2-НДФЛ, <br />
							Вариант 2: Форма банка
						</li>
						<li className="list-item">Минимум полгода на текущем месте работы</li>
						<li className="list-item">Другие документы по требованию банка</li>
					</ol>
				</div>

				<div className="column">
					<h2 className="title">Мы, в свою очередь, предоставляем</h2>
					<ol className="list">
						<li className="list-item">Договор</li>
						<li className="list-item">Смету на строительство</li>
						<li className="list-item">Смету на строительство</li>
					</ol>
					<p className="descr">
						Общий срок подготовки документов и рассмотрения их банком занимает ориентировочно 21
						день
					</p>
				</div>
			</div>
		</section>
	);
};

export default Docs;
