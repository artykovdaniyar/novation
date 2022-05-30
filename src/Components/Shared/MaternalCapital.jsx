import React from "react";
import SectionTitle from "../UI/SectionTitle";
import { css } from "@emotion/css";

const maternalCapitalStyle = css`
	.row {
		margin-top: 30px;
		display: flex;
		column-gap: 30px;
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
		color: var(--font-color);
		line-height: 1.2;
		font-size: 18px;

		margin-bottom: 26px;
	}

	@media screen and (max-width: 767px) {
		.row {
			flex-direction: column;
		}
	}
`;

const MaternalCapital = () => {
	return (
		<section className={maternalCapitalStyle} id="maternalCapital">
			<SectionTitle>Материнский капитал</SectionTitle>
			<div className="row">
				<div className="column">
					<div className="descr">
						Чтобы использовать материнский капитал под строительство частного дома, нужно соблюсти
						условия, регламентированные Законом № 256-ФЗ:
					</div>
					<ol className="list">
						<li className="list-item">Возведение объекта должно осуществляться в пределах РФ</li>
						<li className="list-item">
							Земельный участок, на котором осуществляется возведение строения должен находиться в
							собственности или ином законном владении граждан, с категорией земель под ИЖС
							(Индивидуальное жилищное строительство)
						</li>
						<li className="list-item">
							На строительство дома по программе материнского капитала должна иметься необходимая
							проектно-сметная документация, утвержденная в установленном порядке
						</li>
						<li className="list-item">
							Использование материнского капитала на строительство дома разрешается только после
							достижения вторым ребенком возраста трех лет
						</li>
						<li className="list-item">
							Если ребенок не достиг трехлетнего возраста, то можно взять ипотеку и потратить мат.
							капитал на ее погашение
						</li>
						<li className="list-item">
							Материнский капитал при рождении первенца составит 524,5 тыс. руб. При рождении
							второго ребенка выплата составит 693,1 тыс. руб., если семья не получала маткапитал на
							первого ребенка, и 168,6 тыс. руб., если его оформляла.
						</li>
					</ol>
				</div>
				<div className="column">
					<div className="descr">
						Для перечисления денежных средств необходимо обратиться в территориальное учреждение ПФР
						со следующим пакетом документов:
					</div>
					<ol className="list">
						<li className="list-item">
							Заявление мамы, на основании которого маткапитал будет направлен на строительство
							дома;
						</li>
						<li className="list-item">Оригинал сертификата МСК</li>
						<li className="list-item">Паспорта и свидетельства о рождении всех членов семьи</li>
						<li className="list-item">
							Договор, постановление или иной правоустанавливающий документ за земельный участок
						</li>
						<li className="list-item">Разрешение на строительство</li>
						<li className="list-item">Договор на строительство дома</li>
						<li className="list-item">
							Нотариальное обязательство по регистрации права собственности на возведенный объект в
							пользу всех членов семьи не позднее шести месяцев после завершения строительства
						</li>
					</ol>
				</div>
			</div>
		</section>
	);
};

export default MaternalCapital;
