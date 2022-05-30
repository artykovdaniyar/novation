import React from "react";
import stairsImg from "../../../Assets/Img/stairs.jpg";
import TabsContentsStyle from "./TabsContentsStyle";

const Stairs = () => {
	return (
		<div className={TabsContentsStyle}>
			<div className="row">
				<div className="img-column">
					<img src={stairsImg} className="img" alt="Изображения фундамента" />
				</div>
				<div className="info-column">
					<h3 className="title">Монолитная железобетонная лестница</h3>
					<h4 className="subtitle">Преимущества</h4>
					<div className="lists">
						<ol className="list list--1">
							<li className="list-item">Долгий срок эксплуатации</li>
							<li className="list-item">Жесткость конструкции (отсуствие скрипа)</li>
						</ol>

						<ol className="list list--2">
							<li className="list-item">Пожароустойчивость</li>
							<li className="list-item">Мнообразие форм</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stairs;
