import React from "react";
import { useSelector } from "react-redux";
import ProjectsItem from "./ProjectsItem";
import { css } from "@emotion/css";

const projectListStyle = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 30px;
	grid-row-gap: 50px;
	padding-top: 80px;
	@media screen and (max-width: 991px) {
		grid-template-columns: repeat(2, 1fr);
		padding-top: 0;
	}
	@media screen and (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

const ProjectList = () => {
	const projectList = useSelector((state) => state.projects.projectsList);
	return (
		<ul className={projectListStyle}>
			{projectList.map((project) => (
				<ProjectsItem key={project.id} project={project} />
			))}
		</ul>
	);
};

export default ProjectList;
