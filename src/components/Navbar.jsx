import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./Navbar.css";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="nav">
			<div className={`${showMenu ? "navMenu show-menu": "navMenu"}`}>
				<ul className="navList">
					{links.map(({ name, icon, path }, index) => {
						return (
							<li className="navItem" key={index}>
								<NavLink
									to={path}
									className={({ isActive }) =>
										isActive
											? "navLink active-nav"
											: "navLink"
									} onClick={() => setShowMenu(!showMenu)}
								>
									{icon}
									<h3 className="navName">{name}</h3>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>

			<div className={`${showMenu ? "navToggle animate-toggle": "navToggle"}`} onClick={() => setShowMenu(!showMenu)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
