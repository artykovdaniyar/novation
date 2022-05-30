import React from "react";
import { Fade } from "react-awesome-reveal";

import PageNav from "../../Components/Shared/PageNav";
import Title from "../../Components/Shared/Title";
import PageTitle from "../../Components/UI/PageTitle";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
	return (
		<Fade cascade="true" damping={0.3} triggerOnce className="container">
			<Title>Портфолио | СК Новация</Title>
			<PageNav curPage="Портфолио" />
			<PageTitle>Портфолио</PageTitle>
			<PortfolioList />
		</Fade>
	);
};

export default Portfolio;
