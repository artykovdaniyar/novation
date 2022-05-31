import React from "react";
import { useSelector } from "react-redux";
import { css } from "@emotion/css";
import PortfolioItem from "./PortfolioItem";
const portfolioListStyle = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 30px;
	grid-row-gap: 50px;
	@media (max-width: 1439px) {
		margin-bottom: 75px;
	}
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;
const PortfolioList = () => {
	const portfolioList = useSelector((state) => state.portfolio.portfolioList);

	return (
		<ul className={portfolioListStyle}>
			{portfolioList.map((project) => (
				<PortfolioItem key={project.id} project={project} />
			))}
		</ul>
	);
};

export default PortfolioList;
