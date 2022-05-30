import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { css } from "@emotion/css";

const refundStyle = css`
	margin-bottom: 30px;
	.row {
		display: flex;
		column-gap: 30px;
	}
	.list {
		margin-top: 30px;
		list-style-type: none;
		counter-reset: my-counter;
	}
	.list--2 {
		counter-reset: my-counter 4;
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

const Refund = () => {
	return (
		<section className={refundStyle}>
			<SectionTitle>Пакет документов для возврата НДФЛ</SectionTitle>
			<div className="row">
				<div className="column">
					<ol className="list">
						<li className="list-item">
							Копия свидетельства о праве собственности на объект недвижимости, который построен на
							земельном участке.
						</li>
						<li className="list-item">
							Копия свидетельства о праве собственности на земельный участок.
						</li>
						<li className="list-item">
							Копии платежных документов, подтверждающих факт уплаты денежных средств за земельный
							участок и на расходы по строительству жилого дома.
						</li>
						<li className="list-item">Заполненная 3-НДФЛ на вычет по строительству.</li>
					</ol>
				</div>
				<div className="column">
					<ol className="list list--2">
						<li className="list-item">
							Справка 2-НДФЛ с места работы (если вы подаете заявление на возврат НДФЛ за 2018 год,
							то справка необходима именно за 2018 год. Нести справку 2-НДФЛ за неполный 2019 год не
							нужно)
						</li>
						<li className="list-item">
							Копия паспорта (главной страницы и страницы с действительной пропиской)
						</li>
						<li className="list-item">Копия ИНН</li>
						<li className="list-item">Заявление на возврат НДФЛ</li>
					</ol>
				</div>
			</div>
		</section>
	);
};

export default Refund;
