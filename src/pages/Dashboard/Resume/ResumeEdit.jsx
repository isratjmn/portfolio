import React, { useState } from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { MdSubtitles } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import ResumeEntries from "../../../components/ResumeEntries";
import useAxios from "../../../Hooks/UseAxios";
import toast, { Toaster } from "react-hot-toast";

const ResumeEdit = () => {
	const [axiosSecure] = useAxios();
	const [formData, setFormData] = useState({
		category: "",
		startDate: null,
		endDate: null,
		title: "",
		desc: "",
	});

	const [fetchData, setFetchData] = useState(false);

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
			startDate: date,
		}));
	};

	const handleEndDateChange = (date) => {
		setFormData((prevData) => ({
			...prevData,
			endDate: date,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosSecure.post("/api/resume", formData);
			toast.success("Resume data submitted successfully!", {
				style: {
					background: "#93C572",
					color: "#ffffff",
				},
				icon: "🚀",
			});
			setFormData({
				category: "",
				startDate: null,
				endDate: null,
				title: "",
				desc: "",
			});
			setFetchData((prev) => !prev);
		} catch (error) {
			console.error("Error submitting resume data", error);
			toast.error("Error submitting resume data", {
				style: {
					background: "#F68052",
					color: "#ffffff",
				},
			});
		}
	};

	return (
		<section className="pt-8">
			<Toaster position="top-center" />
			<h2 className="sectionTitleMedium text-center mb-8 text-4xl font-semibold">
				Resume <span>Information</span>
			</h2>
			<div className="mx-auto p-4 flex flex-wrap gap-4">
				<div className="w-full md:w-[75%] lg:w-[35%]">
					<form
						onSubmit={handleSubmit}
						className="bg-white p-8 rounded-lg shadow-lg"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-full">
							<div className="">
								<label
									htmlFor="startDate"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Start Date :
								</label>
								<div className="flex items-center rounded-r-md w-full">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 h-10 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										📅
									</span>
									<DatePicker
										selected={formData.startDate}
										onChange={handleStartDateChange}
										dateFormat="MMMM dd, yyyy"
										className=" bg-gray-100 rounded-r-md border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
										placeholderText="Select start date"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="endDate"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									End Date :
								</label>
								<div className="flex items-center">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 h-10 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										📅
									</span>
									<DatePicker
										selected={formData.endDate}
										onChange={handleEndDateChange}
										dateFormat="MMMM dd, yyyy"
										className=" bg-gray-100 border rounded-r-md border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
										placeholderText="Select end date"
										required
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
							<div>
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Title :
								</label>
								<div className="flex items-center">
									<span className="inline-flex items-center h-10 px-3 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-l-md">
										<MdSubtitles className="text-xl text-teal-600" />
									</span>
									<input
										type="text"
										name="title"
										value={formData.title}
										onChange={handleChange}
										className="rounded-r-md bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
										placeholder="Front-end Developer"
										required
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="category"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Category :
								</label>
								<div className="flex items-center">
									<span className="inline-flex h-10 items-center px-3 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-l-md">
										<BiSolidCategoryAlt className="text-xl text-blue-600" />
									</span>
									<input
										type="text"
										name="category"
										value={formData.category}
										onChange={handleChange}
										className="rounded-r-md bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5"
										placeholder="Education / Experience"
										required
									/>
								</div>
							</div>
						</div>

						<div className="mt-4">
							<label
								htmlFor="desc"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Description :
							</label>
							<div className="flex items-center">
								<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-gray-300 h-[100px] rounded-l-md">
									📝
								</span>
								<textarea
									name="desc"
									id="desc"
									value={formData.desc}
									onChange={handleChange}
									className="rounded-r-md bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 resize-none"
									placeholder="Describe your role and responsibilities"
									rows="4"
									required
								/>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105 mt-4"
						>
							Submit
						</button>
					</form>
				</div>

				<div className="w-full md:w-[77%] lg:w-[60%] mt-4 lg:mt-0">
					{/* <ResumeEntries /> */}
					<ResumeEntries fetchData={fetchData} />
				</div>
			</div>
		</section>
	);
};

export default ResumeEdit;
