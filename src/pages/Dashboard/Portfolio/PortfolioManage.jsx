import React, { useState } from "react";

import Select from "react-select";
import useAxios from "../../../Hooks/UseAxios";
import { useForm } from "react-hook-form";

const PortfolioManage = () => {
	const [axiosSecure] = useAxios();

	const [portfolioData, setPortfolioData] = useState({
		title: "",
		clientGithub: "",
		serverGithub: "",
		live_link: "",
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
			await axiosSecure.post("/api/portfolios", portfolioData);
			alert("Portfolio data submitted successfully!");
			setPortfolioData({
				title: "",
				clientGithub: "",
				serverGithub: "",
				live_link: "",
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
		{ value: "React", label: "React" },
		{ value: "GraphQL", label: "GraphQL" },
		{ value: "MongoDB", label: "MongoDB" },
		{ value: "Docker", label: "Docker" },
		{ value: "Kubernetes", label: "Kubernetes" },
		{ value: "AWS", label: "AWS" },
		{ value: "Firebase", label: "Firebase" },
		{ value: "Jest", label: "Jest" },
		{ value: "Cypress", label: "Cypress" },
		{ value: "Jenkins", label: "Jenkins" },

		{ value: "Sass", label: "Sass" },
	];

	return (
		<section className="pt-8">
			<h2 className="sectionTitleMedium text-left justify-start items-start flex mb-8 text-4xl font-semibold gap-2">
				Portfolio
				<span> Information</span>
			</h2>
			<div className="w-full px-2 lg:w-[40%] mb-6">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl"
				>
					<div className="flex flex-wrap -mx-2 mb-6">
						<div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
							<label
								htmlFor="title"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Title :
							</label>
							<input
								type="text"
								id="title"
								name="title"
								value={portfolioData.title}
								onChange={handleChange}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
						<div className="w-full md:w-1/2 px-2">
							<label
								htmlFor="clientGithub"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Client Code :
							</label>
							<input
								type="url"
								id="clientGithub"
								name="clientGithub"
								value={portfolioData.clientGithub}
								onChange={handleChange}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-2 mb-6">
						<div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
							<label
								htmlFor="serverGithub"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Server Code :
							</label>
							<input
								type="url"
								id="serverGithub"
								name="serverGithub"
								value={portfolioData.serverGithub}
								onChange={handleChange}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
						<div className="w-full md:w-1/2 px-2">
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Live Link :
							</label>
							<input
								type="url"
								name="live_link"
								value={portfolioData.live_link}
								onChange={handleChange}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
						</div>
					</div>
					<div className="mb-6">
						<label
							htmlFor="technologies"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Technologies :
						</label>
						<Select
							options={technologyOptions}
							isMulti
							name="technologies"
							value={technologyOptions.filter((option) =>
								portfolioData.technologies.includes(
									option.value
								)
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
		</section>
	);
};

export default PortfolioManage;
