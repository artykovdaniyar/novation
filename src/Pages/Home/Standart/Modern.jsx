import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Modern = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={1} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Современный и долговечный продукт</h3>
				<p className="descr">
					Мы строим надежные дома, которые долго прослужат нашим заказчикам с минимальными затратами
					на эксплуатацию. Это достигается благодаря профессиональной команде строителей и
					проектировщиков, а также использованию проверенных и надежных материалов.
				</p>
				<p className="descr">
					Наши дома соответствуют современным стандартам качества: в проектировании, строительстве и
					дизайне.
				</p>
				<p className="descr">
					Мы сфокусированы на разработке лучшего продукта на рынке частных домов.
				</p>
			</div>
		</SideInfo>
	);
};

export default Modern;
