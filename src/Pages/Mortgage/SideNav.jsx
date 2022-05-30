import React from "react";
import { css } from "@emotion/css";
import { HashLink as Link } from "react-router-hash-link";

const sideNavStyle = css`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: max-content;
	max-width: 275px;
	.list-item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-wrap: wrap;
	}
	.list-link {
		display: block;
		width: 100%;
		color: var(--gray-color--light);
		line-height: 1.3;
		font-size: 14px;
		font-weight: 500;

		padding-bottom: 15px;
		padding-top: 17px;
		border-bottom: 1px solid #d8d8d8;
		transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
	}
	.list-link:hover,
	.list-link:focus {
		color: var(--primary-color);
		border-bottom: 1px solid var(--primary-color);
	}
`;

const SideNav = () => {
	return (
		<div className={sideNavStyle}>
			<ul className="list">
				<li className="list-item">
					<Link className="list-link" to="#mortgage">
						Ипотека
					</Link>
				</li>

				<li className="list-item">
					<Link className="list-link" to="#calculator">
						Рассчитать ипотеку
					</Link>
				</li>

				<li className="list-item">
					<Link className="list-link" to="#tax">
						Налоговый Вычет
					</Link>
				</li>
				<li className="list-item">
					<Link className="list-link" to="#maternalCapital">
						Материнский Капитал
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
