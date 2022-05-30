import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const EnergyEfficiency = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={6} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Энергоэффективность</h3>
				<p className="descr">
					Наши дома помогают экономить на отоплении, поскольку мы профессионально подходим к
					теплотехническому расчету всех конструкций. Это достигается благодаря оптимальной толщине
					стен, надежному утеплению и сокращению любых теплопотерь. Энергоэффективность каждой
					конструкции значительно превышает стандартные строительные нормы.
				</p>
			</div>
		</SideInfo>
	);
};

export default EnergyEfficiency;
