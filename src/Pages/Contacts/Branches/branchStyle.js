import { css } from "@emotion/css";

const branchStyle = css`
	.row {
		display: flex;
		align-items: center;
	}
	.column {
		width: 50%;
	}
	.map {
		position: relative;
		height: 417px;
		background: #f4f4f4;
	}
	.info {
		display: flex;
		flex-wrap: wrap;
	}
	.info__item {
		display: flex;
		flex-direction: column;
		width: 50%;
	}
	.info__title {
		margin-bottom: 5px;
		max-width: 250px;
		color: var(--gray-color);
		line-height: 1.3;
		font-size: 14px;
		font-weight: 500;
	}
	.info__link {
		display: block;
		color: var(--primary-color);
		line-height: 1.4;
		font-size: 15px;
	}
	.info__link:hover,
	.info__link:focus {
		text-decoration: underline;
	}
	.info__title--website,
	.info__title--whatsapp {
		padding-top: 15px;
		margin-top: auto;
	}
	.info__item:first-child {
		margin-bottom: 45px;
	}
	.info__item:nth-child(2) {
		margin-bottom: 45px;
	}
	.info__text {
		display: block;
		color: var(--font-color);
		line-height: 1.4;
		font-size: 15px;
	}
	.map-container {
		border: none;
	}
	@media screen and (max-width: 1023px) {
		.row {
			align-items: flex-start;
			flex-direction: column;
		}
		.column {
			width: 100%;
		}
		.info__item {
			width: 50%;
		}
		.map {
			margin-top: 25px;
		}
	}
	@media screen and (max-width: 375px) {
		.info__item {
			width: 100%;
		}
	}
`;

export default branchStyle;
