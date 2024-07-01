import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEditOff } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SkillsTable = () => {
	const [axiosSecure] = useAxios();
	const [skillsData, setSkillsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosSecure.get("/api/skills");
				setSkillsData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [axiosSecure]);

	const handleDelete = async (id) => {
		try {
			const response = await axiosSecure.delete(`/api/skills/${id}`);
			if (response.status === 200) {
				setSkillsData((prevData) =>
					prevData.filter((item) => item._id !== id)
				);
				toast.success("Skill deleted successfully!");
			} else {
				throw new Error("Failed to Delete Skill Item");
			}
		} catch (error) {
			toast.success("Error Deleting Skill Item", error);
		}
	};

	if (loading)
		return (
			<div className="flex items-start justify-center h-screen">
				<RotateLoader color="#F6CFFC" loading={loading} size={13} />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className=" mx-auto lg:pr-10 md:pl-3 lg:pl-5">
			<ToastContainer />
			<div className="overflow-x-auto shadow-md rounded-lg">
				<table className="min-w-full bg-white">
					<thead className="bg-gray-200 text-[14px]">
						<tr>
							<th className="text-left py-3 px-4">SL No.</th>
							<th className="text-left py-3 px-4">Image</th>
							<th className="text-left py-3 px-4">Title</th>
							<th className="text-left py-3 px-4 text-[14px]">
								Actions
							</th>
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
										className="h-12 w-12 object-cover rounded-lg"
									/>
								</td>
								<td className="py-3 px-4">{item.title}</td>
								<td className="py-3 px-4 flex gap-2">
									<button
										onClick={() => handleEdit(item.id)}
										className="flex items-center justify-center text-blue-700 bg-blue-100 border border-blue-300 hover:bg-blue-200 rounded p-2 text-lg"
									>
										<TbEditOff className="text-xl" />
									</button>
									<button
										onClick={() => handleDelete(item._id)}
										className="flex items-center justify-center text-red-700 bg-red-100 border border-red-300 hover:bg-red-200 rounded p-2"
									>
										<RiDeleteBin6Line className="text-xl" />
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

export default SkillsTable;
