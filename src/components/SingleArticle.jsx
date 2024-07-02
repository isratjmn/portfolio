import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";
import ParticlesContainer from "../../components/ParticlesContainer";
import useAxios from "../Hooks/UseAxios";

const SingleBlog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [axiosSecure] = useAxios();
	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await axiosSecure.get(`/blogs/${id}`);
				setBlog(response.data);
			} catch (error) {
				console.error("Error fetching blog", error);
			}
		};

		fetchBlog();
	}, [axiosSecure, id]);

	if (!blog) {
		return (
			<div className="flex items-start justify-center h-screen">
				<RotateLoader color="#F6CFFC" loading={loading} size={13} />
			</div>
		);
	}

	return (
		<div className="relative py-12 min-h-screen bg-gray-100">
			<ParticlesContainer />
			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-semibold mb-4 text-gray-900">
					{blog.title}
				</h1>
				<div className="text-gray-600 text-sm flex items-center gap-2 mb-4">
					<FaUser className="mr-1" />
					<span>{blog.author}</span>
					<FaCalendarAlt className="mr-1" />
					<span>{blog.date}</span>
					<FaTags className="mr-1" />
					<span>{blog.category}</span>
				</div>
				<img
					className="w-full h-72 object-cover rounded-lg mb-4"
					src={blog.image}
					alt={blog.title}
				/>
				<div className="prose max-w-none">
					<p>{blog.content}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
