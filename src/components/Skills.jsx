import React from "react";
import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
	return (
		<>
			{skills.map(({ title, percentage }, index) => {
				return (
					<div className="progressBox" key={index}>
						<div className="progressCircle">
							<CircularProgressbar
								strokeWidth={7.5}
								text={`${percentage}%`}
								value={percentage}
							/>
						</div>
						<h3 className="skillsTitle">{title}</h3>
					</div>
				);
			})}
		</>
	);
};

export default Skills;
