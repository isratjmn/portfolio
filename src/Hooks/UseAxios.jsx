import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
	baseURL: "http://localhost:5000",
});
const useAxios = () => {
	const { logOut } = UseAuth();
	const navigate = useNavigate();

	useEffect(() => {
		// 1. Intercept Request (Client ----> Server)
		axiosSecure.interceptors.request.use((config) => {
			const token = localStorage.getItem("access-token");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});
		// 2. Intercept Response (Client <---- Server)
		axiosSecure.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (
					error.response &&
					(error.response.status === 401 ||
						error.response.status === 403)
				) {
					await logOut();
					navigate("/login");
				}
				return Promise.reject(error);
			}
		);
	}, [logOut, navigate, axiosSecure]);

	return [axiosSecure];
};

export default useAxios;
