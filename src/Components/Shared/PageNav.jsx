import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const pageNavStyle = css`
	.page-nav__list {
		display: flex;
		padding: 50px 0 10px;
	}
	.page-nav__icon {
		margin: 0 10px;
	}
	.page-nav__current-page {
		color: var(--gray-color);
	}
	.page-nav__link:hover {
		text-decoration: underline;
	}
`;

const PageNav = ({ prevPage = false, curPage = "", className = "" }) => {
	return (
		<nav className={`${pageNavStyle} ${className}`}>
			<ul className="page-nav__list">
				<li className="page-nav__item">
					<Link className="page-nav__link" to="/">
						Главное
					</Link>
				</li>
				{prevPage ? (
					<>
						<li>
							<svg className="page-nav__icon" width="9" height="9" viewBox="0 0 9 9" fill="none">
								<path
									d="M4.55575 0L9 4.30703V4.7084L4.55575 9L3.29735 7.78045L5.83009 5.3259L4.73097 5.37221H0V3.61235H4.73097L5.79823 3.65866L3.29735 1.23499L4.55575 0Z"
									fill="var(--primary-color)"
								/>
							</svg>
						</li>
						<li className="page-nav__item">
							<Link className="page-nav__link" to={prevPage.path}>
								{prevPage.name}
							</Link>
						</li>
					</>
				) : null}
				<li className="page-nav__item">
					<svg className="page-nav__icon" width="9" height="9" viewBox="0 0 9 9" fill="none">
						<path
							d="M4.55575 0L9 4.30703V4.7084L4.55575 9L3.29735 7.78045L5.83009 5.3259L4.73097 5.37221H0V3.61235H4.73097L5.79823 3.65866L3.29735 1.23499L4.55575 0Z"
							fill="var(--primary-color)"
						/>
					</svg>
				</li>
				<li className="page-nav__item page-nav__current-page">{curPage}</li>
			</ul>
		</nav>
	);
};

export default PageNav;
