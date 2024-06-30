import React, { useState, useEffect } from "react";
import axios from "axios";

const ResumeEntries = () => {
	const [resumeData, setResumeData] = useState([]);

	useEffect(() => {
		const fetchResumeData = async () => {
			try {
				const response = await axios.get("/api/resume");
				setResumeData(response.data);
			} catch (error) {
				console.error("Error fetching resume data", error);
			}
		};
		fetchResumeData();
	}, []);

	return (
		<div>
			<div className="container mx-auto p-3 text-[12px]">
				<table className="min-w-full bg-white rounded-lg shadow-2xl">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b">SL No.</th>
							<th className="py-2 px-4 border-b">Start Year</th>
							<th className="py-2 px-4 border-b">End Year</th>
							<th className="py-2 px-4 border-b">Title</th>
							<th className="py-2 px-4 border-b">Description</th>
						</tr>
					</thead>
					<tbody>
						{resumeData.map((entry, index) => (
							<tr key={index}>
								<td className="py-3 px-4">{index + 1}</td>
								<td className="py-2 px-4 border-b">
									{new Date(
										entry.startYear
									).toLocaleDateString()}
								</td>
								<td className="py-2 px-4 border-b">
									{new Date(
										entry.endYear
									).toLocaleDateString()}
								</td>
								<td className="py-2 px-4 border-b">
									{entry.title}
								</td>
								<td className="py-2 px-4 border-b">
									{entry.desc}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ResumeEntries;
