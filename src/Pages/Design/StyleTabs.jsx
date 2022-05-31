import React, { useState } from "react";
import { css } from "@emotion/css";
import SectionTitleMin from "../../Components/UI/SectionTitleMin";
import LinkArrow from "../../Components/UI/LinkArrow";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import StyleList from "./StyleList";
import classicImg from "../../Assets/Img/classic.jpg";
import modernImg from "../../Assets/Img/modern.jpg";
import chaletImg from "../../Assets/Img/chalet.jpg";
import wrightimg from "../../Assets/Img/wright.jpg";
import americanimg from "../../Assets/Img/american.jpg";
import englishImg from "../../Assets/Img/english.jpg";
import mediterraneanImg from "../../Assets/Img/mediterranean.jpg";

const styleTabsStyle = css`
	padding-bottom: 100px;
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 70px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-bottom: 60px;
	}
	.header__item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90px;
		flex-grow: 1;
		padding: 13px 12px;
		height: 170px;
		border-left: 1px solid #d8d8d8;
		&:last-child {
			border-right: 1px solid #d8d8d8;
		}
	}

	.header__btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 0 5px;
		font-size: 14px;

		text-align: center;
		color: var(--font-color);
		line-height: 1.1;
		background-color: var(--theme-color);
		transition: background 0.3s ease, color 0.3s ease, filter 0.3s ease;
		p {
			margin-top: 9px;
			color: #9a9a9a;
			transition: color 0.3s ease;
		}
		&:hover {
			color: var(--theme-color);
			background: var(--primary-color);
			p {
				color: #67dac0;
			}
		}
		&.active {
			color: var(--theme-color);
			background: var(--primary-color);
			p {
				color: #67dac0;
			}
		}
	}
	.content__item {
		display: none;
	}
	.content__item.active {
		display: block;
	}
	@media (max-width: 1023px) {
		.header__item {
			height: 80px;
			border-right: 1px solid #d8d8d8;
			flex-basis: calc(100% / 4);
			margin-bottom: 6px;
			&:last-child {
				flex-basis: calc(100% / 2);
			}
		}
	}
	@media (max-width: 767px) {
		.section-header {
			flex-direction: column;
			align-items: flex-start;
			a {
				margin-top: 2px;
			}
		}
		.header__item {
			padding: 4px;
			box-shadow: 0px 2px 0px 0px #d8d8d8;
			flex-basis: calc(100% / 3);
			&:last-child {
				flex-basis: 100%;
			}
		}
	}
`;

const StyleTabs = () => {
	const classicProjects = useSelector((state) => state.styles.classicList);
	const modernProjects = useSelector((state) => state.styles.modernList);
	const chaletProjects = useSelector((state) => state.styles.chaletList);
	const wrightProjects = useSelector((state) => state.styles.wrightList);
	const americanProjects = useSelector((state) => state.styles.americanList);
	const englishProjects = useSelector((state) => state.styles.englishList);
	const mediterraneanProjects = useSelector((state) => state.styles.mediterraneanList);

	const [tabNumToShow, setTabNumToShow] = useState(1);
	const toggleTabs = (index) => {
		setTabNumToShow(index);
	};
	return (
		<section className={styleTabsStyle}>
			<header className="section-header">
				<SectionTitleMin>Выбрать архитектурный стиль</SectionTitleMin>
				<LinkArrow path="projects">посмотреть проекты </LinkArrow>
			</header>
			<ul className="header">
				<li className="header__item">
					<button
						className={tabNumToShow === 1 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(1)}
					>
						Классический
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 2 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(2)}
					>
						Современный
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 3 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(3)}
					>
						Шале
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 4 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(4)}
					>
						Райт
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 5 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(5)}
					>
						Американский
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 6 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(6)}
					>
						Английский
					</button>
				</li>
				<li className="header__item">
					<button
						className={tabNumToShow === 7 ? "header__btn active" : "header__btn"}
						onClick={() => toggleTabs(7)}
					>
						Средиземноморский
					</button>
				</li>
			</ul>

			<ul className="content">
				<li className={tabNumToShow === 1 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={classicProjects} img={classicImg} />
					</Fade>
				</li>
				<li className={tabNumToShow === 2 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={modernProjects} img={modernImg} />
					</Fade>
				</li>
				<li className={tabNumToShow === 3 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={chaletProjects} img={chaletImg} />
					</Fade>
				</li>
				<li className={tabNumToShow === 4 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={wrightProjects} img={wrightimg} />
					</Fade>
				</li>
				<li className={tabNumToShow === 5 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={americanProjects} img={americanimg} />
					</Fade>
				</li>
				<li className={tabNumToShow === 6 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={englishProjects} img={englishImg} />
					</Fade>
				</li>
				<li className={tabNumToShow === 7 ? "content__item active" : "content__item"}>
					<Fade triggerOnce>
						<StyleList projects={mediterraneanProjects} img={mediterraneanImg} />
					</Fade>
				</li>
			</ul>
		</section>
	);
};

export default StyleTabs;
