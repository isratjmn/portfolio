import React from "react";
import { stats } from "../data";
import parse from 'html-react-parser';

const Statss = () => {
	return (
		<>
			{stats.map(({ no, title }, index) => {
				return (
					<div className="statsBox" key={index}>
						<h3 className="statsNo">{no}</h3>
						<p className="statsTitle">{parse(title)}</p>
					</div>
				);
			})}
		</>
	);
};

export default Statss;
