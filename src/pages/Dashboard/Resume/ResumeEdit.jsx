import React, { useState } from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { MdSubtitles } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import ResumeEntries from "../../../components/ResumeEntries";
import useAxios from "../../../Hooks/UseAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResumeEdit = () => {
	const [axiosSecure] = useAxios();
	const [formData, setFormData] = useState({
		category: "",
		startDate: "",
		endDate: "",
		title: "",
		desc: "",
	});

	const [resumeData, setResumeData] = useState([]);

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
			toast.success("Resume data submitted successfully!");
			setFormData({
				category: "",
				startDate: "",
				endDate: "",
				title: "",
				desc: "",
			});
			setResumeData(response.data);
		} catch (error) {
			console.error("Error submitting resume data", error);
			toast.error("Error submitting resume data");
		}
	};

	return (
		<section className="pt-8">
			<ToastContainer />
			<h2 className="sectionTitleMedium text-center mb-8 text-4xl font-semibold">
				Resume <span>Information</span>
			</h2>
			<div className=" mx-auto p-4 flex flex-wrap gap-2">
				<div className="w-full lg:w-[30%]">
					<form
						onSubmit={handleSubmit}
						className="bg-white p-8 rounded-lg shadow-2xl"
					>
						<div className="flex justify-between gap-4 mb-6">
							<div className="w-full">
								<label
									htmlFor="startDate"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Start Date
								</label>
								<div className="flex">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										📅
									</span>
									<DatePicker
										selected={formData.startDate}
										onChange={handleStartDateChange}
										dateFormat="MMMM dd yyyy"
										className="rounded-none w-full rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholderText="Select start date"
										required
									/>
								</div>
							</div>
							<div className="w-full">
								<label
									htmlFor="endDate"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									End Date
								</label>
								<div className="flex">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										📅
									</span>
									<DatePicker
										selected={formData.endDate}
										onChange={handleEndDateChange}
										dateFormat="MMMM dd yyyy"
										className="rounded-none w-full rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholderText="Select end date"
										required
									/>
								</div>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="mb-6">
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Title
								</label>
								<div className="flex">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										<MdSubtitles className="text-xl text-black-500 text-teal-600" />
									</span>
									<input
										type="text"
										name="title"
										value={formData.title}
										onChange={handleChange}
										className="rounded-none w-full rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Front-end Developer"
										required
									/>
								</div>
							</div>
							<div className="mb-6">
								<label
									htmlFor="title"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Category
								</label>
								<div className="flex">
									<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
										<BiSolidCategoryAlt className="text-xl text-black-500 text-blue-600" />
									</span>
									<input
										type="text"
										name="category"
										value={formData.title}
										onChange={handleChange}
										className="rounded-none w-full rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Education / Expeience"
										required
									/>
								</div>
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
								<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-300 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
									📝
								</span>
								<textarea
									name="desc"
									id="desc"
									value={formData.desc}
									onChange={handleChange}
									className="rounded-none w-full rounded-e-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block min-w-0 text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
				<div className="w-full lg:w-[66%] text-base">
					<ResumeEntries />
					{/* <ResumeEntries resumeData={resumeData} /> */}
				</div>
			</div>
		</section>
	);
};

export default ResumeEdit;
