import React, { useEffect, useState } from "react";
import Profile from "../../assets/home1.jpg";
import ParticlesContainer from "../../components/ParticlesContainer";
import Resume from "../../assets/Resume.pdf";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Rings } from  'react-loader-spinner' 

import "./Home.css";

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<ParticlesContainer />
			{loading ? (
				<div className="spinnerContainer">
					<Rings
						
						color="#6a0dad"
						height={180}
						width={180}
						ariaLabel='loading'
					/>
				</div>
			) : (
				<section className="home section grid">
					<img src={Profile} className="homeImg" alt="home" />
					<div className="homeContent">
						<div className="homeData">
							<h1 className="homeTitle">
								<span>I'm Israt Moonmoon</span> <br />
								<TypeAnimation
									sequence={[
										"Mern-Stack Developer",
										1000,
										"Front-End Developer",
										1000,
										"React Developer",
										1000,
										"Wordpress Developer",
										1000,
									]}
									speed={50}
									style={{
										fontSize: "32px",
										color: "hsl(0, 0%, 50%)",
									}}
									repeat={Infinity}
								/>
							</h1>

							<p className="homeDescription">
								As a Self-taught programmer, I have developed
								proficiency in the MERN stack and possess a
								solid understanding of JavaScript. I am deeply
								committed to continuous learning and staying
								updated with the latest industry trends. I have
								honed my skills in creating responsive user
								interfaces and building robust RESTful APIs.
								With this expertise, I am able to deliver
								seamless user experiences and effectively
								interact with backend services.
							</p>
							<a href={Resume} download className="button">
								Download Resume
								<span className="buttonIcon">
									<FaDownload />
								</span>
							</a>
						</div>
					</div>
					<div className="colorBlock"></div>
				</section>
			)}
		</>
	);
};

export default Home;
