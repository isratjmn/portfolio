import React from "react";
import PortfolioTable from "../../../components/PortfolioTable";

const PortfolioEntries = () => {
	return (
		<>
			<h2 className="sectionTitleMedium text-center justify-center items-center flex pt-8 text-4xl font-semibold gap-2">
				Portfolio
				<span> Entries</span>
			</h2>
			<div className="w-full lg:w-[90%] text-base">
				<PortfolioTable />
			</div>
		</>
	);
};

export default PortfolioEntries;
