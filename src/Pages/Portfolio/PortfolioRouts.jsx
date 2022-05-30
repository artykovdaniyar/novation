import React from "react";
import { Route, Routes } from "react-router-dom";
import PortfolioDetails from "../PortfolioDetails";
import Portfolio from "./index";

const PortfolioRouts = () => {
	return (
		<Routes>
			<Route path="/" element={<Portfolio />} />
			<Route path="/:projectAddress" element={<PortfolioDetails />} />
		</Routes>
	);
};

export default PortfolioRouts;
