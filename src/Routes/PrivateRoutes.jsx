import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { AuthContext } from "../providers/Authprovider";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return (
			<div
				className="text-center"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<PropagateLoader color="#F6CFFC" size={20} />
			</div>
		);
	}
	if (user) {
		return children;
	}
	return (
		<div>
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		</div>
	);
};

export default PrivateRoutes;
