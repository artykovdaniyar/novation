import React from "react";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";

const footerStyles = css`
	padding: 130px 40px 30px;
	max-width: 100%;
	width: 100%;
	margin: auto auto 0 auto;
	.footer {
		&__divider {
			display: flex;
			justify-content: center;
			border-top: 1px solid #d8d8d8;
		}
		&__wrapper {
			display: flex;
			width: 100%;
			margin-top: 30px;
			flex-wrap: wrap;
		}
		&__divider-link {
			margin-top: -16px;
			background: var(--theme-color);
		}
		&-nav {
			width: 42%;
			display: flex;
			&__list:first-child {
				margin-right: 40px;
			}
			&__link {
				position: relative;
				display: block;
				padding: 7.5px 0;
				color: var(--font-color);
				line-height: 1.13;
				font-size: 16px;
				font-weight: 600;
			}
			&__link::before {
				position: absolute;
				bottom: 0;
				content: "";
				display: block;
				height: 2px;
				width: 0%;
				background: var(--primary-color);
				transition: 0.5s all;
			}
			&__link:hover::before {
				width: 50%;
			}
		}
		&__address {
			width: 16%;
			text-align: center;
			color: #606067;
			line-height: 1.5;
			font-size: 16px;
		}
		&__contact {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			width: 42%;

			&-phone {
				color: var(--primary-color);
				line-height: 1.13;
				font-size: 27px;
				font-weight: 600;
			}
			&-phone:hover,
			&-instagram:hover {
				text-decoration: underline;
			}
			&-mail {
				position: relative;
				border-bottom: 1px solid var(--primary-color);
				font-size: 16px;
				line-height: 1.25;
				font-weight: 600;
				margin: 15px 0;
				color: var(--primary-color);
				transition: color 0.2s ease-in-out;
			}
			&-mail::after {
				content: "";
				display: block;
				position: absolute;
				top: 100%;
				right: 0;
				bottom: 0;
				left: 0;
				background: var(--primary-color);
				z-index: -1;
				transition: top 0.2s ease-in-out;
			}
			&-mail:hover {
				color: var(--theme-color);
				&:after {
					top: 0;
				}
			}
			&-instagram {
				display: flex;
				align-items: center;
			}
		}
		&__copyright {
			display: flex;
			align-content: center;
			justify-content: space-between;
			flex-wrap: wrap;
			color: var(--gray-color);
			line-height: 1.5;
			font-size: 14px;
			font-weight: 600;
			margin-top: 15px;
			margin-right: 15px;
		}
		&__copyright-author {
			display: flex;
			align-items: center;
			span {
				font-size: 13px;
				margin-right: 7px;
			}
		}
	}
	@media (max-width: 1023px) {
		.footer {
			&-nav {
				width: 50%;
			}
			&__address {
				order: 3;
				width: 100%;
				text-align: left;
				margin-top: 48px;
			}
			&__contact {
				width: 50%;
			}
		}
	}
	@media (max-width: 768px) {
		padding: 160px 20px 30px;
		.footer {
			&__divider {
				justify-content: flex-start;
			}
			&-nav {
				justify-content: space-between;
				width: 100%;
				flex-wrap: wrap;
			}
			&__address {
				margin-top: 40px;
				max-width: 290px;
			}
			&__contact {
				margin-top: 38px;
				flex-grow: 1;
				align-items: flex-start;
				width: 100%;
			}
			&__copyright-text {
				max-width: 414px;
				margin-bottom: 15px;
			}
			&__copyright-author {
				span {
				}
			}
		}
	}
	@media (max-width: 375px) {
		.footer {
			&__contact-phone {
				font-size: 21px;
			}
		}
	}
`;

