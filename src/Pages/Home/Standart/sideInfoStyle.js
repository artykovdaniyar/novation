import { css } from "@emotion/css";

const sideInfoStyle = css`
	padding: 0 120px;
	margin: auto 0;
	.title {
		margin-bottom: 50px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 30px;
		font-weight: 600;
	}
	.descr {
		color: #606067;
		line-height: 1.4;
		font-size: 15px;

		margin-bottom: 10px;
	}
	.subline {
		color: #606067;
		line-height: 1.2;
		font-size: 18px;
		font-weight: 500;
		margin: 35px 0 30px;
	}
	.list-item {
		position: relative;
		padding-left: 20px;
		margin-bottom: 25px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 16px;

		display: inline-block;
	}
	.list-item:before {
		content: " ";
		display: block;
		width: 10px;
		height: 10px;
		background-color: #e1e1e8;
		position: absolute;
		left: 0px;
		top: 2px;
	}
	.list-descr {
		color: #606067;
		line-height: 1.4;
		font-size: 15px;
		margin-top: 13px;
		margin-bottom: 10px;
	}
	@media (max-width: 1023px) {
		padding: 0 60px;
	}
	@media (max-width: 650px) {
		padding: 0 20px;
	}
`;
export default sideInfoStyle;
