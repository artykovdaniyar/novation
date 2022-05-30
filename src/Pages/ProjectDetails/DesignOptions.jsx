import React from "react";
import { css } from "@emotion/css";
import SideInfo from "../../Components/Layouts/SideInfo";

const designOptionsStyle = css`
	padding: 0 30px;
	.title {
		color: var(--font-color);
		line-height: 1.2;
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 50px;
	}
	.row {
		margin-bottom: 70px;
	}
	.name {
		margin-bottom: 40px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 20px;
		font-weight: 600;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
	}
	.list-item {
		position: relative;
		width: 50%;
		margin-bottom: 30px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 16px;
	}
	.list-item::before {
		content: " ";
		display: block;
		width: 10px;
		height: 10px;
		background-color: #e1e1e8;
		position: absolute;
		left: -18px;
		top: 4px;
	}
	@media screen and (max-width: 767px) {
	}
`;

const DesignOptions = ({ state, setState }) => {
	return (
		<SideInfo state={state} setState={setState} stateValue={false} sideInfoIndex={2}>
			<div className={designOptionsStyle}>
				<h2 className="title">Варианты конструктивных решений</h2>
				<div className="row">
					<h3 className="name">Фундаменты:</h3>
					<ul className="list">
						<li className="list-item">Ленточный</li>
						<li className="list-item">Ленточный из ФБС</li>
						<li className="list-item">Ленточный монолитный на уширении</li>
						<li className="list-item">Монолитная плита</li>
						<li className="list-item">Свайно-ростверковый</li>
					</ul>
				</div>
				<div className="row">
					<h3 className="name">Цокольный этаж:</h3>
					<ul className="list">
						<li className="list-item">Сборный из ФБС</li>
						<li className="list-item">Монолитный</li>
					</ul>
				</div>
				<div className="row">
					<h3 className="name">Стены и перегородки:</h3>
					<ul className="list">
						<li className="list-item">Кирпич полнотелый</li>
						<li className="list-item">Газоблок</li>
						<li className="list-item">Керамоблок</li>
						<li className="list-item">Монолитный каркас с заполнением блоком</li>
					</ul>
				</div>

				<div className="row">
					<h3 className="name">Фасады:</h3>
					<ul className="list">
						<li className="list-item">Кирпич</li>
						<li className="list-item">Штукатурка</li>
						<li className="list-item">Натуральный камень</li>
						<li className="list-item">Панели (сайдинг, блок хаус и т.д.)</li>
						<li className="list-item">Дерево</li>
						<li className="list-item">Клинкерная плита</li>
						<li className="list-item">Декоративные элементы</li>
					</ul>
				</div>

				<div className="row">
					<h3 className="name">Перекрытия:</h3>
					<ul className="list">
						<li className="list-item">Монолитное перекрытие</li>
						<li className="list-item">Плиты перекрытия</li>
					</ul>
				</div>

				<div className="row">
					<h3 className="name">Кровля:</h3>
					<ul className="list">
						<li className="list-item">Мягкая черепица (гибкая)</li>
						<li className="list-item">Металлочерепица</li>
						<li className="list-item">Керамическая черепица</li>
						<li className="list-item">Плоская (покрытие мембрана ПВХ)</li>
						<li className="list-item">Фальцевая</li>
						<li className="list-item">Сланец</li>
					</ul>
				</div>
			</div>
			;
		</SideInfo>
	);
};

export default DesignOptions;
