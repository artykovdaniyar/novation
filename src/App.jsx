import React from "react";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Home from "./Pages/Home";
import PortfolioRouts from "./Pages/Portfolio/PortfolioRouts";
import Design from "./Pages/Design";
import Prices from "./Pages/Prices";
import Mortgage from "./Pages/Mortgage";
import Contacts from "./Pages/Contacts";
import ScrollTopPage from "./Helpers/ScrollTopPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Style/index.scss";
import ProjectsRouts from "./Pages/Projects/ProjectsRouts";

const App = () => {
	return (
		<>
			<Router>
				<ScrollTopPage />
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} end />
						<Route path="/projects/*" element={<ProjectsRouts />} />
						<Route path="/portfolio/*" element={<PortfolioRouts />} />
						<Route path="/design" element={<Design />} />
						<Route path="/price" element={<Prices />} />
						<Route path="/mortgage" element={<Mortgage />} />
						<Route path="/contact" element={<Contacts />} />
						<Route path="*" element={<div className="container">There's nothing here!</div>} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
};

export default App;
