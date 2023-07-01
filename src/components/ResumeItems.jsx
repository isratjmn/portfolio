import React from "react";
import parse from "html-react-parser";

const ResumeItems = ({ icon, year, title, desc }) => {
	return (
		<>
			<div className="resumeItem">
				<div className="resumeIcon">{icon}</div>
				<span className="resumeDate">{year}</span>
				<h3 className="resumeSubTitle">{parse(title)}</h3>
				<p className="resumeDesc">{desc}</p>
			</div>
		</>
	);
};

export default ResumeItems;
