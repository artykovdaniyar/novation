import React from "react";
import brickImg from "../../../Assets/Img/brick.jpg";
import TabsContentsStyle from "./TabsContentsStyle";

const Brick = () => {
	return (
		<div className={TabsContentsStyle}>
			<div className="row">
				<div className="img-column">
					<img src={brickImg} className="img" alt="Изображения фундамента" />
				</div>
				<div className="info-column">
					<h3 className="title">Кирпич</h3>
					<h4 className="subtitle">Преимущества</h4>
					<div className="lists">
						<ol className="list">
							<li className="list-item">Высокая прочность</li>
							<li className="list-item">Отличная звукоизоляция</li>
							<li className="list-item">Долговечность</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brick;
