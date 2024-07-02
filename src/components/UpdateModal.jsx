import React from "react";

const UpdateModal = ({ isOpen, onClose, onSave, portfolio, setPortfolio }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "technologies") {
			setPortfolio((prev) => ({
				...prev,
				[name]: value.split(",").map((tech) => tech.trim()),
			}));
		} else {
			setPortfolio((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave();
	};

	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-[600px]">
						<h2 className="text-lg font-semibold mb-4">
							Update Portfolio Item
						</h2>
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="mb-4">
									<label
										htmlFor="title"
										className="block text-sm font-medium"
									>
										Title
									</label>
									<input
										type="text"
										id="title"
										name="title"
										value={portfolio.title}
										onChange={handleChange}
										className="border-gray-900 text-sm rounded-md bg-gray-200 mt-1 block w-full"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="clientGithub"
										className="block text-sm font-medium"
									>
										Client Code URL
									</label>
									<input
										type="text"
										id="clientGithub"
										name="clientGithub"
										value={portfolio.clientGithub}
										onChange={handleChange}
										className="border-gray-300 text-sm rounded-md bg-gray-200 shadow-sm mt-1 block w-full"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="serverGithub"
										className="block text-sm font-medium"
									>
										Server Code URL
									</label>
									<input
										type="text"
										id="serverGithub"
										name="serverGithub"
										value={portfolio.serverGithub}
										onChange={handleChange}
										className="border-gray-300 text-sm bg-gray-200 rounded-md shadow-sm mt-1 block w-full"
										required
									/>
								</div>
								<div className="mb-4">
									<label
										htmlFor="liveLink"
										className="block text-sm font-medium"
									>
										Live Link
									</label>
									<input
										type="text"
										id="liveLink"
										name="live_link"
										value={portfolio.live_link}
										onChange={handleChange}
										className="border-gray-300 text-sm bg-gray-200 rounded-md shadow-sm mt-1 block w-full"
										required
									/>
								</div>
							</div>
							<div className="mb-4">
								<label
									htmlFor="technologies"
									className="block text-sm font-medium"
								>
									Technologies
								</label>
								<input
									type="text"
									id="technologies"
									name="technologies"
									value={portfolio.technologies.join(", ")}
									onChange={handleChange}
									className="border-gray-300 text-sm bg-gray-200 rounded-md shadow-sm mt-1 block w-full"
									required
								/>
							</div>
							<div className="flex justify-end">
								<button
									type="button"
									onClick={onClose}
									className="mr-2 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 bg-gradient-to-r from-blue-500 text-sm to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
								>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default UpdateModal;
