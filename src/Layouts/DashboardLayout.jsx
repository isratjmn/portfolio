import React from "react";
import logo from "./../assets/portfolios.png";
import {
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { RiFileList3Fill } from "react-icons/ri";
import "./DashboardLayout.css";

const DashboardLayout = () => {
	return (
		<div className="flex h-screen">
			<div className="w-64 bg-gradient-to-r from-gray-300 to-gray-200 text-black flex flex-col">
				<div className="flex items-center gap-2  justify-center mt-10">
					<img
						src={logo}
						alt="logo"
						className="w-10 h-10 rounded-md object-cover"
					/>
					<div className="flex items-center justify-center mt-10">
						<h2 className="sectionTitleMedium text-center text-3xl">
							Izm<span>Techz</span>
						</h2>
					</div>
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
						<span className="ml-3 text-base">
							Skills Management
						</span>
					</NavLink>
					<NavLink
						to="/dashboard/portfolio-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-yellow-500"
					>
						<FaFolderOpen className="text-xl text-black-500" />
						<span className="ml-3 text-base">
							Portfolio management
						</span>
					</NavLink>
					<NavLink
						to="/dashboard/portfolio-entries"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-yellow-500"
					>
						<RiFileList3Fill className="text-xl text-black-500" />
						<span className="ml-3 text-base">
							Portfolio Projects
						</span>
					</NavLink>

					<NavLink
						to="/dashboard/resume-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-purple-500"
					>
						<FaBriefcase className="text-xl text-black-500" />
						<span className="ml-3 text-base">
							Resume Management
						</span>
					</NavLink>

					<NavLink
						to="/dashboard/contact-manage"
						className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
						activeClassName="bg-gray-700 border-l-4 border-red-500"
					>
						<FaEnvelopeOpen className="text-xl text-black-500" />
						<span className="ml-3 text-base">Contact</span>
					</NavLink>
				</nav>
				<div className="mt-auto mb-10 flex justify-center">
					<span className="text-sm text-gray-400"></span>
				</div>
			</div>
			<div className="flex-1 p-4 bg-gray-100 min-h-screen">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
