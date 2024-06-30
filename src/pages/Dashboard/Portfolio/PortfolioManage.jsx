import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const PortfolioManage = () => {
	const [portfolioData, setPortfolioData] = useState({
		id: "",
		img: "",
		title: "",
		clientGithub: "",
		serverGithub: "",
		demo: "",
		technologies: [],
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPortfolioData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleTechnologiesChange = (selectedOptions) => {
		const technologies = selectedOptions
			? selectedOptions.map((option) => option.value)
			: [];
		setPortfolioData((prevData) => ({
			...prevData,
			technologies: technologies,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/portfolio", portfolioData);
			alert("Portfolio data submitted successfully!");
			setPortfolioData({
				id: "",
				img: "",
				title: "",
				clientGithub: "",
				serverGithub: "",
				demo: "",
				technologies: [],
			});
		} catch (error) {
			console.error("Error submitting portfolio data", error);
			alert("Error submitting portfolio data");
		}
	};

	const technologyOptions = [
		{ value: "Next.JS", label: "Next.JS" },
		{ value: "Redux", label: "Redux" },
		{ value: "Node.JS", label: "Node.JS" },
		{ value: "Express", label: "Express" },
		{ value: "Typescript", label: "Typescript" },
		{ value: "Tailwind", label: "Tailwind" },
		{ value: "PostgresQL", label: "PostgresQL" },
		{ value: "Prisma", label: "Prisma" },
	];

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-semibold mb-8 text-left text-gray-500 pt-9 rounded-md">
				Portfolio Data
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
					<input
						type="text"
						id="title"
						name="title"
						value={portfolioData.title}
						onChange={handleChange}
						className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Portfolio item title"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="clientGithub"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Client Code
					</label>
					<input
						type="url"
						id="clientGithub"
						name="clientGithub"
						value={portfolioData.clientGithub}
						onChange={handleChange}
						className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Client Github repository URL"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="serverGithub"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Server Code
					</label>
					<input
						type="url"
						id="serverGithub"
						name="serverGithub"
						value={portfolioData.serverGithub}
						onChange={handleChange}
						className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Server Github repository URL"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="demo"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Live Link
					</label>
					<input
						type="url"
						id="demo"
						name="demo"
						value={portfolioData.demo}
						onChange={handleChange}
						className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Demo URL"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="technologies"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Technologies
					</label>
					<Select
						options={technologyOptions}
						isMulti
						name="technologies"
						value={technologyOptions.filter((option) =>
							portfolioData.technologies.includes(option.value)
						)}
						onChange={handleTechnologiesChange}
						className="basic-multi-select"
						classNamePrefix="select"
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

export default PortfolioManage;
