import React from "react";
import { css } from "@emotion/css";

const tablesStyle = css`
	.title {
		color: var(--font-color);
		line-height: 1.35;
		font-size: 25px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	table {
		border: 0px solid var(--gray-color--dark);
		min-width: 100% !important;
		table-layout: fixed;
		border-collapse: collapse;
	}
	thead th {
	}
	thead tr th {
		text-align: right;
		color: var(--font-color);
		line-height: 1;
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 0;
	}
	thead tr th:first-child {
		text-align: left;
	}

	tbody tr {
		border-bottom: 1px solid #ddd;
	}
	td:first-child {
		text-align: left;
	}
	tbody tr td {
		width: 25%;
		word-break: break-all;
		text-align: right;
	}
	tfoot tr,
	tfoot td {
		border: none;
		color: var(--gray-color--light);
		font-size: 14px;
	}
	.table-1 {
		margin-bottom: 15px;
	}
	@media (max-width: 767px) {
		table b {
			font-size: 20px !important;
		}
		thead th:first-child {
			display: none;
		}
		thead tr th {
			flex-basis: calc(100% / 3);
			text-align: left;
		}
		thead tr {
			display: flex;
		}
		table td {
			border-right: none;
			font-size: 14px;
		}
		tbody tr {
			display: flex;
			flex-wrap: wrap;
		}

		tbody tr td {
			text-align: left;
			flex-grow: 1;
			padding-bottom: 10px;
		}
		tbody tr td:first-child {
			width: 100%;
			margin: 35px 0 20px;
			height: auto;
			padding: 0;
		}
	}
	@media (max-width: 374px) {
		table td {
			font-size: 12px;
		}
	}
`;
const Tables = () => {
	return (
		<section className={tablesStyle} id="mortgage">
			<h2 className="title">Ипотечный кредит с господдержкой для граждан, имеющих детей*</h2>
			<table cellSpacing="0" className="table-1">
				<thead>
					<tr>
						<th height="40" align="left">
							Условия
						</th>
						<th align="center">Центр-Инвест</th>
						<th align="center">СБЕР</th>
						<th align="center">Дом РФ</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td height="54">Процентная ставка, %</td>
						<td align="center">5.5</td>
						<td align="center">5.7</td>
						<td align="center">5.1</td>
					</tr>
					<tr>
						<td height="58" align="center">
							Максимальная сумма кредита, млн
						</td>
						<td align="center">6</td>
						<td align="center">6</td>
						<td align="center">6</td>
					</tr>
					<tr>
						<td height="58" align="center">
							Первоначальный взнос, %
						</td>
						<td align="center">15</td>
						<td align="center">20</td>
						<td align="center">15</td>
					</tr>

					<tr>
						<td height="58" align="center">
							Срок кредита, лет
						</td>
						<td align="center">20</td>
						<td align="center">30</td>
						<td align="center">30</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="5" height="35">
							* Первый или последующий ребёнок, рожденный не ранее 1 января 2018 года, являющийся
							гражданином РФ
						</td>
					</tr>
				</tfoot>
			</table>

			<h2 className="title">Льготная ипотека с господдержкой</h2>

			<table cellSpacing="0" className="table-2">
				<thead>
					<tr>
						<th height="40" align="left">
							Условия
						</th>
						<th align="center">Центр-Инвест</th>
						<th align="center">СБЕР</th>
						<th align="center">Дом РФ</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td height="54">Процентная ставка, %</td>
						<td align="center">11.5</td>
						<td align="center">11.7</td>
						<td align="center">11.3</td>
					</tr>
					<tr>
						<td height="48" align="center">
							Максимальная сумма кредита, млн
						</td>
						<td align="center">6</td>
						<td align="center">6</td>
						<td align="center">6</td>
					</tr>
					<tr>
						<td height="58" align="center">
							Первоначальный взнос, %
						</td>
						<td align="center">15</td>
						<td align="center">20</td>
						<td align="center">15</td>
					</tr>

					<tr>
						<td height="58" align="center">
							Срок кредита, лет
						</td>
						<td align="center">20</td>
						<td align="center">30</td>
						<td align="center">30</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default Tables;
