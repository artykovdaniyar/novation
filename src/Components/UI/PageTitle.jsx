import React from "react";
import { css } from "@emotion/css";

const pageTitleStyle = css`
	color: var(--font-color);
	line-height: 1.1;
	font-size: 40px;
	font-weight: 600;
	margin-bottom: 80px;
	@media (max-width: 767px) {
		margin-bottom: 50px;
	}
	@media (max-width: 413px) {
		font-size: 30px;
	}
`;
const PageTitle = ({ children }) => {
	return <h2 className={pageTitleStyle}>{children}</h2>;
};

export default PageTitle;
