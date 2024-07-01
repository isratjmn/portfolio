import React, { useState, useContext, useEffect } from "react";
import LoginImg from "./../../assets/login-4.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ParticlesContainer from "../../components/ParticlesContainer";
import { useForm } from "react-hook-form";
import "./Login.css";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [animate, setAnimate] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimate(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	const onSubmit = async (data) => {
		try {
			const result = await signIn(data.email, data.password);
			const user = result.user;
			console.log(user);
			Swal.fire({
				title: "User Login Successfully...!!",
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			});
			navigate(from, { replace: true });
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				setErrorMessage("Email Address not found");
			} else if (error.code === "auth/wrong-password") {
				setErrorMessage("Incorrect password");
			} else {
				setErrorMessage(
					"An unexpected error occurred. Please try again."
				);
			}
		}
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
				<div
					className={`max-w-full p-8 sm:p-12 bg-white rounded-lg shadow-lg w-full md:w-[80%] lg:w-[40%] relative ${
						animate ? "animate-floating" : ""
					}`}
				>
					<ParticlesContainer />
					<h2 className="sectionTitleMedium text-center mb-8">
						Login <span>IzmTechz</span>
					</h2>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6"
					>
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
								{...register("email", {
									required: "Email is required",
								})}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-200"
							/>
							{errors.email && (
								<p className="text-red-500">
									{errors.email.message}
								</p>
							)}
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
								{...register("password", {
									required: "Password is required",
								})}
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-200"
							/>
							{errors.password && (
								<p className="text-red-500">
									{errors.password.message}
								</p>
							)}
						</div>
						{errorMessage && (
							<p className="text-red-500 text-center">
								{errorMessage}
							</p>
						)}
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
