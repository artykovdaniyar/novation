import React from "react";
import { Link } from "react-router-dom";
import portfolioImg1 from "../../Assets/Img/portfolio1.jpg";
import { css } from "@emotion/css";

const portfolioItem = css`
	.img-wrapper {
		position: relative;
		width: 100%;
		height: 260px;
		overflow: hidden;
	}
	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}
	.photoreport {
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 4px 11px;
		background: var(--primary-color);
		color: var(--theme-color);
		line-height: 1;
		font-size: 16px;
		font-weight: 600;
		transition: background 0.3s ease, color 0.3s ease;
	}
	.title {
		color: var(--font-color);
		line-height: 1.25;
		font-size: 24px;
		font-weight: 600;
		margin-top: 15px;
	}
	.link:hover {
		.img {
			transform: scale(1.1);
		}
		.photoreport {
			background: var(--theme-color);
			color: var(--primary-color);
		}
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
	}
`;

const PortfolioItem = ({ project }) => {
	return (
		<li className={portfolioItem}>
			<Link to={`${project.address}`} end="true" className="link">
				<div className="img-wrapper">
					<img src={portfolioImg1} alt="Фотография проекта" className="img" />
					<span className="photoreport">фотоотчет</span>
				</div>
				<h3 className="title"> {project.name}</h3>
			</Link>
		</li>
	);
};

export default PortfolioItem;
