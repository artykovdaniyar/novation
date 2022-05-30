import { css } from "@emotion/css";
const TabsContentsStyle = css`
	.row {
		display: flex;
	}
	.img-column {
		flex-basis: calc(100% / 3);
	}
	.img {
		width: 100%;
		max-height: 288px;
		object-fit: cover;
	}
	.info-column {
		flex-grow: 1;
		padding-left: 30px;
	}
	.title {
		color: #606067;
		line-height: 1.2;
		font-size: 24px;
		margin-bottom: 25px;
	}
	.subtitle {
		color: var(--gray-color);
		line-height: 1.3;
		font-size: 14px;
		margin-bottom: 15px;
	}
	.lists {
		display: flex;
	}
	.list {
		position: relative;
		width: 50%;
		counter-reset: my-counter;
		&--2 {
			counter-reset: my-counter 2;
			padding-left: 30px;
		}
	}
	.list-item {
		position: relative;
		color: #606067;
		line-height: 1.3;
		font-size: 16px;
		padding-bottom: 15px;
		padding-left: 20px;
		&::before {
			content: counter(my-counter) " ";
			counter-increment: my-counter;
			position: absolute;
			left: 0px;
			display: block;
			color: var(--gray-color);
			line-height: 1.4;
			font-size: 14px;
			margin-right: 15px;
		}
	}
	@media screen and (max-width: 1199px) {
		.img-column {
			flex-basis: 50%;
		}
		.lists {
			flex-direction: column;
		}
		.list {
			width: 100%;
			&--2 {
				padding-left: 0;
			}
		}
	}
	@media screen and (max-width: 767px) {
		.row {
			flex-wrap: wrap;
		}
		.img-column {
			flex-basis: 100%;
			margin-bottom: 50px;
		}
		.img {
			max-height: none;
		}
		.info-column {
			padding-left: 0;
		}
	}
`;
export default TabsContentsStyle;
