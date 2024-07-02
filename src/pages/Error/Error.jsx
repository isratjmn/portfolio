import React from "react";
import { Link, useLocation } from "react-router-dom";

const ErrorPage = ({ status = 404, message = "Page not found" }) => {
	const location = useLocation();
	const errorStatus = location.state?.status || status;
	const errorMessage = location.state?.message || message;

	return (
		<div className="flex items-center justify-center h-screen text-gray-900">
			<div className="container text-center">
				<figure className="mb-4">
					<img
						src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg"
						className="w-full max-w-2xl mx-auto"
					/>
				</figure>
				<h1 className="text-9xl sectionTitle">
					<span>{errorStatus}</span>
				</h1>
				<p className="text-2xl md:text-3xl sectionTitleMedium font-bold mb-4">
					<span>{errorMessage}</span>
				</p>
				<Link
					to="/"
					className="px-4 py-2 bg-violet-950  text-white rounded-lg shadow-md hover:bg-lime-600 transition duration-300"
				>
					Back to Home
				</Link>
			</div>

		</div>
	);
};

export default ErrorPage;
