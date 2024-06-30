import React, { useState, useEffect } from "react";
import PortfolioImg1 from "../../assets/JazzYogaCamp.png";
import PortfolioImg2 from "../../assets/TQuestHome.png";
import PortfolioImg3 from "../../assets/FlavorFusion.png";
import PortfolioImg4 from "../../assets/WorkHive.png";
import PortfolioImg5 from "../../assets/TrekTrax-Travel-Buddy.png";
import PortfolioImg6 from "../../assets/SpectraSync-Inventory.png";
import PortfolioImg7 from "../../assets/Multipage-Education-Website.png";
import PortfolioImg8 from "../../assets/AidNAssist-Home.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLink } from "react-icons/fa";
import ParticlesContainer from "../../components/ParticlesContainer";
import { RingLoader } from "react-spinners";
import "./Portfolio.css";

const portfolio = [
	{
		id: 1,
		img: PortfolioImg5,
		title: "Full-Stack Travel Buddy Matching App | Harmonize Your Travels and Soul",
		clientGithub: "https://github.com/isratjmn/traxtrekbuddy-client",
		serverGithub: "https://github.com/isratjmn/traxtrekbuddy-server",
		live_link: "https://traxtrek-client.vercel.app/",
		technologies: [
			"Next.JS",
			"Redux",
			"Node.JS",
			"Express",
			"Typescript",
			"Tailwind",
			"PostgresQL",
			"Prisma",
		],
	},
	{
		id: 2,
		img: PortfolioImg6,
		title: "Full-Stack SpectraSync Eye Glasses | Secure and Efficient Eye Class Inventory",
		clientGithub: "https://github.com/isratjmn/spectrasync-client",
		serverGithub: "https://github.com/isratjmn/spectrasync-server",
		live_link: "https://spectrasync-glasses.netlify.app/",
		technologies: [
			"React.js",
			"Redux",
			"Tailwind",
			"Mongoose",
			"Typescript.js",
			"MongoDB",
		],
	},
	{
		id: 3,
		img: PortfolioImg7,
		title: "Front-End EduNexus Website | Bridging Knowledge Gaps",
		clientGithub: "https://github.com/isratjmn/educational_website",
		demo: "https://isratjmn.github.io/educational_website",
		technologies: ["HTML", "CSS", "Javascript.js"],
	},
	{
		id: 4,
		img: PortfolioImg8,
		title: "AidNAsist Full-Stack donation App | Connecting Generosity with Need",
		clientGithub: "https://github.com/isratjmn/aid-n-assist",
		live_link: "https://aid-n-assist-zeta.vercel.app",
		technologies: [
			"React.js",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Mongoose",
		],
	},
	{
		id: 5,
		img: PortfolioImg1,
		title: "Mern-Stack Summer Yoga Camp App | Nurture Mind, Body, and Spirit",
		clientGithub: "https://github.com/isratjmn/jazz-yoga-camp-client",
		serverGithub: "https://github.com/isratjmn/jazz-yoga-camp-server",
		live_link: "https://zen-vibe-camp.web.app/",
		technologies: [
			"Tailwind",
			"React.js",
			"Next.js",
			"Node.js",
			"Mongoose",
			"MongoDB",
			"Express.js",
			"Stripe",
		],
	},
	{
		id: 6,
		img: PortfolioImg2,
		title: "Mern-Stack ToyQuest | The Ultimate Destination for Toys and Playtime",
		clientGithub: "https://github.com/isratjmn/toy-quest-client",
		serverGithub: "https://github.com/isratjmn/toy-quest-server",
		live_link: "https://toy-quest.web.app/",
		technologies: [
			"Tailwind",
			"Firebase",
			"React.js",
			"Express.js",
			"Node.js",
			"MongoDB",
		],
	},
	{
		id: 7,
		img: PortfolioImg3,
		title: "FlavorFusion | Culinary Delights and Exquisite Dining",
		clientGithub: "https://github.com/isratjmn/flavor-fusion",
		serverGithub: "https://github.com/isratjmn/flavor-fusion-server",
		live_link: "https://flavor-fusion-3b6cc.web.app/",
		technologies: [
			"Tailwind",
			"React.js",
			"Node.js",
			"MongoDB",
			"Express.js",
			"Firebase",
		],
	},
	{
		id: 8,
		img: PortfolioImg4,
		title: "WorkHive | Empowering Productivity and Connectivity",
		clientGithub: "https://github.com/isratjmn/peak-career",
		live_link: "https://jocular-douhua.netlify.app/",
		technologies: ["HTML", "CSS", "JavaScript", "React.js"],
	},
];

const Portfolio = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<ParticlesContainer />
			<section className="section container">
				<h2 className="sectionTitle">
					My
					<span> Recent Projects</span>
				</h2>

				{loading ? (
					<div className="loader">
						<RingLoader color="#0d47a1" size={100} />
					</div>
				) : (
					<div className="portfolioContainer grid">
						{portfolio.map(
							({
								id,
								img,
								title,
								clientGithub,
								serverGithub,
								live_link,
								technologies,
							}) => (
								<article
									key={id}
									className="portfolioItem mx-auto"
								>
									<div className="card mx-auto">
										<div className="portfolioItem-img  mx-auto">
											<img
												className="portfolioItem-img  mx-auto"
												src={img}
												alt="portfolio1"
											/>
										</div>
									</div>
									<h3 className="flex items-start justify-start">
										{title}
									</h3>
									<div className="links">
										<a
											style={{ fontSize: "20px" }}
											href={clientGithub}
											target="_blank"
											rel="noopener noreferrer"
										>
											<div
												style={{
													display: "flex",
													justifyContent:
														"flex-start",
													alignItems: "center",
												}}
											>
												<TbBrandGithubFilled
													style={{
														alignItems: "center",
														marginRight: "3px",
													}}
													className="demo-icon"
												/>
												<span
													style={{
														fontSize: "16px",
														fontWeight: "700",
													}}
												>
													Client
												</span>
											</div>
										</a>

										{serverGithub && (
											<a
												style={{ fontSize: "20px" }}
												href={serverGithub}
												target="_blank"
												rel="noopener noreferrer"
											>
												<div
													style={{
														display: "flex",
														alignItems: "center",
													}}
												>
													<TbBrandGithubFilled
														style={{
															alignItems:
																"center",
															marginRight: "3px",
														}}
														className="demo-icon"
													/>
													<span
														style={{
															fontSize: "16px",
															fontWeight: "700",
														}}
													>
														Server
													</span>
												</div>
											</a>
										)}

										<a
											style={{ fontSize: "20px" }}
											href={live_link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<div className="flex items-center justify-center gap-1">
												<FaLink
													style={{
														alignItems: "center",
														marginRight: "3px",
														fontSize: "15px",
													}}
													className="demo-icon"
												/>
												<span
													style={{
														fontSize: "15px",
														fontWeight: "700",
													}}
												>
													Live Link
												</span>
											</div>
										</a>
									</div>
									<div className="technologies">
										<h4>Technologies Used:</h4>
										<ul>
											{technologies.map((tech, index) => (
												<li key={index}>{tech}</li>
											))}
										</ul>
									</div>
								</article>
							)
						)}
					</div>
				)}
			</section>
		
		</>
	);
};

export default Portfolio;
