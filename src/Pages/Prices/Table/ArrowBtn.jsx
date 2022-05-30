import React from "react";
import styled from "@emotion/styled";
import unscrollBody from "../../../Helpers/unscrollBody";

const Button = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	color: var(--primary-color);
	line-height: 1.2;
	font-size: 17px;
	font-weight: 600;
	.icon {
		position: absolute;
		right: -5px;
		transform: translateX(100%);
		transition: 0.3s right ease;
	}
	&:hover {
		.icon {
			right: -10px;
		}
	}
	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`;
const ArrowBtn = ({ children, index, setState }) => {
	const onClickHandler = (index) => {
		setState(index);
		unscrollBody();
	};
	return (
		<Button onClick={() => onClickHandler(index)}>
			{children}
			<svg
				className="icon"
				xmlns="http://www.w3.org/2000/svg"
				width="9"
				height="9"
				viewBox="0 0 9 9"
				fill="none"
			>
				<path
					d="M4.55575 0L9 4.30703V4.7084L4.55575 9L3.29735 7.78045L5.83009 5.3259L4.73097 5.37221H0V3.61235H4.73097L5.79823 3.65866L3.29735 1.23499L4.55575 0Z"
					fill="var(--primary-color)"
				/>
			</svg>
		</Button>
	);
};

export default ArrowBtn;
