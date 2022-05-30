import React from "react";
import { css } from "@emotion/css";

const SectionTitleStyle = css`
	color: #606067;
	line-height: 1.2;
	font-size: 24px;
	font-weight: 600;
`;

const SectionTitleMin = ({ headingNUm = 2, children }) => {
	const H = `h${headingNUm}`;
	return <H className={SectionTitleStyle}>{children}</H>;
};

export default SectionTitleMin;
