import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const PortfolioTable = () => {
	const [portfolioData, setPortfolioData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/portfolio");
				setPortfolioData(response.data);
			} catch (error) {
				console.error("Error fetching portfolio data", error);
			}
		};
		fetchData();
	}, []);
	const handleEdit = (id) => {
		console.log("Edit portfolio item with id:", id);
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete(`/api/portfolio/${id}`);
			setPortfolioData((prevData) =>
				prevData.filter((item) => item.id !== id)
			);
			alert("Portfolio item deleted successfully!");
		} catch (error) {
			console.error("Error deleting portfolio item", error);
			alert("Error deleting portfolio item");
		}
	};

	return (
		<div className="container mx-auto p-3 text-[12px]">
			<div className="overflow-x-auto shadow-md rounded-lg">
				<table className="min-w-full bg-white">
					<thead className="bg-gray-200">
						<tr>
							<th className="text-left py-3 px-4">SL No.</th>
							<th className="text-left py-3 px-4 text-[12px]">
								Title
							</th>
							<th className="text-left py-3 px-4 text-[12px]">
								Client Code URL
							</th>
							<th className="text-left py-3 px-4 text-[12px]">
								Server Code URL
							</th>
							<th className="text-left py-3 px-4 text-[12px]">
								Live Link
							</th>
							<th className="text-left py-3 px-4 text-[12px]">
								Technologies
							</th>
							<th className="text-left py-3 px-4 text-[12px]">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{portfolioData.map((item, index) => (
							<tr
								key={index}
								className="border-b border-gray-200"
							>
								<td className="py-3 px-4">{index + 1}</td>
								<td className="py-3 px-4">{item.title}</td>
								<td className="py-3 px-4">
									{item.clientGithub}
								</td>
								<td className="py-3 px-4">
									{item.serverGithub}
								</td>
								<td className="py-3 px-4">{item.live_link}</td>
								<td className="py-3 px-4">
									{item.technologies.join(", ")}
								</td>
								<td className="py-3 px-4 flex gap-2">
									<button
										onClick={() => handleEdit(item.id)}
										className="flex items-center justify-center text-blue-500 hover:text-blue-700"
									>
										<AiOutlineEdit />
										<span className="ml-1">Edit</span>
									</button>
									<button
										onClick={() => handleDelete(item.id)}
										className="flex items-center justify-center text-red-500 hover:text-red-700"
									>
										<AiOutlineDelete />
										<span className="ml-1">Delete</span>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PortfolioTable;
