import React from "react";
import boardsImg from "../../../Assets/Img/boards.jpg";
import TabsContentsStyle from "./TabsContentsStyle";

const Boards = () => {
	return (
		<div className={TabsContentsStyle}>
			<div className="row">
				<div className="img-column">
					<img src={boardsImg} className="img" alt="Изображения фундамента" />
				</div>
				<div className="info-column">
					<h3 className="title">Плиты перекрытия и монолитные участки</h3>
					<h4 className="subtitle">Преимущества</h4>
					<div className="lists">
						<ol className="list list--1">
							<li className="list-item">Скорость возведения</li>
							<li className="list-item">Надёжность</li>
						</ol>

						<ol className="list list--2">
							<li className="list-item">Шумоизоляция</li>
							<li className="list-item">Невысокая стоимость</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Boards;
