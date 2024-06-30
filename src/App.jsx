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
import SkillsManage from "./pages/Dashboard/SkillsManage/SkillsManage";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register.jsx/Register";
import ContactManage from "./pages/Dashboard/ContactManage/ContactManage";
import PortfolioManage from "./pages/Dashboard/Portfolio/PortfolioManage";
import PortfolioEntries from "./pages/Dashboard/Portfolio/PortfolioEntries ";
import PrivateRoutes from "./Routes/privateRoutes";
import Articles from "./pages/Article/Articles";
import ErrorPage from "./pages/Error/Error";
import SingleBlog from "./components/SingleArticle";
import BlogEditor from "./components/BlogEditor";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Theme />

				<Routes>
					<Route index element={<Home />} />
					<Route
						path="*"
						element={
							<ErrorPage status={404} message="Page not found" />
						}
					/>
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blogs" element={<Articles />} />
					<Route path="/blogs/:id" element={<SingleBlog />} />
					<Route path="/write" element={<BlogEditor />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoutes>
								<DashboardLayout />
							</PrivateRoutes>
						}
					>
						<Route
							path="DashboardHome"
							element={<DashboardHome />}
						/>
						<Route
							path="skills-manage"
							element={<SkillsManage />}
						/>
						<Route
							path="contact-manage"
							element={<ContactManage />}
						/>
						<Route
							path="portfolio-manage"
							element={<PortfolioManage />}
						/>
						<Route
							path="portfolio-entries"
							element={<PortfolioEntries />}
						/>

						<Route path="resume-manage" element={<ResumeEdit />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
