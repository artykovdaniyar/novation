import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Eco = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={8} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Экологичные материалы</h3>
				<p className="descr">
					Любые строительные конструкции наших домов не наносят вред здоровью.
				</p>
			</div>
		</SideInfo>
	);
};

export default Eco;
