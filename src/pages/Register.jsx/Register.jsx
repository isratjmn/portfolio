import React, { useContext, useState, useEffect } from "react";
import RegisterImg from "./../../assets/Fast-and-secure-websites.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import ParticlesContainer from "../../components/ParticlesContainer";

import { AuthContext } from "../../providers/Authprovider";
import "./Register.css";

const Register = () => {
	const navigate = useNavigate();
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm();

	const [animateForm, setAnimateForm] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimateForm(false);
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	const onSubmit = (data) => {
		if (data.password !== data.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		createUser(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);

				updateUserProfile(data.username, data.password)
					.then(() => {
						const saveUser = {
							name: data.username,
							email: data.email,
						};
						fetch(
							"https://portfolio-server-x.vercel.app/api/users",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(saveUser),
							}
						)
							.then((res) => res.json())
							.then((data) => {
								if (data.insertedId) {
									reset();

									toast.success("User created successfully");
									navigate("/login");
								}
							});
					})
					.catch((error) => console.log(error));
			})
			.catch((error) =>
				toast.error("Registration failed: " + error.message)
			);
	};

	const password = watch("password");

	return (
		<div className="flex h-screen overflow-hidden">
			<div className="hidden lg:flex items-center justify-center w-[40%] colorBlockLogin text-white">
				<img
					className="animate-bounce object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					src={RegisterImg}
					alt="AnimatedPhoto"
					style={{
						animationDuration: "3s",
						animationTimingFunction: "ease-in-out",
						width: "70%",
						height: "auto",
					}}
				/>
			</div>

			<div className="flex-1 pr-36 flex justify-end items-center bg-gray-100">
				<div
					className={`max-w-full p-8 sm:p-12 bg-white rounded-lg shadow-lg w-full md:w-[80%] lg:w-[40%] relative ${
						animateForm ? "animate-floating" : ""
					}`}
				>
					<ParticlesContainer />
					<h2 className="sectionTitleMedium text-center mb-8">
						Register <span>IzmTechz</span>
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="space-y-4">
							<div>
								<label className="block mb-2 text-sm">
									Username
								</label>
								<input
									type="text"
									{...register("username", {
										required: true,
									})}
									className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
								/>
								{errors.username && (
									<small className="text-red-700 font-semibold mt-2">
										Username is required
									</small>
								)}
							</div>

							<div>
								<label className="block mb-2 text-sm">
									Email address
								</label>
								<input
									type="email"
									{...register("email", { required: true })}
									className="w-full px-3 py-2 border rounded-md bg-gray-200 text-gray-900"
								/>
								{errors.email && (
									<small className="text-red-700 font-semibold mt-2">
										Email is required
									</small>
								)}
							</div>
							<div>
								<label className="text-sm mb-2">Password</label>
								<input
									type="password"
									{...register("password", {
										required: true,
										minLength: 8,
										maxLength: 20,
										pattern:
											/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
									})}
									className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
								/>
								{errors.password &&
									errors.password.type === "required" && (
										<small className="text-red-700 font-semibold mt-2">
											Password is required
										</small>
									)}
								{errors.password &&
									errors.password.type === "minLength" && (
										<small className="text-red-700 font-semibold mt-2">
											Password must be at least 8
											characters long
										</small>
									)}
							</div>
							<div>
								<label className="text-sm mb-2">
									Confirm Password
								</label>
								<input
									type="password"
									{...register("confirmPassword", {
										required: true,
										validate: (value) =>
											value === password ||
											"Passwords do not match",
									})}
									className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
								/>
								{errors.confirmPassword && (
									<small className="text-red-700 font-semibold mt-2">
										{errors.confirmPassword.message}
									</small>
								)}
							</div>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:opacity-90 transition duration-300"
						>
							Register
						</button>
						<p className="font-semibold mt-4 text-center">
							Already have an account?
							<Link to="/login">
								<span className="text-violet-500 gap-4 ml-2">
									{" "}
									Please Login
								</span>
							</Link>
						</p>
					</form>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Register;
