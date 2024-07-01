

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import useAxios from "../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEditOff } from "react-icons/tb";
import { toast } from "react-toastify";
import ResumeModal from "./ResumeUpdateModal";

const ResumeEntries = ({ fetchData }) => {
	const [axiosSecure] = useAxios();
	const [resumeData, setResumeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editingId, setEditingId] = useState(null);

	const fetchResumeData = async () => {
		setLoading(true);
		try {
			const response = await axiosSecure.get("/api/resume");
			setResumeData(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchResumeData();
	}, [axiosSecure, fetchData]);

	const handleDelete = async (id) => {
		try {
			const response = await axiosSecure.delete(`/api/resume/${id}`);
			if (response.status === 200) {
				setResumeData((prevData) =>
					prevData.filter((item) => item._id !== id)
				);
				toast.success("Resume deleted successfully!", {
					style: {
						background: "#93C572",
						color: "#ffffff",
					},
					icon: "🚀",
				});
			} else {
				throw new Error("Failed to Delete Resume Item");
			}
		} catch (error) {
			console.error("Error deleting resume item", error);
			toast.error("Error deleting resume item", {
				style: {
					background: "#F68052",
					color: "#ffffff",
				},
			});
		}
	};

	const handleEdit = (entry) => {
		setEditingId(entry._id);
	};

	const handleUpdate = async (formData) => {
		try {
			const response = await axiosSecure.put(
				`/api/resume/${editingId}`,
				formData
			);
			if (response.status === 200) {
				const updatedResume = resumeData.map((item) =>
					item._id === editingId ? response.data : item
				);
				setResumeData(updatedResume);
				toast.success("Resume updated successfully!", {
					style: {
						background: "#93C572",
						color: "#ffffff",
					},
					icon: "🚀",
				});
				setEditingId(null);
			} else {
				throw new Error("Failed to Update Resume Item");
			}
		} catch (error) {
			console.error("Error updating resume item", error);
			toast.error("Error updating resume item", {
				style: {
					background: "#F68052",
					color: "#ffffff",
				},
			});
		}
	};

	const closeModal = () => {
		setEditingId(null);
	};

	const formatDate = (date) => {
		if (!date) {
			return "Date Not Available";
		}

		console.log("Date:", date);
		const formattedDate = format(new Date(date), "do MMMM, yyyy");
		return formattedDate;
	};

	const truncateDescription = (desc, maxLength = 60) => {
		if (desc?.length > maxLength) {
			return `${desc.substring(0, maxLength)}.....`;
		}
		return desc;
	};

	if (loading)
		return (
			<div className="flex items-start justify-center h-screen">
				<RotateLoader color="#F6CFFC" loading={loading} size={13} />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="container mx-auto p-3 text-[14px]">
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
					<thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
						<tr>
							<th className="py-3 px-6 text-left">SL No.</th>
							<th className="py-3 px-6 text-left">Title</th>
							<th className="py-3 px-6 text-left">Description</th>
							<th className="py-3 px-6 text-left">Start Date</th>
							<th className="py-3 px-6 text-left">End Date</th>
							<th className="py-3 px-6 text-left">Actions</th>
						</tr>
					</thead>
					<tbody className="text-gray-600 text-sm font-light">
						{resumeData?.map((entry, index) => (
							<tr
								key={index}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								<td className="py-3 px-6 text-left whitespace-nowrap">
									{index + 1}
								</td>
								<td className="py-3 px-6 text-left">
									{editingId === entry._id ? (
										<ResumeModal
											entry={entry}
											onSave={handleUpdate}
											onClose={closeModal}
											onRefetch={fetchResumeData} // Pass the refetch function
										/>
									) : (
										entry.title
									)}
								</td>
								<td className="py-3 px-6 text-left">
									{truncateDescription(entry?.desc)}
								</td>
								<td className="py-3 px-6 text-left">
									{formatDate(entry?.startDate)}
								</td>
								<td className="py-3 px-6 text-left">
									{formatDate(entry?.endDate)}
								</td>
								<td className="py-3 px-4 flex gap-2">
									{editingId === entry?._id ? null : (
										<>
											<button
												onClick={() =>
													handleEdit(entry)
												}
												className="flex items-center justify-center text-blue-700 bg-blue-100 border border-blue-300 hover:bg-blue-200 rounded p-2 text-lg"
											>
												<TbEditOff className="text-xl" />
											</button>
											<button
												onClick={() =>
													handleDelete(entry?._id)
												}
												className="flex items-center justify-center text-red-700 bg-red-100 border border-red-300 hover:bg-red-200 rounded p-2"
											>
												<RiDeleteBin6Line className="text-xl" />
											</button>
										</>
									)}
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
