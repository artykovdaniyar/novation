import React from "react";
import { css } from "@emotion/css";

const inputStyle = css`
	input[type="range"] {
		-webkit-appearance: none;
		width: 100%;
		height: 6px;
		// margin: 10px 0;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 5px;
		background: #e8e8e8;
		background-image: linear-gradient(var(--primary-color), var(--primary-color));
		background-size: 0% 100%;
		background-repeat: no-repeat;
	}

	/* Input Thumb */
	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		background: var(--theme-color);
		border-radius: 50%;
		border: 3px solid var(--primary-color);
		cursor: ew-resize;
		transition: background 0.3s ease-in-out;
	}

	input[type="range"]::-moz-range-thumb {
		-webkit-appearance: none;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: #ff4500;
		cursor: ew-resize;
		box-shadow: 0 0 2px 0 #555;
		transition: background 0.3s ease-in-out;
	}

	input[type="range"]::-ms-thumb {
		-webkit-appearance: none;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background: #ff4500;
		cursor: ew-resize;
		box-shadow: 0 0 2px 0 #555;
		transition: background 0.3s ease-in-out;
	}

	input[type="range"]::-webkit-slider-thumb:hover {
		background: var(--primary-color);
	}

	input[type="range"]::-moz-range-thumb:hover {
		background: var(--primary-color);
	}

	input[type="range"]::-ms-thumb:hover {
		background: var(--primary-color);
	}

	/* Input Track */
	input[type="range"]::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
	}

	input[type="range"]::-moz-range-track {
		-webkit-appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
	}

	input[type="range"]::-ms-track {
		-webkit-appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
	}
`;

const InputRange = ({ max, min, step, value, fn }) => {
	const handleInputChange = (e) => {
		let target = e.target;
		const min = target.min;
		const max = target.max;
		const val = target.value;
		target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
		fn(e.target.value);
	};
	return (
		<div className={inputStyle}>
			<input
				type="range"
				max={max}
				min={min}
				step={step}
				value={value}
				onInput={(e) => handleInputChange(e)}
			/>
		</div>
	);
};

export default InputRange;
