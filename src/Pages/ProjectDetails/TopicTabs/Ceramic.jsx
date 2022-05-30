import React from "react";
import ceramicImg from "../../../Assets/Img/ceramic-cladding.jpg";
import TabsContentsStyle from "./TabsContentsStyle";

const Ceramic = () => {
	return (
		<div className={TabsContentsStyle}>
			<div className="row">
				<div className="img-column">
					<img src={ceramicImg} className="img" alt="Изображения фундамента" />
				</div>
				<div className="info-column">
					<h3 className="title">Керамический облицовочный</h3>
					<h4 className="subtitle">Преимущества</h4>
					<div className="lists">
						<ol className="list list--1">
							<li className="list-item">Широкая цветовая гамма</li>
							<li className="list-item">Разновидность фактуры</li>
						</ol>

						<ol className="list list--2">
							<li className="list-item">Широкий ценовой диапозон</li>
							<li className="list-item">Не подвергается деформации и растрескиванию</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ceramic;
