import React, { useState } from "react";
import { css } from "@emotion/css";
import PageNav from "../../Components/Shared/PageNav";
import PageHeader from "../../Components/UI/PageHeader";
import PageTitle from "../../Components/UI/PageTitle";
import ProjectList from "./ProjectList";
import SideInfo from "../../Components/Layouts/SideInfo";
import Title from "../../Components/Shared/Title";
import { Fade } from "react-awesome-reveal";

const projectsStyle = css`
	position: relative;
	.projects__search {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.projects__search-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 15px;
	}
	.projects__filter-open {
		display: none;
	}
	.projects__search-input {
		color: var(--gray-color);
		line-height: 1.2;
		font-size: 22px;
		font-weight: 600;
		width: 290px;
		transition: width 0.4s ease-in-out;
		border: none;
		outline: none;
		&::placeholder {
			color: var(--gray-color);
		}
	}
	.projects__types {
		display: flex;
		align-items: center;
		margin-bottom: 80px;
	}
	.projects__types-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 70px;
		padding: 6px 9px;
		border-right: 1px solid #d8d8d8;
		border-left: 1px solid #d8d8d8;
	}
	.projects__types-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--theme-color);
		width: 100%;
		height: 100%;
		cursor: pointer;
		transition: background 0.3s ease, color 0.3s ease;
	}
	.projects__types-btn.active {
		background: var(--primary-color);
		color: var(--theme-color);
	}
	.projects__types-btn:hover {
		background: var(--primary-color);
		color: var(--theme-color);
	}
	.projects__filter {
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;
	}
	.projects__filter-title {
		margin-bottom: 24px;
		color: var(--gray-color);
		line-height: 1;
		font-size: 12px;
		font-weight: 600;
		text-transform: uppercase;
	}
	.projects__filter-btns {
		display: flex;
		align-items: center;
		color: var(--font-color);
		line-height: 1.1;
		font-size: 14px;
		font-weight: 600;
	}
	.projects__filter-column:first-child {
		border-left: 1px solid #d8d8d8;
	}
	.projects__filter-column {
		border-right: 1px solid #d8d8d8;
		width: 155px;
		height: 48px;
		padding: 3px 6px;
	}
	.projects__filter-btn {
		background: var(--theme-color);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background 0.3s ease, color 0.3s ease;
		white-space: nowrap;
	}
	.projects__filter-btn:hover {
		background: var(--primary-color);
		color: var(--theme-color);
	}

	.projects__filter-reset {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15px;
		height: 48px;
		color: var(--font-color);
		line-height: 1.1;
		font-size: 14px;
		font-weight: 600;

		cursor: pointer;
		transition: background 0.3s ease, color 0.3s ease;
		svg {
			color: #d34f4f;
			margin-right: 10px;
			transition: inherit;
		}
	}
	.projects__filter-reset:hover {
		background: #d34f4f;
		color: var(--theme-color);
		svg {
			color: var(--theme-color);
		}
	}
	.projects__filter-open {
	}
	@media screen and (max-width: 1023px) {
		.projects__filter-open {
			display: block;
		}
		.projects__filter {
			display: none;
		}
		.projects__filter--side {
			display: flex;
		}
		.projects__filter {
			padding: 20px;
			row-gap: 47px;
			width: 100%;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.projects__search-input {
			font-size: 18px;
			width: 225px;
			margin-right: 15px;
			border-bottom: 1px solid transparent;
		}
		.projects__search-input:focus {
			border-bottom: 1px solid var(--primary-color);
			width: 250px;
		}

		.projects__filter-column {
			text-align: center;
		}
		.projects__filter-title {
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			width: min-content;
		}
		.projects__filter-btns {
			margin: 0;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 767px) {
		.projects__types {
			flex-direction: column;
			margin-bottom: 35px;
		}
		.projects__types-wrapper {
			width: 100%;
			height: 70px;
			padding: 6px 9px;
			margin-bottom: 10px;
		}
		.projects__search {
			width: 100%;
			justify-content: space-between;
		}
		.projects__search-input,
		.projects__search-input:focus {
			text-align: center;
			width: 100%;
			max-width: 290px;
		}
		.projects__filter-btns {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}
		.projects__filter-column {
			flex-basis: 50%;
			padding: 3px 6px;
			border-left: 1px solid #d8d8d8;
		}
	}
`;

