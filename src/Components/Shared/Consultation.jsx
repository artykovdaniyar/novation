import React from "react";
import { css } from "@emotion/css";

const consultationStyle = css`
	.text {
		margin-bottom: 16px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 16px;
		text-align: center;
	}
	.link {
		display: block;
		text-align: center;
		letter-spacing: 0.01em;
		color: var(--primary-color);
		line-height: 1.1;
		font-size: 27px;
		font-weight: 700;
		&:hover {
			text-decoration: underline;
		}
	}
`;

const Consultation = () => {
	return (
		<section className={consultationStyle}>
			<p className="text">Хотите проконсультироваться? Позвоните нам</p>
			<a className="link" href="tel:88612040026">
				8 (861) 204-00-26
			</a>
		</section>
	);
};

export default Consultation;
