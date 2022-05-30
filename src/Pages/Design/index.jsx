import React from "react";
import { css } from "@emotion/css";
import PageNav from "../../Components/Shared/PageNav";
import PageTitle from "../../Components/UI/PageTitle";
import TopicTabs from "./TopicTabs";
import StyleTabs from "./StyleTabs";
import About from "./About";
import Scheme from "./Scheme";
import Consultation from "../../Components/Shared/Consultation";
import Title from "../../Components/Shared/Title";
import { Fade } from "react-awesome-reveal";

const designStyle = css`
	.red {
		color: red;
	}
`;

const Design = () => {
	return (
		<Fade triggerOnce className={`${designStyle} container`}>
			<Title>Индивидуальное проектирование домов в Краснодаре</Title>

			<Fade delay="30" triggerOnce>
				<PageNav curPage="Проектирование" />
			</Fade>
			<Fade delay="50" triggerOnce>
				<PageTitle>Индивидуальное проектирование</PageTitle>
			</Fade>
			<Fade delay="80" triggerOnce>
				<TopicTabs />
			</Fade>
			<Fade triggerOnce>
				<StyleTabs />
			</Fade>
			<Fade triggerOnce>
				<About />
			</Fade>
			<Fade triggerOnce>
				<Scheme />
			</Fade>
			<Fade triggerOnce>
				<Consultation />
			</Fade>
		</Fade>
	);
};

export default Design;
