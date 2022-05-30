import React from "react";
import guaranteeIcon from "../../Assets/Img/Icons/guarantee.svg";
import progressPaymentIcon from "../../Assets/Img/Icons/progress_payment.svg";
import docsIcon from "../../Assets/Img/Icons/docs.svg";
import priceIcon from "../../Assets/Img/Icons/price.svg";
import { css } from "@emotion/css";

const advantageStyle = css`
	padding: 80px 0 100px;
	.list {
		display: flex;
		flex-wrap: wrap;
	}
	.list-item {
		flex-basis: calc(100% / 4);
		padding: 0 15px;
		margin-bottom: 40px;
	}
	@media screen and (max-width: 767px) {
		.list-item {
			padding: 0;
			flex-basis: 50%;
		}
	}
`;

const Advantage = () => {
	return (
		<section className={advantageStyle}>
			<h2 className="title visually-hidden">Advantage</h2>
			<ul className="list">
				<li className="list-item">
					<img className="img" width="45" height="45" src={guaranteeIcon} alt="Гарантия" />
					<h3 className="name">Гарантия 5 лет</h3>
				</li>

				<li className="list-item">
					<img className="img" width="45" height="45" src={progressPaymentIcon} alt="Оплата" />
					<h3 className="name">Поэтапная оплата</h3>
				</li>

				<li className="list-item">
					<img className="img" width="45" height="45" src={docsIcon} alt="Оплата" />
					<h3 className="name">Официальный договор</h3>
				</li>

				<li className="list-item">
					<img className="img" width="45" height="45" src={priceIcon} alt="Оплата" />
					<h3 className="name">Твердая цена</h3>
				</li>
			</ul>
		</section>
	);
};

export default Advantage;
