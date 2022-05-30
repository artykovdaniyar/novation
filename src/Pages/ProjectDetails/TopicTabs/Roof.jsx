import React from "react";
import roofImg from "../../../Assets/Img/metal-tile.jpg";
import TabsContentsStyle from "./TabsContentsStyle";

const Roof = () => {
	return (
		<div className={TabsContentsStyle}>
			<div className="row">
				<div className="img-column">
					<img src={roofImg} className="img" alt="Изображения фундамента" />
				</div>
				<div className="info-column">
					<h3 className="title">Металлочерепица</h3>
					<h4 className="subtitle">Преимущества</h4>
					<div className="lists">
						<ol className="list">
							<li className="list-item">Скорость монтажа</li>
							<li className="list-item">Невысокая стоимость</li>
							<li className="list-item">Небольшой вес конструкции</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roof;
