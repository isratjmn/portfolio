import React from "react";
import CountUp from "react-countup";
import { stats } from "../data";
import parse from "html-react-parser";
import { FaPlus } from "react-icons/fa";

const Statss = () => {
	return (
		<>
			{stats.map(({ no, title }, index) => {
				return (
					<div className="statsBox" key={index}>
						<CountUp
							start={0}
							end={no}
							duration={2.5}
							className="statsNo"
						/>
						<FaPlus />
						<p className="statsTitle">{parse(title)}</p>
					</div>
				);
			})}
		</>
	);
};

export default Statss;
