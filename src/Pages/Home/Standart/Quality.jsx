import React from "react";
import SideInfo from "../../../Components/Layouts/SideInfo";
import sideInfoStyle from "./sideInfoStyle";

const Quality = ({ state, setState }) => {
	return (
		<SideInfo sideInfoIndex={10} state={state} setState={setState}>
			<div className={sideInfoStyle}>
				<h3 className="title">Качество строительства</h3>
				<p className="descr">
					Мы разработали и внедрили систему контроля качества на этапах проектирования и
					строительства. Каждый этап работ в нашей компании проходит проверку на соответствие
					стандартам.
				</p>
				<h4 className="subline">Ключевые факторы влияющие на качество строительства дома:</h4>
				<ul className="list">
					<li className="list-item">
						Грамотный проект.
						<p className="list-descr">
							Качественно и детально проработанный проект, понятный для строителей и заказчика,
							который значительно уменьшает количество ошибок, нестыковок и переделок при
							строительстве дома
						</p>
					</li>

					<li className="list-item">
						Контроль.
						<p className="list-descr">
							За качеством строительства на каждом объекте следят: производитель работ, главный
							инженер, а также архитектор проекта
						</p>
					</li>

					<li className="list-item">
						Профессионализм сотрудников.
						<p className="list-descr">
							У нас работают специалисты с подтвержденной профессиональной квалификацией в своей
							области
						</p>
					</li>

					<li className="list-item">
						Технологические карты.
						<p className="list-descr">
							Это подробные схемы производства работ, поэтапно раскрывающие технологию производства
							и допустимые отклонения от нормативов
						</p>
					</li>

					<li className="list-item">
						Стандарт приемки, складирования и хранения материалов.
						<p className="list-descr">
							Документ регламентирующий приемку, складирование и хранение материалов, позволяющий
							исключить использование некачественного материала при строительстве дома
						</p>
					</li>
				</ul>
			</div>
		</SideInfo>
	);
};

export default Quality;
