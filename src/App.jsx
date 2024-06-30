/* import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

import Theme from "./components/Theme";
import DashboardLayout from "./Layouts/DashboardLayout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Theme />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/dashboard" element={<DashboardLayout />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
 */

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Theme from "./components/Theme";
import DashboardLayout from "./Layouts/DashboardLayout";
import ResumeEdit from "./pages/Dashboard/Resume/ResumeEdit";
import PortfolioManage from "./pages/Dashboard/Portfolio/portfolioManage";
import SkillsManage from "./pages/Dashboard/SkillsManage/SkillsManage";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register.jsx/Register";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Theme />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route
							path="/dashboard/DashboardHome"
							element={<DashboardHome />}
						/>
						<Route
							path="skills-manage"
							element={<SkillsManage />}
						/>
						<Route
							path="portfolio-manage"
							element={<PortfolioManage />}
						/>{" "}
						<Route path="resume-manage" element={<ResumeEdit />} />
					</Route>

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
