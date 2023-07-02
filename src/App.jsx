import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import Theme from "./components/Theme";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Theme from "./components/Theme";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Theme />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
