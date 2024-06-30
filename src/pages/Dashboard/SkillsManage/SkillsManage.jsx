import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import SkillsTable from "../../../components/SkillsTable";

const SkillsManage = () => {
	const [skillData, setSkillData] = useState({
		title: "",
		image: "",
	});

	const skillOptions = [
		{ value: "NextJs", label: "NextJs" },
		{ value: "ReactJs", label: "ReactJs" },
		{ value: "JavaScript", label: "JavaScript" },
		{ value: "AWS", label: "AWS" },
		{ value: "Typescript", label: "Typescript" },
		{ value: "GraphQL", label: "GraphQL" },
		{ value: "Prisma", label: "Prisma" },
		{ value: "PostgraSQL", label: "PostgraSQL" },
		{ value: "Mongodb", label: "Mongodb" },
		{ value: "Mongoose", label: "Mongoose" },
		{ value: "MySQL", label: "MySQL" },
	];

	const handleChange = (selectedOption) => {
		setSkillData((prevData) => ({
			...prevData,
			title: selectedOption ? selectedOption.value : "",
		}));
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setSkillData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/skills", skillData);
			alert("Skill data submitted successfully!");
			setSkillData({
				id: "",
				title: "",
				image: "",
			});
		} catch (error) {
			console.error("Error submitting skill data", error);
			alert("Error submitting skill data");
		}
	};

	return (
		<section className="pt-8">
			<h2 className="sectionTitleMedium text-center mb-8 text-4xl font-semibold">
				Skills <span>Information</span>
			</h2>
			<div className="mx-auto p-4 flex flex-wrap gap-2">
				<div className="w-full lg:w-[40%]">
					<form
						onSubmit={handleSubmit}
						className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl"
					>
						<div className="mb-6">
							<label
								htmlFor="image"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Image URL :
							</label>
							<input
								type="url"
								id="image"
								name="image"
								value={skillData.image}
								onChange={handleInputChange}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>

						<div className="mb-6">
							<label
								htmlFor="title"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Title :
							</label>
							<Select
								id="title"
								options={skillOptions}
								onChange={handleChange}
								className="basic-single"
								classNamePrefix="select"
								placeholder="Select a skill title"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
						>
							Submit
						</button>
					</form>
				</div>
				<div className="w-full lg:w-[55%] text-base">
					<SkillsTable />
				</div>
			</div>
		</section>
	);
};

export default SkillsManage;
