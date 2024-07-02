import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import { NavLink } from "react-router-dom";
import defaultAvatar from "../assets/default_avatar.webp";
import { links } from "../data";
import { GrLogin } from "react-icons/gr";
import { BiLogInCircle } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		const isConfirmed = window.confirm("Are you sure you want to log out?");
		if (isConfirmed) {
			logOut()
				.then(() => {
					console.log("User logged out");
				})
				.catch((error) => console.log(error));
		}
	};

	const handleToggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className="nav">
			<div className={`${showMenu ? "navMenu show-menu" : "navMenu"}`}>
				<ul className="navList">
					{links.map(({ name, icon, path }, index) => (
						<li className="navItem" key={index}>
							<NavLink
								to={path}
								className={({ isActive }) =>
									isActive ? "navLink active-nav" : "navLink"
								}
								onClick={handleToggleMenu}
							>
								{icon}
								<h3 className="navName">{name}</h3>
							</NavLink>
						</li>
					))}
					<li className="navItem">
						{user ? (
							<button className="navLink" onClick={handleLogOut}>
								<img
									src={user.avatar || defaultAvatar}
									alt="User Avatar"
									className="navAvatar"
									style={{
										width: "40px",
										height: "40px",
										borderRadius: "50%",
									}}
								/>
							</button>
						) : (
							<NavLink to="/login" className="navLink">
								<GrLogin className="navIcon text-[2rem] font-bold text-black-500" />
							</NavLink>
						)}
					</li>
				</ul>
			</div>

			<div
				className={`${
					showMenu ? "navToggle animate-toggle" : "navToggle"
				}`}
				onClick={handleToggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
