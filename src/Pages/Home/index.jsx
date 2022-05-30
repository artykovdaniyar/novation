import React from "react";
import About from "./About";
import CompletedProjects from "./CompletedProjects";
import HeroSlider from "./HeroSlider";
import SectionHeader from "./SectionHeader";
import Standart from "./Standart";

const Home = () => {
	return (
		<div>
			<SectionHeader />
			<HeroSlider />
			<CompletedProjects />
			<About />
			<Standart />
		</div>
	);
};

export default Home;
