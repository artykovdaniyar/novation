import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Service = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={2} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Комплекс услуг</h3>
				<p className="descr">
					Наш заказчик получает ответы на любые вопросы и оперативное решение задач связанных со
					строительством дома и его эксплуатацией.
				</p>
				<h4 className="subline">
					Мы предоставляем весь спектр услуг, связанных со строительством дома:
				</h4>
				<ul className="list">
					<li className="list-item">Проектирование и подбор материалов</li>
					<li className="list-item">Геологические исследования участка и геодезия</li>
					<li className="list-item">
						Подготовка местности к строительству — демонтаж зданий и расчистка участка
					</li>
					<li className="list-item">Строительство дома</li>
					<li className="list-item">Отделочные работы</li>
					<li className="list-item">Проектирование и монтаж инженерных сетей</li>
					<li className="list-item">Благоустройство участка</li>
				</ul>
				<p className="descr">
					В итоге, заказчик получает дом, который полностью соответствует его ожиданиям.
				</p>
			</div>
		</SideInfo>
	);
};

export default Service;
