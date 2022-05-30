import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Loader from "../../../Components/Shared/Loader";
import branchStyle from "./branchStyle";

const Branch3 = () => {
	const [loaderActive, setloaderActive] = useState(true);
	useEffect(() => {
		const loaderTimeOut = setTimeout(() => {
			setloaderActive(false);
		}, 1000);
		return () => {
			clearTimeout(loaderTimeOut);
		};
	}, [loaderActive]);
	return (
		<div className={branchStyle}>
			<div className="row">
				<div className="column">
					<ul className="info">
						<li className="info__item">
							<h5 className="info__title">отдел продаж</h5>
							<a href="tel:84959732555" className="info__link">
								8 (495) 973-25-55
							</a>
							<a href="tel:+79916023252" className="info__link">
								+7 (991) 602-32-52
							</a>
							<a href="mailto:info@ccnova.ru" className="info__link">
								info@ccnova.ru
							</a>
							<h5 className="info__title info__title--whatsapp">whatsapp</h5>
							<a href="https://api.whatsapp.com/send?phone=+79916023252" className="info__link">
								+7 (991) 602-32-52
							</a>
						</li>

						<li className="info__item">
							<address className="address">
								<h5 className="info__title">Ростов-на-дону</h5>
								<p className="info__text">
									Центральная ул., 8Б,
									<br />
									LA-5 Внуково , 4 этаж, офис 407
								</p>
							</address>

							<h5 className="info__title info__title--website">сайт</h5>
							<a href="https://ngnova.ru" className="info__link">
								ngnova.ru
							</a>
						</li>

						<li className="info__item">
							<h5 className="info__title">для поставщиков</h5>
							<a href="tel:+79045012425" className="info__link">
								+7 (904) 501-24-25
							</a>
							<a href="mailto:info@ngnova.ru" className="info__link">
								info@ngnova.ru
							</a>
							<span className="info__text">Звонить после 16:00</span>
						</li>

						<li className="info__item">
							<h5 className="info__title">Режим работы</h5>
							<span className="info__text">пн. – пт.: 9:00 – 18:00</span>
							<span className="info__text">сб.: 10:00 – 17:00</span>
							<span className="info__text">перерыв: 12:00 – 13:00</span>
						</li>
					</ul>
				</div>
				<div className="column map">
					{loaderActive ? (
						<Loader />
					) : (
						<Iframe
							url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.4511712502117!2d39.703995515794475!3d47.22732012209411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b905dcc55555%3A0xe8549017f4bdad4a!2z0YPQuy4g0JPQvtGA0L7QtNCwINCS0L7Qu9C-0YEsIDYsINC-0YQuIDUwNywg0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMsINCg0L7RgdGC0L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMzQ0MDAy!5e0!3m2!1sru!2skg!4v1653420286393!5m2!1sru!2skg"
							width="100%"
							height="100%"
							className="map-container"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Branch3;
