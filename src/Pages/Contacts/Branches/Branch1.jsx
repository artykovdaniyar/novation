import React, { useEffect, useState } from "react";
import branchStyle from "./branchStyle";
import Iframe from "react-iframe";
import Loader from "../../../Components/Shared/Loader";

const Branch1 = () => {
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
							<a href="tel:88612040026" className="info__link">
								8 (861) 204-00-26
							</a>
							<a href="tel:+89184100191" className="info__link">
								8 (918) 410-01-91
							</a>
							<a href="mailto:ccnova-krd@yandex.ru" className="info__link">
								ccnova-krd@yandex.ru
							</a>
							<h5 className="info__title info__title--whatsapp">whatsapp</h5>
							<a href="https://api.whatsapp.com/send?phone=+79388678708" className="info__link">
								+7 (938) 867-87-08
							</a>
						</li>

						<li className="info__item">
							<address className="address">
								<h5 className="info__title">Краснодар</h5>
								<p className="info__text">
									ул. Кожевенная, д. 36
									<br />
									офис 402
								</p>
							</address>

							<h5 className="info__title info__title--website">сайт</h5>
							<a href="https://novakrd.ru" className="info__link">
								novakrd.ru
							</a>
						</li>

						<li className="info__item">
							<h5 className="info__title">для поставщиков</h5>
							<a href="tel:89288846240" className="info__link">
								8 928 884-62-40
							</a>
							<a href="mailto:snab.ksn@yandex.ru" className="info__link">
								snab.ksn@yandex.ru
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
							url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.3838866763404!2d38.94656220622962!3d45.03743119953522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f0e43e384c1%3A0xb595f435ad9edb69!2z0YPQuy4g0JrQvtC20LXQstC10L3QvdCw0Y8sIDM2LCDQmtGA0LDRgdC90L7QtNCw0YAsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCDQoNC-0YHRgdC40Y8sIDM1MDAwNA!5e0!3m2!1sru!2sus!4v1653412598589!5m2!1sru!2sus"
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

export default Branch1;
