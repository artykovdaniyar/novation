import { css } from "@emotion/css";
import React from "react";
import StyleItem from "./StyleItem";

const styleListStyle = css`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 30px;
	grid-row-gap: 45px;
	@media (max-width: 1023px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 40px;
	}
	@media (max-width: 425px) {
		grid-template-columns: 1fr;
	}
`;

const StyleList = ({ projects, img }) => {
	return (
		<ul className={styleListStyle}>
			{projects.map((project) => (
				<StyleItem key={project.number} project={project} img={img} />
			))}
		</ul>
	);
};

export default StyleList;
