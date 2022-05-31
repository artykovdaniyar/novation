import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const styleItemStyle = css`
	.img {
		width: 100%;
		margin-bottom: 15px;
	}
	.title {
		color: var(--font-color);
		line-height: 1.3;
		font-size: 15px;
		font-weight: 600;
	}
`;

const StyleItem = ({ project, img }) => {
	return (
		<li className={styleItemStyle}>
			<Link to={`/projects/${project.number}`}>
				<img className="img" src={img} alt="Изображение проекта" />
				<h4 className="title">Проект №{project.number}</h4>
			</Link>
		</li>
	);
};

export default StyleItem;
