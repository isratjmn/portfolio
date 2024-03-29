import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import PortfolioImg1 from "../../assets/JazzYogaCamp.png";
import PortfolioImg2 from "../../assets/TQuestHome.png";
import PortfolioImg3 from "../../assets/FlavorFusion.png";
import PortfolioImg4 from "../../assets/WorkHive.png";
import PortfolioImg5 from "../../assets/legalsolution.png";
import PortfolioImg6 from "../../assets/book-store.webp";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLink } from "react-icons/fa";
import ParticlesContainer from "../../components/ParticlesContainer";
import { RingLoader } from "react-spinners";

const portfolio = [
	{
		id: 1,
		img: PortfolioImg1,
		title: "Summer Yoga Camp | Nurture Mind, Body, and Spirit",
		clientGithub: "https://github.com/isratjmn/jazz-yoga-camp-client",
		serverGithub: "https://github.com/isratjmn/jazz-yoga-camp-server",
		demo: "https://zen-vibe-camp.web.app/",
	},
	{
		id: 2,
		img: PortfolioImg2,
		title: "ToyQuest | The Ultimate Destination for Toys and Playtime",
		clientGithub: "https://github.com/isratjmn/toy-quest-client",
		serverGithub: "https://github.com/isratjmn/toy-quest-server",
		demo: "https://toy-quest.web.app/",
	},
	{
		id: 3,
		img: PortfolioImg3,
		title: "FlavorFusion | Culinary Delights and Exquisite Dining",
		clientGithub: "https://github.com/isratjmn/flavor-fusion",
		serverGithub: "https://github.com/isratjmn/flavor-fusion-server",
		demo: "https://flavor-fusion-3b6cc.web.app/",
	},
	{
		id: 4,
		img: PortfolioImg4,
		title: "WorkHive | Empowering Productivity and Connectivity",
		clientGithub: "https://github.com/isratjmn/peak-career",
		demo: "https://jocular-douhua.netlify.app/",
	},
	{
		id: 5,
		img: PortfolioImg5,
		title: "G3Architects | Innovative Design Solutions",
		clientGithub: "https://github.com/isratjmn/g3_architects",
		demo: "https://bright-bublanina.netlify.app/",
	},
	{
		id: 6,
		img: PortfolioImg6,
		title: "BookStore | Curated Collections for Book Lovers",
		clientGithub: "https://github.com/isratjmn/g3_architects",
		demo: "https://bright-bublanina.netlify.app/",
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
					<span> Portfolio</span>
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
								demo,
							}) => {
								return (
									<article key={id} className="portfolioItem">
										<div className="card">
											<div className="portfolioItem-img">
												<img
													className="portfolioItem-img"
													src={img}
													alt="portfolio1"
												/>
											</div>
										</div>
										<h3>{title}</h3>
										<div className="links">
											<a
												style={{ fontSize: "20px" }}
												href={clientGithub}
												target="_blank"
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
														Client
													</span>
												</div>
											</a>

											<a
												style={{ fontSize: "20px" }}
												href={serverGithub}
												target="_blank"
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
														server
													</span>
												</div>
											</a>
											<a
												style={{ fontSize: "20px" }}
												href={demo}
												target="_blank"
											>
												<div>
													<FaLink
														style={{
															alignItems:
																"center",
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
														Live Demo
													</span>
												</div>
											</a>
										</div>
									</article>
								);
							}
						)}
					</div>
				)}
			</section>
		</>
	);
};

export default Portfolio;
