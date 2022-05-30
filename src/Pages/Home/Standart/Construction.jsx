import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Construction = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={5} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Надежность всех конструкций</h3>
				<p className="descr">
					Мы проектируем и строим дома так, чтобы они служили долго, без дополнительного расхода
					времени и сил на их обслуживание. Все несущие конструкции дома — фундамент, несущие стены,
					перекрытия и кровля надежно рассчитаны и прослужат минимум 50 лет.
				</p>
			</div>
		</SideInfo>
	);
};

export default Construction;
