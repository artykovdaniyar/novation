import React from "react";
import foundationImg from "../../../Assets/Img/fundament.png";
import TabsContentsStyle from "./TabsContentsStyle";

const Foundation = () => {
	return (
		<div className={TabsContentsStyle}>
			<div className="row">
				<div className="img-column">
					<img src={foundationImg} className="img" alt="Изображения фундамента" />
				</div>
				<div className="info-column">
					<h3 className="title">Ленточный фундамент вид 3</h3>
					<h4 className="subtitle">Преимущества</h4>
					<div className="lists">
						<ol className="list list--1">
							<li className="list-item">Применяется для зданий любой формы</li>
							<li className="list-item">Применяется для участков с уклоном</li>
						</ol>

						<ol className="list list--2">
							<li className="list-item">Быстрота возведения</li>
							<li className="list-item">Невысокая стоимость строительства</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Foundation;
