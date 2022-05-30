import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import ceramicBlockImg from "../../../Assets/Img/termoblok.png";
import styles from "./PriceSideInfoStyle";

const CeramicBlock = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={4} state={state} setState={setState}>
			<div className={styles}>
				<h3 className="title">Кирпич</h3>
				<img width="400" src={ceramicBlockImg} alt="Газоблок + фасад" className="img" />
				<ol className="list">
					<li className="list-item">Кирпич полнотелый 1НФ, М100 250мм</li>
					<li className="list-item">Утеплитель экструдированный пенополистирол 50 мм</li>
					<li className="list-item">Облицовочный керамический кирпич 120 мм</li>
				</ol>
			</div>
		</SideInfo>
	);
};

export default CeramicBlock;
