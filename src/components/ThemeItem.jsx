import React from "react";

const ThemeItem = ({ color, img, changeColor }) => {
	return (
		<div>
			<img
				className="theme-img"
				src={img}
				onClick={() => {
					changeColor(color);
				}}
				alt="img"
			/>
		</div>
	);
};

export default ThemeItem;
