import React, { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";
import ParticlesContainer from "../../components/ParticlesContainer";
import useAxios from "../../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";
import { CgMore } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const RecentBlogs = () => {
	const [axiosSecure] = useAxios();
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchResumeData = async () => {
			try {
				const response = await axiosSecure.get("/api/blogs");
				setBlogs(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchResumeData();
	}, [axiosSecure]);

	if (loading)
		return (
			<div className="flex items-center justify-center h-screen ">
				<RotateLoader color="#F6CFFC" loading={loading} size={13} />
			</div>
		);
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="py-12">
			<ParticlesContainer />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="sectionTitleMedium text-center my-10 text-4xl font-semibold">
					Recent <span>Blogs</span>
				</h2>
				<div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
					{blogs.map((blog, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl"
						>
							<img
								className="w-full h-72 object-cover rounded-t-lg"
								src={blog.image}
								alt={blog.title}
							/>

							<div className="p-4 pb-4">
								<span className="inline-block bg-purple-800 text-white px-4 py-1 rounded-md text-sm font-semibold mb-2">
									{blog.category}
								</span>
								<h3 className="text-lg font-semibold mb-2">
									{blog.title}
								</h3>
								<div className="text-gray-600 text-sm flex items-center gap-2">
									<FaUser className="mr-1" />
									<span>{blog.author}</span>

									<FaCalendarAlt className="mr-1" />
									<span>{blog.date}</span>

									<FaTags className="mr-1" />
									<span>{blog.comments} comments</span>
								</div>
								<Link to={`/blogs/${blog._id}`}>
									<button className="mt-4 px-3 py-1  text-black rounded-lg">
										<CgMore className="text-2xl" />
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="mx-auto flex text-center justify-center items-center">
					<Link to="/write">
						<button className="mt-8 px-6 py-3  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
							Write a New Blog
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecentBlogs;
