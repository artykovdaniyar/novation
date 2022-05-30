import React from "react";
import { css } from "@emotion/css";

const SectionSubtitleStyle = css`
	color: var(--gray-color);
	line-height: 1.3;
	font-size: 14px;

	margin-top: 10px;
	margin-bottom: 42px;
`;
const SectionSubtitle = ({ children }) => {
	return <h2 className={SectionSubtitleStyle}>{children}</h2>;
};

export default SectionSubtitle;
