import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Plan = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={4} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Функциональные планировки</h3>
				<p className="descr">
					Грамотное зонирование помещений значительно увеличивает удобство проживания в доме. Мы
					прорабатываем каждый квадратный метр наших домов так, чтобы он был комфортным для
					проживания всей семьи. Итоговый проект дома получается максимально полезный и
					функциональный.
				</p>
			</div>
		</SideInfo>
	);
};

export default Plan;
