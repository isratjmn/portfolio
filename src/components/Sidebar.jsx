

import React from "react";
import {
	FaHome,
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="h-screen w-64 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col">
			<div className="flex items-center justify-center mt-10 mb-10">
				<h1 className="text-3xl font-semibold">IzmTechz</h1>
			</div>
			<nav className="flex flex-col space-y-2 px-4">
				<NavLink
					to="/dashboard"
					className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
					activeClassName="bg-gray-700 border-l-4 border-green-500"
				>
					<MdDashboardCustomize className="text-xl text-green-500" />
					<span className="ml-3 text-lg">Dashboard</span>
				</NavLink>
				<NavLink
					to="/about"
					className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
					activeClassName="bg-gray-700 border-l-4 border-blue-500"
				>
					<FaUser className="text-xl text-blue-500" />
					<span className="ml-3 text-lg">About</span>
				</NavLink>
				<NavLink
					to="/portfolio"
					className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
					activeClassName="bg-gray-700 border-l-4 border-yellow-500"
				>
					<FaFolderOpen className="text-xl text-yellow-500" />
					<span className="ml-3 text-lg">Portfolio</span>
				</NavLink>
				<NavLink
					to="/contact"
					className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
					activeClassName="bg-gray-700 border-l-4 border-red-500"
				>
					<FaEnvelopeOpen className="text-xl text-red-500" />
					<span className="ml-3 text-lg">Contact</span>
				</NavLink>
				<NavLink
					to="/resume-manage"
					className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
					activeClassName="bg-gray-700 border-l-4 border-purple-500"
				>
					<FaBriefcase className="text-xl text-purple-500" />
					<span className="ml-3 text-lg">Resume</span>
				</NavLink>
			</nav>
			<div className="mt-auto mb-10 flex justify-center">
				<span className="text-sm text-gray-400">© 2024 IzmTechz</span>
			</div>
		</div>
	);
};

export default Sidebar;
