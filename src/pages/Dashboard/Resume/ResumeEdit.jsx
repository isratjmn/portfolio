import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ResumeEdit = () => {
	const [formData, setFormData] = useState({
		startYear: "",
		endYear: "",
		title: "",
		desc: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleStartDateChange = (date) => {
		setFormData((prevData) => ({
			...prevData,
			startYear: date,
		}));
	};

	const handleEndDateChange = (date) => {
		setFormData((prevData) => ({
			...prevData,
			endYear: date,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/resume", formData);
			alert("Resume data submitted successfully!");
			setFormData({
				startYear: "",
				endYear: "",
				title: "",
				desc: "",
			});
		} catch (error) {
			console.error("Error submitting resume data", error);
			alert("Error submitting resume data");
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-semibold mb-8 text-left text-gray-500 pt-9 rounded-md">
				Resume Data
			</h1>
			<form
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl"
			>
				<div className="flex justify-between gap-4 mb-6 w-[100%]">
					<div>
						<label
							htmlFor="startYear"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Start Year
						</label>
						<div className="flex w-[100%]">
							<span className="inline-flex w-[20%] items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								📅
							</span>

							<DatePicker
								selected={formData.startYear}
								onChange={handleStartDateChange}
								dateFormat="MMMM dd yyyy"
								className="rounded-none w-[100%] rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholderText="Select start date"
								required
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="endYear"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							End Year
						</label>
						<div className="flex">
							<span className="inline-flex w-[20%] items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								📅
							</span>

							<DatePicker
								selected={formData.endYear}
								onChange={handleEndDateChange}
								dateFormat="MMMM dd yyyy"
								className="rounded-none rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholderText="Select end date"
								required
							/>
						</div>
					</div>
				</div>

				<div className="mb-6">
					<label
						htmlFor="title"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Title
					</label>
					<div className="flex">
						<span className="inline-flex w-[9%] items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
							🏷️
						</span>
						<input
							type="text"
							name="title"
							id="title"
							value={formData.title}
							onChange={handleChange}
							className="rounded-none rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Front-end React Developer"
							required
						/>
					</div>
				</div>
				<div className="mb-6">
					<label
						htmlFor="desc"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Description
					</label>
					<div className="flex">
						<span className="inline-flex w-[10%] items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
							📝
						</span>
						<textarea
							name="desc"
							id="desc"
							value={formData.desc}
							onChange={handleChange}
							className="rounded-none rounded-e-lg bg-gray-100 border border-blue-700 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Describe your role and responsibilities"
							rows="4"
							required
						/>
					</div>
				</div>
				<button
					type="submit"
					className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ResumeEdit;
