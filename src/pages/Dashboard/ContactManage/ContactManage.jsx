import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactManage = () => {
	const [contactData, setPortfolioData] = useState({
		location: "",
		email: "",
		contact: "",
		linkedin: "",
		github: "",
	});

	const [contactList, setContactList] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPortfolioData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/contact", contactData);
			alert("Contact data submitted successfully!");
			setPortfolioData({
				location: "",
				email: "",
				contact: "",
				linkedin: "",
				github: "",
			});
			fetchContactData(); // Fetch updated contact data
		} catch (error) {
			console.error("Error submitting contact data", error);
			alert("Error submitting contact data");
		}
	};

	const fetchContactData = async () => {
		try {
			const response = await axios.get("/api/contact");
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
			<h2 className="sectionTitleMedium text-center mb-8 text-4xl font-semibold">
				Contact <span>Information</span>
			</h2>
			<div className="mx-auto p-4 flex flex-wrap gap-4">
				<div className="w-full lg:w-[40%]">
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
									id="location"
									name="location"
									value={contactData.location}
									onChange={handleChange}
									className="rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

				<div className="w-full lg:w-[55%] text-base rounded-lg">
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
							</tr>
						</thead>
						<tbody>
							{contactList.map((contact, index) => (
								<tr key={contact.id}>
									<td className="py-3 px-4">{index + 1}</td>
									<td className="py-2 px-4">
										{contact.location}
									</td>
									<td className="py-2 px-4">
										{contact.email}
									</td>
									<td className="py-2 px-4">
										{contact.contact}
									</td>
									<td className="py-2 px-4">
										<a
											href={contact.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:underline"
										>
											{contact.linkedin}
										</a>
									</td>
									<td className="py-2 px-4 border-b">
										<a
											href={contact.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:underline"
										>
											{contact.github}
										</a>
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
