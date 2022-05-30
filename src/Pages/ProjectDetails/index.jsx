import React, { useState } from "react";
import { css } from "@emotion/css";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Layouts from "./Layouts";
import Includes from "./Includes";
import TopicTab from "./TopicTabs";
import CostEffect from "./CostEffect";
import Docs from "../../Components/Shared/Docs";
import Tax from "../../Components/Shared/Tax";
import Refund from "../../Components/Shared/Refund";
import MaternalCapital from "../../Components/Shared/MaternalCapital";
import Calculator from "../../Components/Shared/Calculator";
import Title from "../../Components/Shared/Title";
import { Fade } from "react-awesome-reveal";
import Changes from "./Changes";
import OverLay from "../../Components/Layouts/OverLay";
import DesignOptions from "./DesignOptions";

const projectDetailsStyle = css`
	.project-details__container {
		max-width: 1540px;
		margin: 0 auto;
		width: 100%;
	}
	.project-details__container-min {
		padding: 0 130px;
		margin-top: 100px;
	}
	@media (max-width: 1439px) {
		.project-details__container-min {
			padding: 0 40px;
		}
	}
	@media (max-width: 991px) {
		.project-details__container-min {
			margin-top: 80px;
		}
	}
	@media (max-width: 991px) {
		.project-details__container-min {
			padding: 0 20px;
		}
	}
`;

const ProjectDetails = () => {
	const [isSideInfoOpened, setIsSideInfoOpened] = useState(false);

	const { projectNumber } = useParams();
	return (
		<>
			<Fade triggerOnce className={projectDetailsStyle}>
				<Title>Проект №{projectNumber} | СК Новация</Title>
				<div className="project-details__container">
					<Hero />

					<div className="project-details__container-min">
						<Fade triggerOnce delay="80">
							<Layouts state={isSideInfoOpened} setState={setIsSideInfoOpened} />
						</Fade>
						<Fade triggerOnce delay="30">
							<Includes />
						</Fade>
						<Fade triggerOnce delay="30">
							<TopicTab state={isSideInfoOpened} setState={setIsSideInfoOpened} />
						</Fade>
						<Fade triggerOnce delay="30">
							<CostEffect />
						</Fade>
						<Fade triggerOnce delay="30">
							<Calculator />
						</Fade>
						<Fade triggerOnce delay="30">
							<Docs />
						</Fade>
						<Fade triggerOnce delay="30">
							<Tax />
						</Fade>
						<Fade triggerOnce delay="30">
							<Refund />
						</Fade>
						<Fade triggerOnce delay="30">
							<MaternalCapital />
						</Fade>
					</div>
				</div>
			</Fade>
			<DesignOptions state={isSideInfoOpened} setState={setIsSideInfoOpened} />
			<Changes state={isSideInfoOpened} setState={setIsSideInfoOpened} />
			<OverLay state={isSideInfoOpened} setState={setIsSideInfoOpened} />
		</>
	);
};

export default ProjectDetails;
