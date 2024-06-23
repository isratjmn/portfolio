import React from "react";
import { personalInfo } from "../data";

const Info = () => {
	return (
		<div>
			{personalInfo.map(({ title, description }, index) => {
				return (
					<li className="infoItem" key={index}>
						<span className="infoTitle">{title}</span>
						<span className="infoDesription">{description}</span>
					</li>
				);
			})}
		</div>
	);
};

export default Info;
