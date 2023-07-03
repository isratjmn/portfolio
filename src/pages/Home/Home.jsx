import React from "react";
import Profile from "../../assets/home1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";
import ParticlesContainer from "../../components/ParticlesContainer";
import Resume from "../../assets/Resume.pdf";
import { FaDownload } from "react-icons/fa";

const Home = () => {
	return (
		<>
			<ParticlesContainer />
			<section className="home section grid">
				<img src={Profile} className="homeImg" alt="home" />
				<div className="homeContent">
					<div className="homeData">
						<h1 className="homeTitle">
							<span>I'm Israt Moonmoon</span> <br />
							<span
								style={{
									fontSize: "32px",
									color: "hsl(0, 0%, 50%)",
								}}
							>
								Mern-Stack Developer
							</span>
						</h1>

						<p className="homeDescription">
							As a Self-taught programmer, I have developed
							proficiency in the MERN stack and possess a solid
							understanding of JavaScript. I am deeply committed
							to continuous learning and staying updated with the
							latest industry trends. I have honed my skills in
							creating responsive user interfaces and building
							robust RESTful APIs. With this expertise, I am able
							to deliver seamless user experiences and effectively
							interact with backend services.
						</p>
						<a href={Resume} download className="button">
							Download Resume
							<span className="buttonIcon">
								<FaDownload />
							</span>
						</a>
						<Link to="/about" className="button">
							More About Me
							<span className="buttonIcon">
								<FaArrowRight />
							</span>
						</Link>
					</div>
				</div>
				<div className="colorBlock"></div>
			</section>
		</>
	);
};

export default Home;
