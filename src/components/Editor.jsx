/* import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import useAxios from "../Hooks/UseAxios";
import toast, { Toaster } from "react-hot-toast";

const BlogEditor = () => {
	const editor = useRef(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("Node.js Development");
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const [comments, setComments] = useState(0);
	const [axiosSecure] = useAxios();

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (value) => {
		setContent(value);
	};

	const handleAuthorChange = (e) => {
		setAuthor(e.target.value);
	};

	const handleImageChange = (e) => {
		setImage(e.target.value);
	};

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	const handleCommentsChange = (e) => {
		setComments(Number(e.target.value));
	};

	const stripHtmlTags = (html) => {
		const div = document.createElement("div");
		div.innerHTML = html;
		return div.textContent || div.innerText || "";
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const plainTextContent = stripHtmlTags(content);
		try {
			await axiosSecure.post("/api/blogs", {
				title,
				content: plainTextContent,
				author,
				image,
				category,
				date,
				comments,
			});
			toast.success("Blog data submitted successfully!", {
				style: {
					background: "#93C572",
					color: "#ffffff",
				},
				icon: "🚀",
			});
		} catch (error) {
			console.error("Error posting blog:", error);
			toast.error("Failed to post blog");
		}
	};

	return (
		<>
			<h2 className="sectionTitleMedium text-center mt-14 text-4xl font-bold">
				Write <span>New Blogs</span>
			</h2>

			<div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-md p-8">
				<form onSubmit={handleSubmit}>
					<div className="flex flex-wrap gap-4">
						<div className="mb-6 w-full md:w-[47%] lg:w-[32%]">
							<label
								htmlFor="title"
								className="block text-sm font-sm text-gray-700 mb-2"
							>
								Title
							</label>
							<input
								type="text"
								id="title"
								value={title}
								onChange={handleTitleChange}
								className="w-full text-sm px-4 py-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
								placeholder="Enter your blog title"
								required
							/>
						</div>
						<div className="mb-6 w-full md:w-[50%] lg:w-[32%]">
							<label
								htmlFor="author"
								className="block text-sm font-sm text-gray-700 mb-2"
							>
								Author
							</label>
							<input
								type="text"
								id="author"
								value={author}
								onChange={handleAuthorChange}
								className="w-full text-sm px-4 py-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
								placeholder="Enter Author's Name"
								required
							/>
						</div>
						<div className="mb-6 w-full md:w-[100%] lg:w-[32%]">
							<label
								htmlFor="image"
								className="block text-sm font-sm text-gray-700 mb-2"
							>
								Image URL
							</label>
							<input
								type="text"
								id="image"
								value={image}
								onChange={handleImageChange}
								className="w-full text-sm px-4 py-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
								placeholder="Enter Image URL"
								required
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-4">
						<div className="mb-6 md:w-[31%] w-full lg:w-[32%]">
							<label
								htmlFor="category"
								className="block text-sm font-sm text-gray-700 mb-2"
							>
								Category
							</label>
							<select
								id="category"
								value={category}
								onChange={handleCategoryChange}
								className="w-full text-sm px-4 py-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
							>
								<option value="Category text-sm">
									Category..
								</option>
								<option value="React Development text-sm">
									React Development
								</option>
								<option value="UI/UX Design text-sm">
									UI/UX Design
								</option>
								<option value="General Programming text-sm">
									General Programming
								</option>
								<option value="Lifestyle text-sm">
									Lifestyle
								</option>
								<option value="Business text-sm">
									Business
								</option>
								<option value="Health text-sm">Health</option>
								<option value="Technology text-sm">
									Technology
								</option>
								<option value="Astronomy text-sm">
									Astronomy
								</option>
								<option value="Environment text-sm">
									Environment
								</option>
								<option value="Finance text-sm">Finance</option>
							</select>
						</div>
						<div className="mb-6 w-full md:w-[32%] lg:w-[32%]">
							<label
								htmlFor="date"
								className="block text-sm font-sm text-gray-700 mb-2"
							>
								Date
							</label>
							<input
								type="date"
								id="date"
								value={date}
								onChange={handleDateChange}
								className="w-full text-sm bg-gray-100 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
								required
							/>
						</div>

						<div className="mb-6 w-full md:w-[32%] lg:w-[32%]">
							<label
								htmlFor="comments"
								className="block text-sm font-sm text-gray-700 mb-2"
							>
								Comments
							</label>
							<input
								type="number"
								id="comments"
								value={comments}
								onChange={handleCommentsChange}
								className="w-full text-sm bg-gray-100 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
								min="0"
								required
							/>
						</div>
					</div>

					<div className="mb-6">
						<label
							htmlFor="content"
							className="block text-sm font-sm text-gray-700 mb-2"
						>
							Content
						</label>
						<JoditEditor
							ref={editor}
							value={content}
							config={{
								readonly: false,
								height: 500,
								toolbarAdaptive: false,
								toolbarSticky: false,
								showCharsCounter: false,
								showWordsCounter: false,
								showXPathInStatusbar: false,
							}}
							onBlur={(newContent) =>
								handleContentChange(newContent)
							}
							onChange={(newContent) => {}}
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
					>
						Post Blog
					</button>
				</form>
				<Toaster position="top-right" />
			</div>
		</>
	);
};

export default BlogEditor;
 */
