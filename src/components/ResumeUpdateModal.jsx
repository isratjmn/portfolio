import React, { useState } from "react";
import { format } from "date-fns";

const ResumeModal = ({ entry, onSave, onClose, onRefetch }) => {
	const [formData, setFormData] = useState({
		title: entry.title,
		category: entry.category,
		desc: entry.desc,
		startDate: format(new Date(entry.startDate), "yyyy-MM-dd"),
		endDate: format(new Date(entry.endDate), "yyyy-MM-dd"),
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSave = () => {
		onSave(formData);
		onRefetch();
	};

	return (
		<div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
				<h2 className="text-2xl font-semibold text-left mb-8 mt-6">
					Update Resume
				</h2>
				<div className="flex gap-3">
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Title:
						</label>
						<input
							type="text"
							name="title"
							value={formData.title}
							onChange={handleInputChange}
							className="w-full border bg-gray-200 text-sm border-gray-300 rounded p-3"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Category:
						</label>
						<input
							type="text"
							name="category"
							value={formData.category}
							onChange={handleInputChange}
							className="w-full border bg-gray-200 text-sm border-gray-300 rounded p-3"
							required
						/>
					</div>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Description:
					</label>
					<textarea
						name="desc"
						value={formData.desc}
						onChange={handleInputChange}
						className="w-full border bg-gray-200 border-gray-300 text-sm rounded p-3"
						rows="4"
						required
					/>
				</div>
				<div className="flex gap-2">
					<div className="mb-4 w-[50%]">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Start Date:
						</label>
						<input
							type="date"
							name="startDate"
							value={formData.startDate}
							onChange={handleInputChange}
							className="border border-gray-300 w-full text-sm bg-gray-200 rounded p-2"
							required
						/>
					</div>
					<div className="mb-4 w-[50%]">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							End Date:
						</label>
						<input
							type="date"
							name="endDate"
							value={formData.endDate}
							onChange={handleInputChange}
							className="border border-gray-300 w-full text-sm bg-gray-200 rounded p-2"
							required
						/>
					</div>
				</div>
				<div className="flex justify-end gap-4 mt-2">
					<button
						onClick={handleSave}
						className="px-6 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300 ease-in-out"
					>
						Update Resume
					</button>
					<button
						onClick={onClose}
						className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResumeModal;
