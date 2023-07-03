import React from "react";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import Statss from "../../components/Statss";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItems from "../../components/ResumeItems";
import ParticlesContainer from "../../components/ParticlesContainer";
import "./About.css";

const About = () => {
	return (
		<main className="section container">
			<section className="about">
				<h2 className="sectionTitle">
					About <span>Me</span>
				</h2>
				<h2 className="sectionSubTitle"> Personal Info</h2>
				<div className="aboutContainer grid">
					<div className="aboutInfo">
						<ul className="infoList grid">
							<Info />
						</ul>

					</div>
					<div className="stats grid">
						<Statss />
					</div>
				</div>
			</section>

			<div className="separator"></div>

			<section className="skills">
				<h3 className="sectionSubTitle subtitleCenter">My Skills</h3>
				<div className="skillsContainer grid">
					<Skills />
				</div>
			</section>

			<div className="separator"></div>

			<section className="resume">
				<h3 className="sectionSubTitle subtitleCenter">
					Experience & Education
				</h3>
				<div className="resumeContainer grid">
					<div className="resumeData">
						{resume.map((val) => {
							if (val.category === "experience") {
								return <ResumeItems key={val.id} {...val} />;
							}
						})}
					</div>
					<div className="resumeData">
						{resume.map((val) => {
							if (val.category === "education") {
								return <ResumeItems key={val.id} {...val} />;
							}
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
