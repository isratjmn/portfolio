import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import SkillsTable from "../../../components/SkillsTable";
import useAxios from "../../../Hooks/UseAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SkillsManage = () => {
	const [axiosSecure] = useAxios();
	const {
		handleSubmit,
		control,
		reset,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			image: "",
			title: "",
		},
	});

	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

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
		{ value: "Docker", label: "Docker" },
	];

	const onSubmit = async (data) => {
		try {
			const formData = new FormData();
			formData.append("image", data.image[0]);
			const imgResponse = await fetch(img_hosting_url, {
				method: "POST",
				body: formData,
			});
			const imgResult = await imgResponse.json();
			if (imgResult.success) {
				const imageUrl = imgResult.data.url;
				const skillData = {
					title: data.title.value,
					image: imageUrl,
				};
				const response = await axiosSecure.post(
					"/api/skills",
					skillData
				);
				const newSkill = response.data;

				toast.success("Skill data submitted successfully!");
				console.log(newSkill);
				reset();
			} else {
				alert("Failed to upload image");
			}
		} catch (error) {
			console.error("Error submitting skill data", error);
		}
	};

	return (
		<section className="pt-8">
			<ToastContainer />
			<h2 className="sectionTitleMedium text-center mb-8 text-4xl font-semibold">
				Skills <span>Information</span>
			</h2>
			<div className="mx-auto p-4 flex flex-wrap gap-5">
				<div className="w-full md:w-[90%] lg:w-[35%]">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl"
					>
						<div className="mb-6">
							<label
								htmlFor="file"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Image:
							</label>
							<input
								type="file"
								{...register("image", {
									required: "Image is required",
								})}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							{errors.image && (
								<p className="text-red-500 text-sm mt-1">
									{errors.image.message}
								</p>
							)}
						</div>

						<div className="mb-6">
							<label
								htmlFor="title"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Title:
							</label>
							<Controller
								name="title"
								control={control}
								rules={{ required: "Title is required" }}
								render={({ field }) => (
									<Select
										{...field}
										options={skillOptions}
										className="basic-single"
										classNamePrefix="select"
										placeholder="Select a skill title"
									/>
								)}
							/>
							{errors.title && (
								<p className="text-red-500 text-sm mt-1">
									{errors.title.message}
								</p>
							)}
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
						>
							Submit
						</button>
					</form>
				</div>
				<div className="w-full md:w-[90%] lg:w-[55%] text-base">
					<SkillsTable />
				</div>
			</div>
		</section>
	);
};

export default SkillsManage;
