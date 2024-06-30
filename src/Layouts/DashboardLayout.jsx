import React from "react";
import {
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
	return (
		<div className="flex h-screen">
			<div className="w-64 bg-gradient-to-r from-gray-300 to-gray-200 text-black flex flex-col">
				<div className="flex items-center justify-center mt-10 mb-10">
					<h1 className="text-3xl font-semibold">IzmTechz</h1>
				</div>
				<nav className="flex flex-col space-y-2 px-4">
					<NavLink
						to="/dashboard/DashboardHome"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-green-500"
					>
						<MdDashboardCustomize className="text-xl text-black-500" />
						<span className="ml-3 text-lg">Dashboard</span>
					</NavLink>
					<NavLink
						to="/dashboard/skills-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-blue-500"
					>
						<FaUser className="text-xl text-black-500" />
						<span className="ml-3 text-lg">Skills</span>
					</NavLink>
					<NavLink
						to="/dashboard/portfolio-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-yellow-500"
					>
						<FaFolderOpen className="text-xl text-black-500" />
						<span className="ml-3 text-lg">Portfolio</span>
					</NavLink>
					<NavLink
						to="/dashboard/contact-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-red-500"
					>
						<FaEnvelopeOpen className="text-xl text-black-500" />
						<span className="ml-3 text-lg">Contact</span>
					</NavLink>
					<NavLink
						to="/dashboard/resume-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-purple-500"
					>
						<FaBriefcase className="text-xl text-black-500" />
						<span className="ml-3 text-lg">Resume</span>
					</NavLink>
				</nav>
				<div className="mt-auto mb-10 flex justify-center">
					<span className="text-sm text-gray-400">
						© IzmTechz 2024
					</span>
				</div>
			</div>
			<div className="flex-1 p-4 bg-gray-100 min-h-screen">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
