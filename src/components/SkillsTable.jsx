import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import useAxios from "../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";

const SkillsTable = () => {
	const [axiosSecure] = useAxios();
	const [skillsData, setSkillsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosSecure.get("/api/skills");
				console.log(response);
				setSkillsData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [axiosSecure]);

	if (loading)
		return (
			<div className="flex items-start justify-center h-screen">
				{" "}
				<RotateLoader color="#3498db" loading={loading} size={13} />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="container mx-auto p-3">
			<div className="overflow-x-auto shadow-md rounded-lg">
				<table className="min-w-full bg-white">
					<thead className="bg-gray-200">
						<tr>
							<th className="text-left py-3 px-4">SL No.</th>
							<th className="text-left py-3 px-4">Image</th>
							<th className="text-left py-3 px-4">Title</th>
						</tr>
					</thead>
					<tbody>
						{skillsData.map((item, index) => (
							<tr
								key={index}
								className="border-b border-gray-200"
							>
								<td className="py-3 px-4">{index + 1}</td>
								<td className="py-3 px-4">
									<img
										src={item.image}
										alt={item.title}
										className="h-20 w-20 object-cover rounded-lg"
									/>
								</td>
								<td className="py-3 px-4">{item.title}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SkillsTable;
