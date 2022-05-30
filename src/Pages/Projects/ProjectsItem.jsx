import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import projectImg from "../../Assets/Img/project1.jpg";

const projectsItemStyle = css`
	.project__card {
		display: block;
	}
	.img-wrapper {
	}
	.project__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.project__info {
		padding-top: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.project__title {
		color: var(--font-color);
		line-height: 1.35;
		font-size: 30px;
		font-weight: 600;
		white-space: nowrap;
	}
	.project__subtitle {
		color: var(--gray-color);
		line-height: 1.3;
		font-size: 14px;
		font-weight: 600;
	}
	.project__square {
		color: #606067;
	}
	.project__price {
		color: var(--primary-color);
	}
	@media (max-width: 1439px) {
		.title {
			font-size: 20px;
		}
		.img-wrapper {
			height: 20vw;
		}
	}

	@media (max-width: 991px) {
		.img-wrapper {
			height: 29vw;
		}
	}
	@media (max-width: 767px) {
		.img-wrapper {
			height: 63vw;
		}
		.project__info {
			padding-top: 15px;
		}
	}
`;
const ProjectsItem = ({ project }) => {
	return (
		<li className={projectsItemStyle}>
			<Link className="project__card" to={`${project.number}`}>
				<div className="img-wrapper">
					<img className="project__img" src={projectImg} alt="Изображение проэкта" />
				</div>
				<div className="project__info">
					<h3 className="project__title">№{project.number}</h3>
					<div className="project__column">
						<h4 className="project__subtitle">Площадь</h4>
						<div className="project__square">
							{project.square}M<sup>2</sup>
						</div>
					</div>
					<div className="project__column">
						<h4 className="project__subtitle">Площадь</h4>
						<div className="project__price">{project.price}</div>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default ProjectsItem;
