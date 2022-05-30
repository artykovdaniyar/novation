import React from "react";
import { css } from "@emotion/css";
import ArrowBtn from "./ArrowBtn";

const tableStyle = css`
	padding: 50px 0 40px;
	.table__row {
		display: flex;
		align-items: center;
		padding: 19px 0;
		border-bottom: 1px solid #d8d8d8;
	}
	.table__row--prices {
		padding: 0;
	}
	.table__name {
		color: #606067;
		line-height: 1.35;
		font-size: 16px;
		font-weight: 700;
		flex-basis: calc((100% / 12) * 3);
	}
	table__equipment {
		color: #606067;
		line-height: 1.35;
		font-size: 16px;
	}
	.table__org {
		color: #606067;
		line-height: 1.35;
		font-size: 16px;
		font-weight: 700;
		padding: 19px 0;
		border-bottom: 1px solid #d8d8d8;
	}
	.prices__floor {
		display: none;
		font-size: 16px;
	}
	.prices__name,
	.prices__price {
		padding: 5px 0;
	}
	.wall__item {
		padding: 19px 0;
	}
	.prices__column {
		border-bottom: 1px solid #d8d8d8;
	}
	.prices__price {
		color: #606067;
		line-height: 1.05;
		font-size: 20px;
		font-weight: 600;
		white-space: nowrap;
	}
	.table__column {
		flex-grow: 1;
	}
	.prices__column {
		padding-bottom: 15px;
	}
	@media screen and (max-width: 767px) {
		.table__row {
			flex-direction: column;
			align-items: flex-start;
		}
		.table__column,
		.table__name {
			display: flex;
			flex-direction: column-reverse;
		}
		.table__column {
			width: 100%;
			padding-top: 10px;
			border-bottom: 1px solid #d8d8d8;
		}
		.prices__name {
			display: none;
		}
		.prices__column {
			border: none;
			padding: 0;
			display: flex;
			padding: 15px 0 6px 0;
		}
		.prices__column--name {
			padding: 0;
		}
		.table__row--prices {
			flex-wrap: wrap;
			flex-direction: column;
			align-items: flex-start;

			.table__name {
				flex-basis: 100%;
			}
		}
		.wall__name {
			padding: 0;
		}
		.wall__item {
			padding: 0;
		}
		.prices__price {
			flex-grow: 1;
		}
		.prices__floor {
			display: block;
		}
	}
`;

const Table = ({ state, setState }) => {
	return (
		<>
			<div className={tableStyle}>
				<div className="table__row table__row--prices">
					<div className="table__name">
						<div className="prices__column prices__column--name">
							<div className="prices__name">1 этажный</div>
							<div className="prices__name">2-х этажный</div>
						</div>

						<div className="wall__name wall__item">стены</div>
					</div>

					<div className="table__column">
						<div className="prices__column">
							<div className="prices__price ">
								21 300 ₽ <span className="prices__floor">1 этажный</span>
							</div>
							<div className="prices__price">
								18 500 ₽<span className="prices__floor">2 этажный</span>
							</div>
						</div>

						<div className="wall__item">
							<ArrowBtn index={1} setState={setState}>
								газоблок
							</ArrowBtn>
						</div>
					</div>

					<div className="table__column">
						<div className="prices__column">
							<div className="prices__price">
								23 800 ₽ <span className="prices__floor">1 этажный</span>
							</div>
							<div className="prices__price">
								21 000 ₽<span className="prices__floor">2 этажный</span>
							</div>
						</div>

						<div className="wall__item">
							<ArrowBtn index={2} setState={setState}>
								газоблок+ фасад
							</ArrowBtn>
						</div>
					</div>

					<div className="table__column">
						<div className="prices__column">
							<div className="prices__price">
								24 200 ₽ <span className="prices__floor">1 этажный</span>
							</div>
							<div className="prices__price">
								21 900 ₽<span className="prices__floor">2 этажный</span>
							</div>
						</div>

						<div className="wall__item">
							<ArrowBtn index={3} setState={setState}>
								кирпич + фасад
							</ArrowBtn>
						</div>
					</div>

					<div className="table__column">
						<div className="prices__column">
							<div className="prices__price">
								25 700 ₽ <span className="prices__floor">1 этажный</span>
							</div>
							<div className="prices__price">
								23 000 ₽<span className="prices__floor">2 этажный</span>
							</div>
						</div>

						<div className="wall__item">
							<ArrowBtn index={4} setState={setState}>
								керамоблок
							</ArrowBtn>
						</div>
					</div>
				</div>

				<div className="table__row">
					<div className="table__name">отделка фасада</div>
					<div className="table__equipment">облицовочный кирпич</div>
				</div>

				<div className="table__row">
					<div className="table__name">проект</div>
					<div className="table__equipment">архитектурно-строительный</div>
				</div>

				<div className="table__row">
					<div className="table__name">фундамент</div>
					<div className="table__equipment">ленточный</div>
				</div>

				<div className="table__row">
					<div className="table__name">перегородки</div>
					<div className="table__equipment">ленточный</div>
				</div>

				<div className="table__row">
					<div className="table__name">армопояса и перемычки</div>
					<div className="table__equipment">монолитные железобетонные</div>
				</div>

				<div className="table__row">
					<div className="table__name">перекрытие</div>
					<div className="table__equipment">плиты железобетонные + монолитные участки</div>
				</div>

				<div className="table__row">
					<div className="table__name">лестница</div>
					<div className="table__equipment">монолитная железобетонная</div>
				</div>

				<div className="table__row">
					<div className="table__name">кровля</div>
					<div className="table__equipment">металлочерепица/гибкая черепица</div>
				</div>

				<div className="table__org">организация строительной площадки</div>
			</div>
		</>
	);
};

export default Table;
