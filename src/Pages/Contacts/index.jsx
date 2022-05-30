import React, { useState } from "react";
import PageNav from "../../Components/Shared/PageNav";
import PageTitle from "../../Components/UI/PageTitle";
import TabButton from "./TabButton";
import { css, keyframes } from "@emotion/css";
import { Fade } from "react-awesome-reveal";
import Branch1 from "./Branches/Branch1";
import Branch2 from "./Branches/Branch2";
import Branch3 from "./Branches/Branch3";
import Title from "../../Components/Shared/Title";

const fadeKeyframes = keyframes`
from {opacity: 0;}
to{opacity: 1;}
`;

const contactsStyle = css`
	h2 {
		margin-bottom: 35px;
	}
	.subtitle {
		color: var(--primary-color);
		line-height: 1.2;
		font-size: 14px;
		font-weight: 500;
	}
	.tabs-panel {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	.tabs-panel__item {
		margin-top: 8px;
	}

	.tabs-panel__item:not(:last-child) {
		margin-right: 10px;
	}
	.tabs-content {
		animation: ${fadeKeyframes} 1s forwards;
		animation-delay: 1.1s;
		padding-top: 40px;
		opacity: 0;
	}
	.tabs-content__item {
		display: none;
	}
	.tabs-content__item.active {
		display: block;
	}
`;

const Contacts = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(1);
	return (
		<Fade triggerOnce className={contactsStyle}>
			<Title>
				Контакты строительной компании Новация в Краснодаре, адрес, телефон, email (почта) | СК
				Новация Краснодар
			</Title>
			<div className="container">
				<Fade triggerOnce delay="30">
					<PageNav curPage="Контакты" />
				</Fade>
				<Fade triggerOnce delay="50">
					<PageTitle>Контакты</PageTitle>
				</Fade>
				<Fade triggerOnce delay="70">
					<h3 className="subtitle">официальные представители</h3>
				</Fade>
				<Fade triggerOnce delay="90">
					<ul className="tabs-panel">
						<li className="tabs-panel__item">
							<TabButton state={activeTabIndex} setState={setActiveTabIndex} activeTabNum={1}>
								Краснодар
							</TabButton>
						</li>
						<li className="tabs-panel__item">
							<TabButton state={activeTabIndex} setState={setActiveTabIndex} activeTabNum={2}>
								Ростов-на-Дону
							</TabButton>
						</li>
						<li className="tabs-panel__item">
							<TabButton state={activeTabIndex} setState={setActiveTabIndex} activeTabNum={3}>
								Москва
							</TabButton>
						</li>
					</ul>
				</Fade>

				<ul className="tabs-content">
					<li className={`tabs-content__item ${activeTabIndex === 1 ? "active" : ""}`}>
						<Fade triggerOnce>
							<Branch1 />
						</Fade>
					</li>
					<li className={`tabs-content__item ${activeTabIndex === 2 ? "active" : ""}`}>
						<Fade triggerOnce>
							<Branch2 />
						</Fade>
					</li>
					<li className={`tabs-content__item ${activeTabIndex === 3 ? "active" : ""}`}>
						<Fade>
							<Branch3 triggerOnce />
						</Fade>
					</li>
				</ul>
			</div>
		</Fade>
	);
};

export default Contacts;
