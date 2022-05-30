import React from "react";
import { css } from "@emotion/css";

const pageHeaderStyle = css`
	display: flex;
	margin-bottom: 80px;
	justify-content: space-between;
	align-items: flex-end;
	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 46px;
	}
`;

const PageHeader = ({ children }) => {
	return <header className={pageHeaderStyle}>{children}</header>;
};

export default PageHeader;
