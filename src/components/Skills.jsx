/* import React from "react";
import { skills } from "../data";
import "./Skills.css";

const Skills = () => {
	return (
		<div className="skills-section">
			{skills.map((skill) => (
				<div key={skill.id} className="skill-item">
					<img
						src={skill.image}
						alt={skill.title}
						className="skill-image"
					/>
					<h3 className="skill-title">{skill.title}</h3>
				</div>
			))}
		</div>
	);
};

export default Skills;
 */

import React, { useEffect } from "react";
import { skills } from "../data";
import "./Skills.css";

const Skills = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			const skillsSections = document.querySelectorAll(".skills-section");
			skillsSections.forEach((section) => {
				section.style.animation = "none";
			});
		}, 20000); 

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="skills-wrapper">
			<div className="skills-section row1">
				{skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
					<div key={skill.id} className="skill-item">
						<img
							src={skill.image}
							alt={skill.title}
							className="skill-image"
						/>
						<h3 className="skill-title">{skill.title}</h3>
					</div>
				))}
			</div>
			<div className="skills-section row2">
				{skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
					<div key={skill.id} className="skill-item">
						<img
							src={skill.image}
							alt={skill.title}
							className="skill-image"
						/>
						<h3 className="skill-title">{skill.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
