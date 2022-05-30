import React from "react";
import { css } from "@emotion/css";

const SectionTitleStyle = css`
	position: relative;
	color: var(--font-color);
	line-height: 1.2;
	font-size: 30px;
	font-weight: 600;
	@media screen and (max-width: 767px) {
		font-size: 28px;
	}
`;

const SectionTitle = ({ headingNUm = 2, children, className = "" }) => {
	const H = `h${headingNUm}`;
	return <H className={`${SectionTitleStyle} ${className}`}>{children}</H>;
};

export default SectionTitle;
