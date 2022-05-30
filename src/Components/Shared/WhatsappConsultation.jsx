import React from "react";
import { css } from "@emotion/css";

const whatsappConsultationStyle = css`
	.whatsappConsultation {
		&__title {
			color: var(--gray-color);
			line-height: 1.2;
			font-size: 14px;
			margin-bottom: 1px;
		}
		&__phone {
			display: block;
			color: var(--primary-color);
			line-height: 1.13;
			font-size: 20px;
			margin-bottom: 10px;
			font-weight: 600;
			&:hover {
				text-decoration: underline;
			}
		}
		&__whatsapp {
			display: flex;
			align-items: center;
			justify-content: center;
			width: max-content;
			background: var(--primary-color);
			color: var(--theme-color);
			line-height: 1;
			font-size: 16px;
			font-weight: 600;
			padding: 2px 25px;
			transition: background 0.3s ease;
			text-align: center;
			&-icon {
				margin-right: 7px;
			}
			&:hover {
				color: var(--primary-color);
				background: transparent;
			}
		}
	}
`;

const WhatsappConsultation = ({ className }) => {
	return (
		<div className={`${whatsappConsultationStyle} ${className}`}>
			<h3 className="whatsappConsultation__title">консультация по строительству</h3>
			<div className="whatsappConsultation__links">
				<a href="tel:+88612040026" className="whatsappConsultation__phone">
					8 (861) 204-00-26
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=79388678708"
					className="whatsappConsultation__whatsapp"
				>
					<svg
						className="whatsappConsultation__whatsapp-icon"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
					>
						<path
							d="M11.1026 2.77493C9.30751 -9.17322e-05 5.64261 -0.825098 2.80044 0.899915C0.0330687 2.62493 -0.864458 6.37496 0.930596 9.14998L1.08018 9.37498L0.481832 11.625L2.72565 11.025L2.95003 11.175C3.92235 11.7 4.96947 12 6.01658 12C7.13849 12 8.2604 11.7 9.23272 11.1C12.0001 9.29998 12.8228 5.62495 11.1026 2.77493ZM9.53189 8.54997C9.23272 8.99998 8.85875 9.29998 8.33519 9.37498C8.03602 9.37498 7.66205 9.52498 6.16617 8.92498C4.89467 8.32497 3.84756 7.34996 3.09962 6.22496C2.65086 5.69995 2.42647 5.02495 2.35168 4.34994C2.35168 3.74994 2.57606 3.22493 2.95003 2.84993C3.09962 2.69993 3.24921 2.62493 3.39879 2.62493H3.77276C3.92235 2.62493 4.07194 2.62493 4.14673 2.92493C4.29632 3.29993 4.67029 4.19994 4.67029 4.27494C4.74508 4.34994 4.74508 4.49994 4.67029 4.57494C4.74508 4.72494 4.67029 4.87495 4.5955 4.94995C4.5207 5.02495 4.44591 5.17495 4.37111 5.24995C4.22153 5.32495 4.14673 5.47495 4.22153 5.62495C4.5207 6.07495 4.89467 6.52496 5.26864 6.89996C5.7174 7.27496 6.16617 7.57497 6.68972 7.79997C6.83931 7.87497 6.9889 7.87497 7.06369 7.72497C7.13849 7.57497 7.51246 7.19996 7.66205 7.04996C7.81163 6.89996 7.88643 6.89996 8.03602 6.97496L9.23272 7.57497C9.38231 7.64997 9.53189 7.72497 9.60669 7.79997C9.68148 8.02497 9.68148 8.32497 9.53189 8.54997Z"
							fill="currentColor"
						/>
					</svg>
					написать в WhatsApp
				</a>
			</div>
		</div>
	);
};

export default WhatsappConsultation;
