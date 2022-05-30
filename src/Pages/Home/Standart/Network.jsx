import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Network = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={9} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Инженерные сети</h3>
				<p className="descr">
					Мы надежно проектируем все инженерные сети, а также детально продумываем удобство их
					дальнейшей эксплуатации и ремонта.
				</p>
				<h4 className="subline">Выполняем работы по проектированию и монтажу:</h4>
				<ul className="list">
					<li className="list-item">электроснабжения и освещения</li>
					<li className="list-item">отопления, водоснабжения и канализации</li>
					<li className="list-item">кондиционирования и вентиляции</li>
					<li className="list-item">системы охраны и видеонаблюдения</li>
				</ul>
			</div>
		</SideInfo>
	);
};

export default Network;
