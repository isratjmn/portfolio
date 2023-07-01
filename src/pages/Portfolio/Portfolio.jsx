import React from "react";

const Portfolio = () => {
	return (
		<section className="portfolio section">
			<h2 className="sectionTitle">
				My
				<span> Portfolio</span>
			</h2>
			<div className="portfolioContainer grid">
				<article className="prtfolioItem">
					<div className="portfolioItem-img"></div>
					<h3>this is a Portfolio item Title</h3>
                    <a className="btn" href="https://github.com/">Github</a>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
