import React, { useState } from "react";
import axios from "axios";

const SkillsManage = () => {
	const [skillData, setSkillData] = useState({
		id: "",
		title: "",
		image: "",
	});

	const handleChange = (e) => {
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
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-semibold mb-8 text-left text-gray-500 pt-9 rounded-md">
				Skills Data
			</h1>
			<form
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl"
			>
				<div className="mb-6">
					<label
						htmlFor="title"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Title
					</label>
					<select
						id="title"
						name="title"
						value={skillData.title}
						onChange={handleChange}
						className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					>
						<option value="">Select a skill title</option>
						<option value="NextJs">NextJs</option>
						<option value="ReactJs">ReactJs</option>
						<option value="JavaScript">JavaScript</option>
					</select>
				</div>
				<div className="mb-6">
					<label
						htmlFor="image"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Image URL
					</label>
					<input
						type="url"
						id="image"
						name="image"
						value={skillData.image}
						onChange={handleChange}
						className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Image URL for skill"
						required
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
	);
};

export default SkillsManage;
