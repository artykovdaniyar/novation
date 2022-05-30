import React, { useState } from "react";
import PageNav from "../../Components/Shared/PageNav";
import PageTitle from "../../Components/UI/PageTitle";
import SectionTitle from "../../Components/UI/SectionTitle";
import Advantage from "./Advantage";
import Includes from "./Includes";
import Table from "./Table";
import TechConsultation from "./TechConsultation";
import WorkMaterial from "./WorkMaterial";
import Consultation from "../../Components/Shared/Consultation";
import Title from "../../Components/Shared/Title";
import { Fade } from "react-awesome-reveal";
import { css, keyframes } from "@emotion/css";
import GasBlock from "./Table/GasBlock";
import Facade from "./Table/Facade";
import Brick from "./Table/Brick";
import CeramicBlock from "./Table/CeramicBlock";
import OverLay from "../../Components/Layouts/OverLay";

const fadekeyFrames = keyframes`
	from {
		opacity: 0;
	}
	to{opacity: 1;}
`;

const pricesStyle = css`
	.container {
		animation: ${fadekeyFrames} 1s forwards;
	}
`;

const Prices = () => {
	const [sideInfoIndex, setSideInfoIndex] = useState(0);
	return (
		<>
			<div className={pricesStyle}>
				<Fade triggerOnce cascade={true} className="container">
					<Fade triggerOnce delay="30">
						<Title>Цены на строительство домов, стоимость дома в Краснодаре | СК Новация</Title>
					</Fade>
					<Fade triggerOnce delay="50">
						<PageNav curPage="Цены" />
					</Fade>
					<Fade triggerOnce delay="70">
						<PageTitle>Цены</PageTitle>
					</Fade>
					<Fade triggerOnce delay="90">
						<SectionTitle>Стоимость строительства за 1м2</SectionTitle>
					</Fade>
					<Fade triggerOnce delay="110">
						<Table state={sideInfoIndex} setState={setSideInfoIndex} />
					</Fade>
					<Fade triggerOnce delay="30">
						<TechConsultation />
					</Fade>
					<Fade triggerOnce delay="30">
						<Includes />
					</Fade>
					<Fade triggerOnce delay="30">
						<WorkMaterial />
					</Fade>
					<Fade triggerOnce delay="30">
						<Advantage />
					</Fade>
					<Fade triggerOnce delay="30">
						<Consultation />
					</Fade>
				</Fade>
				<GasBlock state={sideInfoIndex} setState={setSideInfoIndex} />
				<Facade state={sideInfoIndex} setState={setSideInfoIndex} />
				<Brick state={sideInfoIndex} setState={setSideInfoIndex} />
				<CeramicBlock state={sideInfoIndex} setState={setSideInfoIndex} />
				<OverLay state={sideInfoIndex} setState={setSideInfoIndex} />
			</div>
		</>
	);
};

export default Prices;
