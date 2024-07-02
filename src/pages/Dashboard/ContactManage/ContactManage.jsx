import React, { useState, useEffect } from "react";
import useAxios from "../../../Hooks/UseAxios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEditOff } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactManage = () => {
	const [axiosSecure] = useAxios();
	const [contactData, setContactData] = useState({
		location: "",
		contact: "",
		email: "",
		github: "",
		linkedin: "",
	});

	const [contactList, setContactList] = useState([]);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactData((prevData) => ({
			...prevData,
			[name]: name === "contact" ? value.replace(/\D/, "") : value,
		}));
	};

	const openLink = (url) => {
		window.open(url, "_blank");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const contactDataToSend = {
			...contactData,
			contact: Number(contactData.contact),
		};
		try {
			await axiosSecure.post("/api/contact", contactDataToSend);
			toast.success("Contact data submitted successfully !");
			setContactData({
				location: "",
				contact: "",
				email: "",
				github: "",
				linkedin: "",
			});
			fetchContactData();
		} catch (error) {
			toast.success("Error submitting contact data");
		}
	};

	const fetchContactData = async () => {
		try {
			const response = await axiosSecure.get("/api/contact");
			setContactList(response.data);
		} catch (error) {
			console.error("Error fetching contact data", error);
		}
	};

	useEffect(() => {
		fetchContactData();
	}, []);

	return (
		<div className="mx-auto p-4 ">
			<ToastContainer />
			<h2 className="sectionTitleMedium text-center mb-8 text-4xl font-semibold">
				Contact <span>Information</span>
			</h2>
			<div className="mx-auto p-4 flex flex-wrap gap-4">
				<div className="w-full lg:w-[30%]">
					<form
						onSubmit={handleSubmit}
						className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl"
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="mb-6">
								<label
									htmlFor="location"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Location :
								</label>
								<input
									type="text"
									name="location"
									value={contactData.location}
									onChange={handleChange}
									className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Location"
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Email :
								</label>
								<input
									type="email"
									name="email"
									value={contactData.email}
									onChange={handleChange}
									className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Email"
									required
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="mb-6">
								<label
									htmlFor="contact"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Contact No :
								</label>
								<input
									type="number"
									name="contact"
									value={contactData.contact}
									onChange={handleChange}
									className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="******"
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="linkedin"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									LinkedIn :
								</label>
								<input
									type="url"
									name="linkedin"
									value={contactData.linkedin}
									onChange={handleChange}
									className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="LinkedIn URL"
									required
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="github"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Github :
							</label>
							<input
								type="url"
								name="github"
								value={contactData.github}
								onChange={handleChange}
								className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Github URL"
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

				<div className="w-full lg:w-[60%] text-base rounded-lg">
					<table className="min-w-full bg-white">
						<thead className="bg-gray-200 shadow-lg rounded-md">
							<tr>
								<th className="text-left py-3 px-4 text-[14px]">
									SL No.
								</th>
								<th className="text-left py-3 px-4 text-[14px]">
									Location
								</th>
								<th className="text-left py-3 px-4 text-[14px]">
									Email
								</th>
								<th className="text-left py-3 px-4 text-[14px]">
									Contact
								</th>
								<th className="text-left py-3 px-4 text-[14px]">
									LinkedIn
								</th>
								<th className="text-left py-3 px-4 text-[14px]">
									Github
								</th>
								<th className="text-left py-3 px-4 text-[14px]">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{contactList.map((contact, index) => (
								<tr key={contact?.id}>
									<td className="py-3 px-4 text-[13px]">
										{index + 1}
									</td>
									<td className="py-2 px-4 text-[13px]">
										{contact.location}
									</td>
									<td className="py-2 px-4 text-[13px]">
										{contact.email}
									</td>
									<td className="py-2 px-4 text-[13px]">
										{contact?.contact}
									</td>
									<td className="py-2 px-4 text-[13px]">
										<span
											className="text-blue-500 font-bold hover:underline cursor-pointer"
											onClick={() =>
												openLink(contact?.linkedIn)
											}
										>
											linkedIn
										</span>
									</td>
									<td className="py-2 px-4 text-[13px]">
										<span
											className="text-blue-500 font-bold hover:underline cursor-pointer"
											onClick={() =>
												openLink(contact?.gitHub)
											}
										>
											GitHub
										</span>
									</td>
									<td className="py-3 px-4 flex gap-2">
										<button
											onClick={() =>
												handleDelete(contact.id)
											}
											className="flex items-center justify-center text-white bg-red-500 hover:bg-red-700 rounded p-2"
										>
											<RiDeleteBin6Line className="text-xl" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ContactManage;
