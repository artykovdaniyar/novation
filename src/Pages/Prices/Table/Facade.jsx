import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import facadeImg from "../../../Assets/Img/gasblock-facade.png";
import styles from "./PriceSideInfoStyle";

const Facade = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={2} state={state} setState={setState}>
			<div className={styles}>
				<h3 className="title">Газоблок + фасад</h3>
				<img width="400" src={facadeImg} alt="Газоблок + фасад" className="img" />
				<ol className="list">
					<li className="list-item">Газоблок D500 300 мм</li>
					<li className="list-item">Вентзазор 20 мм</li>
					<li className="list-item">Облицовочный керамический кирпич 120 мм</li>
				</ol>
			</div>
		</SideInfo>
	);
};

export default Facade;
