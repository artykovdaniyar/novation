import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/css";
import useIntersection from "../../Hooks/useIntersection";

const Blind = ({ trigerOn = "0px", duration = "0.7s" }) => {
	const blindStyle = css`
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: transparent;
		pointer-events: none;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			background: var(--theme-color);
			width: 100%;
			height: 100%;
			transition: ${duration} right ease-in;
			z-index: 1;
		}
		&.opened {
			&::before {
				right: -100%;
			}
		}
	`;

	const [opened, setOpened] = useState(false);
	const ref = useRef();
	const inViewport = useIntersection(ref, trigerOn);
	useEffect(() => {
		if (inViewport) {
			setOpened(true);
		}
	}, [inViewport]);

	return <div ref={ref} className={`${blindStyle} ${opened ? "opened" : ""}`}></div>;
};

export default Blind;
