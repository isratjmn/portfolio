import React from "react";
import Profile from "../../assets/home1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";
import ParticlesContainer from "../../components/ParticlesContainer";

const Home = () => {
	return (
		<>
			<ParticlesContainer />
			<section className="home section grid">
				<img src={Profile} className="homeImg" alt="home" />
				<div className="homeContent">
					<div className="homeData">
						<h1 className="homeTitle">
							<span>I'm Israt Moonmoon.</span> <br />
							Mern-Stack Developer.
						</h1>
						<p className="homeDescription">
							Ante malesuada netus ut auctor viverra nostra fusce
							arcu, molestie volutpat vitae hendrerit nam duis
							maecenas odio, aptent magnis sociosqu primis
							eleifend magna curabitur. Erat nascetur gravida per
							consequat nulla parturient sollicitudin, nunc
							blandit accumsan conubia suspendisse mattis nullam
							mus, risus facilisi mi lectus sapien commodo.
						</p>
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
