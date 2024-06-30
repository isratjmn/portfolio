import React, { useState } from "react";
import LoginImg from "./../../assets/login-4.webp";
import { Link } from "react-router-dom";
import "./Login.css";

import ParticlesContainer from "../../components/ParticlesContainer";

const Login = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="flex h-screen overflow-hidden">
			<div className="hidden lg:flex items-center justify-center w-[40%] colorBlockLogin text-white">
				<img
					className="animate-bounce object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					src={LoginImg}
					alt="AnimatedPhoto"
					style={{
						animationDuration: "3s",
						animationTimingFunction: "ease-in-out",
						width: "100%",
						height: "auto",
					}}
				/>
			</div>

			<div className="flex-1 pr-36 flex justify-end items-center bg-gray-100">
				<div className="max-w-full p-8 sm:p-12 bg-white rounded-lg shadow-lg w-full md:w-[80%] lg:w-[40%] relative">
					<ParticlesContainer />
					<h2 className="sectionTitleMedium text-center mb-8">
						Login <span>IzmTechz</span>
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-200"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-200"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:opacity-90 transition duration-300"
						>
							Login
						</button>
						<p className="font-semibold mt-4 text-center">
							Don&apos;t have an account?
							<Link to="/register">
								<span className="text-violet-500 gap-4 ml-2">
									Create an account
								</span>
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
