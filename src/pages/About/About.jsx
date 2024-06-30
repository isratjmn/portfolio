import Info from "../../components/Info";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItems from "../../components/ResumeItems";
import "./About.css";

const About = () => {
	return (
		<main className="section container">
			<section className="about">
				<h2 className="sectionTitle">
					About <span>Me</span>
				</h2>
				<h2 className="sectionSubTitle"> Personal Info</h2>
				<div className="aboutContainer flex ">
					<div className="aboutInfo">
						<ul className="infoList grid">
							<Info />
						</ul>
					</div>
					<div className="stats grid">{/* <Statss /> */}</div>
				</div>
			</section>
			<div className="separator"></div>
			<section className="skills my-8">
				<h3 className="sectionSubTitle subtitleCenter text-2xl font-bold mb-4">
					My Skills
				</h3>
				<div className="skillsContainer flex justify-center">
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
