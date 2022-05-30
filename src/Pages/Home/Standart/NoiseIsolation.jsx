import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const NoiseIsolation = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={7} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Шумоизоляция</h3>
				<p className="descr">
					В наших домах тихо, поскольку мы уделяем особое внимание вопросу шумоизоляции как на этапе
					проектирования, так и строительства. Мы понимаем, что это — один из важнейших факторов
					комфортного проживания в доме. Кровля, наружные стены, окна и двери, внутренние стены,
					перекрытия и перегородки спроектированы так, чтобы максимально снизить шум со стороны
					улицы и внутри дома.
				</p>
			</div>
		</SideInfo>
	);
};

export default NoiseIsolation;
