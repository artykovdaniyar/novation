import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";
const Guarantee = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={3} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Гарантия</h3>
				<p className="descr">
					За всю историю существования у нашей компании не было ни одного судебного иска. Ежегодно
					мы сдаем около 100 домов и являемся финансово надежным застройщиком.
				</p>
				<p className="descr">
					Мы работаем по официальному договору. Гарантия на все конструкции составляет 5 лет.
				</p>
			</div>
		</SideInfo>
	);
};

export default Guarantee;