const Projects = () => {
	const [isSideFilterOpened, setIsSideFilterOpened] = useState(false);
	const openSideFilterHandeler = (index) => {
		setIsSideFilterOpened(index);
	};

	return (
		<div className={projectsStyle}>
			<Title>Каталог готовых проектов двухэтажных и одноэтажных домов</Title>
			<Fade cascade={true} damping={0.3} triggerOnce className="projects__container container">
				<PageNav curPage="Проекты" />

				<PageHeader>
					<PageTitle>Проекты</PageTitle>

					<div className="projects__search">
						<button className="projects__search-btn" type="submit">
							<svg
								className="projects__search-icon"
								width="17"
								height="17"
								viewBox="0 0 17 17"
								fill="none"
							>
								<path
									d="M16.7305 15.408L13.0842 11.8442C14.2076 10.5453 14.823 8.91091 14.823 7.20947C14.823 3.23423 11.4982 0 7.41152 0C3.32487 0 0 3.23423 0 7.20947C0 11.1847 3.32487 14.4189 7.41152 14.4189C8.94571 14.4189 10.4077 13.9688 11.6577 13.1143L15.3372 16.7116C15.5212 16.8975 15.7687 17 16.0339 17C16.2849 17 16.523 16.9069 16.7038 16.7376C17.0879 16.3781 17.1001 15.7819 16.7305 15.408ZM7.41152 1.88073C10.4322 1.88073 12.8896 4.27114 12.8896 7.20947C12.8896 10.1478 10.4322 12.5382 7.41152 12.5382C4.39084 12.5382 1.93344 10.1478 1.93344 7.20947C1.93344 4.27114 4.39084 1.88073 7.41152 1.88073Z"
									fill="var(--gray-color)"
								/>
							</svg>
						</button>
						<input
							className="projects__search-input"
							placeholder="Введите номер проекта"
							type="text"
						/>
						<button className="projects__filter-open">
							<svg
								onClick={() => openSideFilterHandeler(true)}
								className="projects__filter-icon"
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="14"
								viewBox="0 0 22 14"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.1579 2.65118V0H16.6023V2.65118H0V4.22415H16.6023V6.87422H18.1579V4.22415H22V2.65118H18.1579ZM0 11.3499H3.57611V14H5.13167V11.3499H22V9.77696H5.13167V7.12578H3.57611V9.77696H0V11.3499Z"
									fill="var(--font-color)"
								/>
							</svg>
						</button>
					</div>
				</PageHeader>

				<div className="projects__types">
					<div className="projects__types-wrapper">
						<button className="projects__types-btn active">Типовые проекты</button>
					</div>
					<div className="projects__types-wrapper">
						<button className="projects__types-btn">Индивидуальные проекты</button>
					</div>
				</div>

				<div className="projects__filter">
					<div className="projects__filter-square ">
						<h4 className="projects__filter-title">ПЛОЩАДЬ</h4>
						<ul className="projects__filter-btns">
							<li className="projects__filter-column">
								<button className="projects__filter-btn">меньше 150м2</button>
							</li>
							<li className="projects__filter-column">
								<button className="projects__filter-btn">150м2 - 200м2</button>
							</li>
							<li className="projects__filter-column">
								<button className="projects__filter-btn">больше 200м2</button>
							</li>
						</ul>
					</div>
					<div className="projects__filter-floor">
						<h4 className="projects__filter-title">ЭТАЖНОСТЬ, ВКЛЮЧАЯ МАНСАРДУ</h4>
						<ul className="projects__filter-btns">
							<li className="projects__filter-column">
								<button className="projects__filter-btn">1 этаж</button>
							</li>
							<li className="projects__filter-column">
								<button className="projects__filter-btn">2 этажа</button>
							</li>
						</ul>
					</div>
					<div className="projects__filter-price">
						<h4 className="projects__filter-title">ЦЕНА</h4>
						<ul className="projects__filter-btns">
							<li className="projects__filter-column">
								<button className="projects__filter-btn">По возрастанию</button>
							</li>
						</ul>
					</div>

					<button className="projects__filter-reset">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13.9497 5.46446L5.46446 13.9497L4.05025 12.5355L12.5355 4.05025L13.9497 5.46446Z"
								fill="currentColor"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M5.46447 4.05025L13.9498 12.5355L12.5355 13.9497L4.05026 5.46446L5.46447 4.05025Z"
								fill="currentColor"
							/>
						</svg>
						Очистить фильтр
					</button>
				</div>

				<ProjectList />
			</Fade>
			<SideInfo
				sideInfoIndex={true}
				stateValue={false}
				state={isSideFilterOpened}
				setState={setIsSideFilterOpened}
			>
				<div className="projects__filter projects__filter--side">
					<div className="projects__filter-square ">
						<h4 className="projects__filter-title">ПЛОЩАДЬ</h4>
						<ul className="projects__filter-btns">
							<li className="projects__filter-column">
								<button className="projects__filter-btn">меньше 150м2</button>
							</li>
							<li className="projects__filter-column">
								<button className="projects__filter-btn">150м2 - 200м2</button>
							</li>
							<li className="projects__filter-column">
								<button className="projects__filter-btn">больше 200м2</button>
							</li>
						</ul>
					</div>
					<div className="projects__filter-floor">
						<h4 className="projects__filter-title">ЭТАЖНОСТЬ, ВКЛЮЧАЯ МАНСАРДУ</h4>
						<ul className="projects__filter-btns">
							<li className="projects__filter-column">
								<button className="projects__filter-btn">1 этаж</button>
							</li>
							<li className="projects__filter-column">
								<button className="projects__filter-btn">2 этажа</button>
							</li>
						</ul>
					</div>
					<div className="projects__filter-price">
						<h4 className="projects__filter-title">ЦЕНА</h4>
						<ul className="projects__filter-btns">
							<li className="projects__filter-column">
								<button className="projects__filter-btn">По возрастанию</button>
							</li>
						</ul>
					</div>

					<button className="projects__filter-reset">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13.9497 5.46446L5.46446 13.9497L4.05025 12.5355L12.5355 4.05025L13.9497 5.46446Z"
								fill="currentColor"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M5.46447 4.05025L13.9498 12.5355L12.5355 13.9497L4.05026 5.46446L5.46447 4.05025Z"
								fill="currentColor"
							/>
						</svg>
						Очистить фильтр
					</button>
				</div>
			</SideInfo>
		</div>
	);
};

export default Projects;
