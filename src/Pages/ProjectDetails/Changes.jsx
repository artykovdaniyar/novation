import React from "react";
import SideInfo from "../../Components/Layouts/SideInfo";
import { css } from "@emotion/css";
import WhatsappConsultation from "../../Components/Shared/WhatsappConsultation";

const changesStyle = css`
	padding: 0 30px;
	.title {
		color: #606067;
		line-height: 1.2;
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	.list-item {
		position: relative;
		padding-left: 20px;
		margin-bottom: 25px;
		color: var(--font-color);
		line-height: 1.2;
		font-size: 16px;
		&::before {
			content: " ";
			display: block;
			width: 10px;
			height: 10px;
			background-color: #e1e1e8;
			position: absolute;
			left: 0;
			top: 4px;
		}
	}
	.descr {
		color: #606067;
		line-height: 1.4;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 60px;
	}
`;

const Changes = ({ state, setState }) => {
	return (
		<SideInfo stateValue={false} sideInfoIndex={1} state={state} setState={setState}>
			<div className={changesStyle}>
				<h3 className="title">Проект возможно изменить под индивидуальные требования Заказчика:</h3>
				<ul className="list">
					<li className="list-item">Изменение планировок</li>
					<li className="list-item">Изменение архитектурных решени</li>
					<li className="list-item">Гараж, навес</li>
					<li className="list-item">Терраса</li>
					<li className="list-item">Цокольный этаж</li>
					<li className="list-item">Цокольный этаж</li>
				</ul>
				<p className="descr">Другие возможные изменения</p>
				<WhatsappConsultation />
			</div>
		</SideInfo>
	);
};

export default Changes;
