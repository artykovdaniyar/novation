import React, { useState } from "react";
import StandartGrid from "./StandartGrid";
import Modern from "./Modern";
import Service from "./Service";
import Guarantee from "./Guarantee";
import Plan from "./Plan";
import Construction from "./Construction";
import EnergyEfficiency from "./EnergyEfficiency";
import NoiseIsolation from "./NoiseIsolation";
import Eco from "./Eco";
import Network from "./Network";
import Quality from "./Quality";
import OverLay from "../../../Components/Layouts/OverLay";

const Standart = () => {
	const [sideInfoIndex, setSideInfoIndex] = useState(0);
	return (
		<>
			<StandartGrid setState={setSideInfoIndex} />
			<Modern state={sideInfoIndex} setState={setSideInfoIndex} />
			<Service state={sideInfoIndex} setState={setSideInfoIndex} />
			<Guarantee state={sideInfoIndex} setState={setSideInfoIndex} />
			<Plan state={sideInfoIndex} setState={setSideInfoIndex} />
			<Construction state={sideInfoIndex} setState={setSideInfoIndex} />
			<EnergyEfficiency state={sideInfoIndex} setState={setSideInfoIndex} />
			<NoiseIsolation state={sideInfoIndex} setState={setSideInfoIndex} />
			<Eco state={sideInfoIndex} setState={setSideInfoIndex} />
			<Network state={sideInfoIndex} setState={setSideInfoIndex} />
			<Quality state={sideInfoIndex} setState={setSideInfoIndex} />
			<OverLay state={sideInfoIndex} setState={setSideInfoIndex} />
		</>
	);
};

export default Standart;
