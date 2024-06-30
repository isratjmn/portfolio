import React, { useEffect, useState } from "react";
import axios from "axios";

const SkillsTable = () => {
	const [skillsData, setSkillsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/skills");
				setSkillsData(response.data);
			} catch (error) {
				console.error("Error fetching skills data", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="container mx-auto p-3">
			<div className="overflow-x-auto shadow-md rounded-lg">
				<table className="min-w-full bg-white">
					<thead className="bg-gray-200">
						<tr>
							<th className="text-left py-3 px-4">SL No.</th>
							<th className="text-left py-3 px-4">Title</th>
							<th className="text-left py-3 px-4">Image</th>
						</tr>
					</thead>
					<tbody>
						{skillsData.map((item, index) => (
							<tr
								key={index}
								className="border-b border-gray-200"
							>
								<td className="py-3 px-4">{index + 1}</td>
								<td className="py-3 px-4">{item.title}</td>
								<td className="py-3 px-4">
									<img
										src={item.image}
										alt={item.title}
										className="h-10 w-10 object-cover rounded-full"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SkillsTable;
