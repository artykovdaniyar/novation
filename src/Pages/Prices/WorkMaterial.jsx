import React from "react";
import innerBuilding from "../../Assets/Img/inner-building.jpg";
import { css } from "@emotion/css";

const workMaterialStyle = css`
	.mobile {
		display: none;
		color: var(--font-color);
		line-height: 1.1;
		font-size: 20px;
		margin-bottom: 30px;
	}
	.row {
		display: flex;
		align-items: center;
	}
	.info {
		flex-grow: 1;
		padding: 0 15px;
	}
	.img-wrapper {
		flex-basis: calc((100% / 12) * 8);
		padding: 0 15px;
	}
	.img {
		width: 100%;
	}
	.title {
		color: var(--font-color);
		line-height: 1.1;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 45px;
	}
	.list {
		list-style-type: none;
		counter-reset: my-counter;
	}
	.list-item {
		padding-bottom: 12px;
		font-size: 15px;
		color: #606067;
		line-height: 1.3;
		position: relative;
		padding-left: 20px;
	}
	.list-item:before {
		content: counter(my-counter) " ";
		counter-increment: my-counter;
		color: var(--primary-color);
		line-height: 1.4;
		font-size: 14px;
		margin-right: 15px;
		display: block;
		position: absolute;
		left: 0px;
	}
	@media (max-width: 991px) {
		.desktop {
			display: none;
		}
		.mobile {
			display: block;
			margin-bottom: 30px;
		}
	}
	@media (max-width: 767px) {
		.row {
			flex-direction: column-reverse;
			align-items: flex-start;
		}
		.img-wrapper {
			margin-bottom: 45px;
		}
		.list {
			display: flex;
			flex-wrap: wrap;
		}
		.list-item {
			flex-basis: 50%;
		}
	}
	@media (max-width: 374px) {
		.list {
			flex-direction: column;
		}
	}
`;

const WorkMaterial = () => {
	return (
		<section className={workMaterialStyle}>
			<h2 className="title mobile">Работы + материалы</h2>
			<div className="row">
				<div className="info">
					<h2 className="title desktop">Работы + материалы</h2>
					<ol className="list">
						<li className="list-item">Фундамент</li>
						<li className="list-item">Вводы коммуникаций</li>
						<li className="list-item">Плиты пола</li>
						<li className="list-item">Фасад кирпич</li>
						<li className="list-item">Несущие стены</li>
						<li className="list-item">Перегородки</li>
						<li className="list-item">Армпояс и перемычки</li>
						<li className="list-item">Перекрытие</li>
						<li className="list-item">Лестница</li>
						<li className="list-item">Кровля под ключ</li>
					</ol>
				</div>
				<div className="img-wrapper">
					<img src={innerBuilding} alt="Конструкций дома" className="img" />
				</div>
			</div>
		</section>
	);
};

export default WorkMaterial;