const Footer = () => {
	return (
		<footer className={footerStyles}>
			<div className="footer__divider">
				<a href="/" className="footer__divider-link">
					<svg
						width="88"
						height="42"
						viewBox="0 0 88 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M37.8445 4H30.636V29.1671L19.8233 14V23.523L30.636 38.841H37.8445V4ZM19.8233 14L12.6148 17.8162V38.841H19.8233V14ZM0 19.6184L1.80212 22.0212L24.9293 9.10601L28.8339 11.2085V7.9046L24.9293 5.50177L0 19.6184ZM39.6466 13.311V17.2156L78.3922 38.841H85L39.6466 13.311ZM41.6466 29.8304C40.542 29.8304 39.6466 30.7258 39.6466 31.8304V36.841C39.6466 37.9456 40.542 38.841 41.6466 38.841H48.4593C49.5639 38.841 50.4593 37.9456 50.4593 36.841V31.8304C50.4593 30.7258 49.5639 29.8304 48.4593 29.8304H41.6466ZM47.4559 32.2332H42.6502V36.4382H47.4559V32.2332ZM51.6608 31.6325L54.0636 30.1308L57.0672 36.1378L59.7703 30.1308L62.1732 31.6325L58.8693 38.841H55.265L51.6608 31.6325Z"
							fill="#33333D"
						/>
					</svg>
				</a>
			</div>
			<div className="footer__wrapper">
				<nav className="footer__nav footer-nav">
					<ul className="footer-nav__list">
						<li className="footer-nav__item">
							<NavLink to="/projects" className="footer-nav__link">
								Проекты
							</NavLink>
						</li>
						<li className="footer-nav__item">
							<NavLink to="/profile" className="footer-nav__link">
								Порфтолио
							</NavLink>
						</li>
						<li className="footer-nav__item">
							<NavLink to="/design" className="footer-nav__link">
								Проектирование
							</NavLink>
						</li>
						<li className="footer-nav__item">
							<NavLink to="/contacts" className="footer-nav__link">
								Контакты
							</NavLink>
						</li>
						<li className="footer-nav__item">
							<NavLink to="/price" className="footer-nav__link">
								Цены
							</NavLink>
						</li>
					</ul>
				</nav>
				<address className="footer__address">Краснодар, ул. Кожевенная, д. 36 офис 402</address>
				<div className="footer__contact">
					<a href="tel:88612040026" className="footer__contact-phone">
						8 (861) 204-00-26
					</a>
					<a href="mailto:ccnova-krd@yandex.ru" className="footer__contact-mail">
						ccnova-krd@yandex.ru
					</a>

					<a
						href="https://www.instagram.com/sk_novazia/"
						target="_blank"
						className="footer__contact-instagram"
						rel="noreferrer"
					>
						<svg
							width="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							style={{ marginRight: "5px" }}
						>
							<path
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
								fill="var(--primary-color)"
							></path>
						</svg>
						<span className="header__contacts-text">sk_novazia</span>
					</a>
				</div>
			</div>
			<div className="footer__copyright">
				<p className="footer__copyright-text">
					2015 – 2022 © Все права защищены политика конфиденциальности
				</p>
				<div className="footer__copyright-author">
					<span>дизайн и разработка</span>
					<svg
						width="81"
						height="20"
						viewBox="0 0 81 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M64.4986 19.9727C65.2589 19.9727 65.8551 19.6444 66.2439 19.1692L65.5613 18.5644C65.3194 18.8668 64.9738 19.0828 64.4986 19.0828C63.7728 19.0828 63.2371 18.5039 63.2371 17.7436C63.2371 16.9832 63.7728 16.4043 64.4986 16.4043C64.9738 16.4043 65.3194 16.6203 65.5613 16.9228L66.2439 16.3179C65.8551 15.8427 65.2589 15.5144 64.4986 15.5144C63.2371 15.5144 62.2694 16.4994 62.2694 17.7436C62.2694 18.9878 63.2371 19.9727 64.4986 19.9727Z"
							fill="#606067"
						/>
						<path
							d="M68.9625 19.9727C70.2413 19.9727 71.209 18.9878 71.209 17.7436C71.209 16.4994 70.2413 15.5144 68.9625 15.5144C67.6838 15.5144 66.7161 16.4994 66.7161 17.7436C66.7161 18.9878 67.6838 19.9727 68.9625 19.9727ZM68.9625 19.0828C68.2108 19.0828 67.6838 18.5039 67.6838 17.7436C67.6838 16.9832 68.2108 16.4043 68.9625 16.4043C69.7228 16.4043 70.2326 16.9832 70.2326 17.7436C70.2326 18.5039 69.7228 19.0828 68.9625 19.0828Z"
							fill="#606067"
						/>
						<path
							d="M74.9044 19.9036H75.8548V17.3548C75.8548 17.2597 75.8462 17.1647 75.8375 17.0696C76.0363 16.6117 76.3732 16.3957 76.7793 16.3957C77.3668 16.3957 77.652 16.8536 77.652 17.4671V19.9036H78.6024V17.3548C78.6024 16.2747 78.0149 15.5144 76.9176 15.5144C76.33 15.5144 75.8116 15.7477 75.5006 16.1538C75.2327 15.765 74.8093 15.5144 74.2218 15.5144C73.8157 15.5144 73.3924 15.644 73.09 15.981V15.5835H72.1395V19.9036H73.09V17.0351C73.2628 16.629 73.6084 16.3957 74.0231 16.3957C74.6106 16.3957 74.9044 16.8536 74.9044 17.4671V19.9036Z"
							fill="#606067"
						/>
						<path
							d="M4.23292 13.4095C6.6316 13.4095 8.20133 11.9632 8.20133 9.84674C8.20133 8.10063 7.0549 6.97184 5.34407 6.21343L4.37402 5.79013C3.10412 5.24337 2.575 4.73189 2.575 3.90293C2.575 3.0387 3.35105 2.54485 4.19764 2.54485C5.09715 2.54485 5.67918 2.87996 6.31413 3.65601L7.74276 2.1921C6.80798 1.08095 5.66155 0.604736 4.23292 0.604736C2.32808 0.604736 0.511424 1.9099 0.511424 3.92057C0.511424 5.56085 1.44621 6.77783 3.31577 7.60679L4.30347 8.03008C5.55572 8.57684 6.13776 9.08833 6.13776 10.0231C6.13776 10.9226 5.41462 11.4694 4.19764 11.4694C3.12176 11.4694 2.13407 10.7992 1.55203 9.9702L-6.10352e-05 11.2754C0.793622 12.5453 2.32808 13.4095 4.23292 13.4095Z"
							fill="#606067"
						/>
						<path
							d="M9.56842 13.2684H11.7555L13.0606 10.4817H18.3166L19.6394 13.2684H21.8264L15.6886 0.604736L9.56842 13.2684ZM13.9072 8.7003L15.6886 4.9259L17.47 8.7003H13.9072Z"
							fill="#606067"
						/>
						<path
							d="M29.4178 13.4095C31.5519 13.4095 33.4038 12.6334 34.3386 11.5576V5.94887H29.647L28.7828 7.88898H32.3103V10.6228C31.6753 11.099 30.6877 11.4341 29.4178 11.4341C26.9309 11.4341 25.0966 9.49399 25.0966 7.00711C25.0966 4.52024 26.9309 2.58013 29.4178 2.58013C30.8817 2.58013 31.9223 3.10925 32.7512 4.04403L34.268 2.7565C33.1922 1.46897 31.4461 0.604736 29.4178 0.604736C25.855 0.604736 23.0154 3.40908 23.0154 7.00711C23.0154 10.6051 25.855 13.4095 29.4178 13.4095Z"
							fill="#606067"
						/>
						<path d="M37.9749 13.2683H40.0208V0.745728H37.9749V13.2683Z" fill="#606067" />
						<path
							d="M44.183 13.2683H46.2289V7.94179H47.1108L51.185 13.2683H53.6543L49.4213 7.80069C51.3085 7.32448 52.1904 5.86058 52.1904 4.34376C52.1904 2.22727 50.5854 0.745728 48.2749 0.745728H44.183V13.2683ZM46.2289 6.16041V2.63293H48.0985C49.4213 2.63293 50.1268 3.30315 50.1268 4.41431C50.1268 5.47255 49.4213 6.16041 48.0985 6.16041H46.2289Z"
							fill="#606067"
						/>
						<path
							d="M75.1796 13.4094L80.9999 0.745728H78.7247L75.1796 8.71783L71.6345 0.745728H69.3593L75.1796 13.4094Z"
							fill="#606067"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M63.4185 13.2121C62.9051 13.341 62.3678 13.4094 61.8145 13.4094C58.1874 13.4094 55.2471 10.469 55.2471 6.84196C55.2471 3.21487 58.1874 0.274536 61.8145 0.274536C65.4416 0.274536 68.3819 3.21487 68.3819 6.84196C68.3819 7.52059 68.279 8.17519 68.0879 8.79098C67.6756 8.12435 67.0316 7.61624 66.2682 7.37915C66.2892 7.20308 66.3 7.02387 66.3 6.84213C66.3 4.36485 64.2917 2.35662 61.8145 2.35662C59.3372 2.35662 57.329 4.36485 57.329 6.84213C57.329 9.31941 59.3372 11.3276 61.8145 11.3276C61.9131 11.3276 62.011 11.3245 62.1081 11.3182C62.3038 12.0973 62.7779 12.7659 63.4185 13.2121Z"
							fill="#606067"
						/>
						<circle cx="65.2931" cy="10.5156" r="2.07403" fill="#606067" />
					</svg>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
