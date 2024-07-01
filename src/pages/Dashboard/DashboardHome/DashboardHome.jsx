import React from "react";
import {
	FaUser,
	FaProjectDiagram,
	FaEnvelope,
	FaBlog,
	FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHome = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="text-white pt-6">
				<div className="mx-auto px-6 flex justify-between items-center">
					<h2 className="sectionTitleMedium text-left justify-start items-start flex mb-2 text-4xl font-semibold gap-2">
						Portfolio
						<span> Dashboard</span>
					</h2>
				</div>
			</header>

			<div className="flex flex-col md:flex-row flex-1">
				<main className="flex-1 px-8  rounded-tl-3xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
						<div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-shadow duration-300">
							<h2 className="text-2xl font-bold mb-4">Profile</h2>
							<p className="text-gray-700">
								Manage your personal profile information and
								settings.
							</p>
							<Link
								to="/dashboard/portfolio-manage"
								className="mt-4 inline-block bg-violet-400 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors duration-300"
							>
								Go to Profile
							</Link>
						</div>
						<div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-shadow duration-300">
							<h2 className="text-2xl font-bold mb-4">
								Projects
							</h2>
							<p className="text-gray-700">
								View and manage your projects.
							</p>
							<Link
								to="/dashboard/portfolio-entries"
								className="mt-4 inline-block bg-violet-400 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors duration-300"
							>
								Go to Projects
							</Link>
						</div>
						<div className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-shadow duration-300">
							<h2 className="text-2xl font-bold mb-4">Contact</h2>
							<p className="text-gray-700">
								Manage your contact information.
							</p>
							<Link
								to="/dashboard/contact-manage"
								className="mt-4 inline-block bg-violet-400 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors duration-300"
							>
								Go to Contact
							</Link>
						</div>
						<div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-shadow duration-300">
							<h2 className="text-2xl font-bold mb-4">
								Articles
							</h2>
							<p className="text-gray-700">
								Read and manage your blog posts.
							</p>
							<Link
								to="/article"
								className="mt-4 inline-block bg-violet-400 text-white py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors duration-300"
							>
								Go to Article
							</Link>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default DashboardHome;
