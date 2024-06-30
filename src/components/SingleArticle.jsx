import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";
import useAxios from "../Hooks/UseAxios";
import { RotateLoader } from "react-spinners";

const SingleBlog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [axiosSecure] = useAxios();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const res = await axiosSecure.get(`/blogs/${id}`);
				setBlog(res.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchBlog();
	}, [axiosSecure, id]);

	if (loading)
		return (
			<div className="flex items-center justify-center h-screen">
				<RotateLoader color="#F6CFFC" loading={loading} size={13} />
			</div>
		);

	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="relative py-12 min-h-screen bg-gray-100">
			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="sectionTitleMedium pt-6 text-left justify-start items-start mb-8 text-4xl font-semibold">
					<span>{blog.title}</span>
				</h2>

				<div className="text-gray-600 text-base flex items-center gap-4 mb-8">
					<div className="flex items-center gap-2">
						<FaUser />
						<span>{blog.author}</span>
					</div>
					<div className="flex items-center gap-2">
						<FaCalendarAlt />
						<span>{blog.date}</span>
					</div>
					<div className="flex items-center gap-2">
						<FaTags />
						<span>{blog.category}</span>
					</div>
				</div>
				<img
					className="w-full h-72 object-cover rounded-lg mb-8"
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
