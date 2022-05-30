import { css } from "@emotion/css";

const priceSideInfoStyle = css`
	margin: 0 auto;
	padding: 0 30px;
	img {
		margin-bottom: 25px;
		object-fit: cover;
	}
	.title {
		color: var(--font-color);
		line-height: 1.2;
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 50px;
	}
	.list {
		list-style-type: none;
		counter-reset: my-counter;
	}
	.list-item {
		position: relative;
		color: #606067;
		line-height: 1.3;
		font-size: 18px;

		padding-bottom: 15px;
		position: relative;
		padding-left: 20px;
	}
	.list-item:before {
		content: counter(my-counter) " ";
		counter-increment: my-counter;
		color: var(--gray-color);
		line-height: 1.4;
		font-size: 14px;

		margin-right: 15px;
		display: block;
		position: absolute;
		left: 0px;
	}
	@media (max-width: 1023px) {
		margin: 0 auto;
	}
	@media (max-width: 650px) {
		margin: 0 auto;
		padding: 20px;
		img {
			width: 100%;
		}
	}
`;
export default priceSideInfoStyle;
