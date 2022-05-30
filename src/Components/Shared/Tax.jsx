import React from "react";
import SectionTitle from "../../Components/UI/SectionTitle";
import { css } from "@emotion/css";

const taxStyle = css`
	.row {
		display: flex;
		column-gap: 30px;
	}
	.column {
		width: calc((100% / 12) * 6);
	}
	.subtitle {
		color: var(--primary-color);
		line-height: 1;
		font-size: 14px;
		font-weight: 600;
		margin: 10px 0 37px;
	}
	.paragraph {
		color: #606067;
		line-height: 1.4;
		font-size: 15px;
		margin-bottom: 16px;
	}
	.subline {
		margin-bottom: 20px;
		color: #606067;
		line-height: 1.2;
		font-size: 18px;
	}
	.example {
		color: var(--gray-color--light);
		line-height: 1.4;
		font-size: 15px;
		margin-bottom: 30px;
	}
	@media screen and (max-width: 991px) {
		.row {
			flex-direction: column;
		}
		.column {
			width: 100%;
		}
	}
`;

const Tax = () => {
	return (
		<section className={taxStyle} id="tax">
			<SectionTitle>Получение налогового вычета</SectionTitle>
			<h3 className="subtitle">до 520 тысяч рублей</h3>
			<div className="row">
				<div className="column">
					<p className="paragraph">
						Вы можете получить до 520 тыс. рублей. Если вы состоите браке, вы и ваша супруга
						(супруг) имеете право на налоговый вычет по одному и тому же дому. Каждый из супругов
						может получить до 260 тыс. рублей. При этом не имеет значения, кто на самом деле
						числится собственником дома.
					</p>
					<p className="paragraph">
						Распределять вычет супруги могут на свое усмотрение, а договоренности нужно
						зафиксировать в заявлении о распределении налогового вычета. Основанием являются:
					</p>
					<p className="paragraph">
						– Письмо ФНС от 14.11.2017 № ГД-4-11/23004@
						<br /> – Письмо Министерства финансов РФ от 31.10.2017 №03-04-07/71589
						<br /> – ст. 34 Семейного кодекса РФ
						<br /> – ст. 220 Налогового кодекса РФ
					</p>
					<p className="paragraph">
						В случае, если вы не состоите в браке, то вы можете получить налоговый вычет до 260 тыс.
						рублей. Основание – ст. 220 Налогового кодекса РФ.
					</p>
				</div>
				<div className="column">
					<h4 className="subline">Пример</h4>
					<p className="example">
						В 2018 году вы с женой заключили договор на строительство дома и распределили доли
						поровну. Стоимость дома 5 млн. рублей, все платежные документы оформлены на вас. Для
						того чтобы и вы, и ваша жена получили максимальный вычет, в ИФНС следует предоставить
						пакет документов, включая платежные документы и заявление о распределении расходов. В
						вашей ситуации расходы можно разделить пополам. В любом случае, максимальный размер
						налогового вычета составит 2 млн. на каждого, а значит, на ваши счета поступит по 260
						тыс. излишне уплаченного НДФЛ.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Tax;
