import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import gasBlockImg from "../../../Assets/Img/gasblock.png";
import styles from "./PriceSideInfoStyle";

const GasBlock = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={1} state={state} setState={setState}>
			<div className={styles}>
				<h3 className="title">Газоблок</h3>
				<img width="400" src={gasBlockImg} alt="Газоблок + фасад" className="img" />
				<ol className="list">
					<li className="list-item">Газоблок D500 300 мм</li>
				</ol>
			</div>
		</SideInfo>
	);
};

export default GasBlock;
