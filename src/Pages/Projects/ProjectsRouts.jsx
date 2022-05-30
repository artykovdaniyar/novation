import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "../ProjectDetails";
import Projects from "./index";

const ProjectsRouts = () => {
	return (
		<Routes>
			<Route path="/" element={<Projects />} />
			<Route path=":projectNumber" element={<ProjectDetails />} />
		</Routes>
	);
};

export default ProjectsRouts;
