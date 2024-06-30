import React, { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../Hooks/UseAxios";

import { AiOutlineDelete } from "react-icons/ai";
import { LuClipboardEdit } from "react-icons/lu";

const PortfolioTable = () => {
	const [axiosSecure] = useAxios();
	const [portfolioData, setPortfolioData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchResumeData = async () => {
			try {
				const response = await axiosSecure.get("/api/portfolios");
				console.log(response);
				setPortfolioData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchResumeData();
	}, [axiosSecure]);

	const handleEdit = (id) => {
		console.log("Edit portfolio item with id:", id);
	};

	const handleDelete = async (id) => {
		try {
			await axios.delete(`/api/portfolios/${id}`);
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
		<div className="mx-auto text-[12px]">
			<div className="overflow-x-auto shadow-md rounded-lg">
				<table className="min-w-full bg-white">
					<thead className="bg-gray-200">
						<tr>
							<th className="text-left py-3 px-4 text-[16px]">
								SL No.
							</th>
							<th className="text-left py-3 px-4 text-[16px]">
								Title
							</th>
							<th className="text-left py-3 px-4 text-[16px]">
								Client Code URL
							</th>
							<th className="text-left py-3 px-4 text-[16px]">
								Server Code URL
							</th>
							<th className="text-left py-3 px-4 text-[16px]">
								Live Link
							</th>
							<th className="text-left py-3 px-4 text-[16px]">
								Technologies
							</th>
							<th className="text-left py-3 px-4 text-[16px]">
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
								<td className="py-3 px-4 text-[14px]">
									{index + 1}
								</td>
								<td className="py-3 px-4 text-[14px]">
									{item.title}
								</td>
								<td className="py-3 px-4 text-[14px]">
									{item.clientGithub}
								</td>
								<td className="py-3 px-4 text-[14px]">
									{item.serverGithub}
								</td>
								<td className="py-3 px-4 text-[14px]">
									{item.live_link}
								</td>
								<td className="py-3 px-4 text-[14px]">
									{item.technologies.join(", ")}
								</td>
								<td className="py-3 px-4 flex gap-2">
									<button
										onClick={() => handleEdit(item?.id)}
										className="flex items-center justify-center text-white border-2 bg-blue-400 hover:bg-blue-600 rounded p-2 text-lg"
									>
										<LuClipboardEdit className="text-lg" />
									</button>

									<button
										onClick={() => handleDelete(item?.id)}
										className="flex items-center justify-center text-white bg-red-400 hover:bg-red-600 rounded p-2"
									>
										<AiOutlineDelete className="text-xl" />
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
