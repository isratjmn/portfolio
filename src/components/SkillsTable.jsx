import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEditOff } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isOpen, onClose, onSave, skill, setSkill }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
			<div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transform transition-transform duration-300 ease-in-out">
				<h2 className="text-2xl font-semibold text-left mb-6">
					Update Skill
				</h2>
				<div className="flex flex-col gap-6">
					<div className="flex flex-col">
						<label
							htmlFor="title"
							className="mb-2 text-lg text-gray-700"
						>
							Title:
						</label>
						<input
							type="text"
							id="title"
							placeholder="Title"
							value={skill.title}
							onChange={(e) =>
								setSkill({
									...skill,
									title: e.target.value,
								})
							}
							className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlFor="image"
							className="mb-2 text-lg text-gray-700"
						>
							Image URL:
						</label>
						<input
							type="text"
							id="image"
							placeholder="Image URL"
							value={skill.image}
							onChange={(e) =>
								setSkill({
									...skill,
									image: e.target.value,
								})
							}
							className="p-3 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>
					<div className="flex gap-3 mt-2">
						<button
							onClick={onSave}
							className="px-6 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300 ease-in-out"
						>
							Update
						</button>
						<button
							onClick={onClose}
							className="px-6 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300 ease-in-out"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const SkillsTable = () => {
	const [axiosSecure] = useAxios();
	const [skillsData, setSkillsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editMode, setEditMode] = useState(false);
	const [currentSkill, setCurrentSkill] = useState({
		_id: "",
		title: "",
		image: "",
	});

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

	const handleEdit = (skill) => {
		setCurrentSkill(skill);
		setEditMode(true);
	};

	const handleUpdate = async () => {
		try {
			const { _id, ...updatedSkill } = currentSkill;
			const response = await axiosSecure.put(
				`/api/skills/${_id}`,
				updatedSkill
			);
			if (response.status === 200) {
				setSkillsData((prevData) =>
					prevData.map((item) =>
						item._id === _id ? { ...item, ...updatedSkill } : item
					)
				);
				toast.success("Skill updated successfully!");
				setEditMode(false);
				setCurrentSkill({ _id: "", title: "", image: "" });
			} else {
				throw new Error("Failed to update Skill Item");
			}
		} catch (error) {
			toast.error("Error updating Skill Item");
		}
	};

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
			toast.error("Error Deleting Skill Item");
		}
	};

	if (loading)
		return (
			<div className="flex items-start justify-center h-screen ">
				<RotateLoader color="#F6CFFC" loading={loading} size={12} />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="mx-auto lg:pr-10 md:pl-3 lg:pl-5">
			<ToastContainer />
			<Modal
				isOpen={editMode}
				onClose={() => setEditMode(false)}
				onSave={handleUpdate}
				skill={currentSkill}
				setSkill={setCurrentSkill}
			/>
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
								key={item._id}
								className="border-b border-gray-200"
							>
								<td className="py-3 px-4">{index + 1}</td>
								<td className="py-3 px-4">
									<img
										src={item.image}
										alt={item.title}
										className="h-10 object-cover rounded-lg"
									/>
								</td>
								<td className="py-3 px-4">{item.title}</td>
								<td className="py-3 px-4 flex gap-2">
									<button
										onClick={() =>
											handleEdit({
												_id: item._id,
												title: item.title,
												image: item.image,
											})
										}
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
