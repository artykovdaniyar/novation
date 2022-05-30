import React from "react";
import { css } from "@emotion/css";

const techConsultationStyle = css`
	.title {
		color: var(--gray-color);
		line-height: 1.3;
		font-size: 14px;
		margin-bottom: 15px;
	}
	.contacts-link {
		color: var(--primary-color);
		line-height: 1.13;
		font-size: 27px;
		font-weight: 600;
		&:hover {
			text-decoration: underline;
		}
	}
`;

const TechConsultation = () => {
	return (
		<section className={techConsultationStyle}>
			<h3 className="title">
				стоимость строительства по другим технологиям, <br /> а также стоимость отделочных и других
				<br />
				видов работ уточняйте по телефону
			</h3>
			<a className="contacts-link" href="tel:+79184100191">
				+7 918 410 01 91
			</a>
		</section>
	);
};

export default TechConsultation;
