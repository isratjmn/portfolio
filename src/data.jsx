import {
	FaHome,
	FaUser,
	FaFolderOpen,
	FaEnvelopeOpen,
	FaBriefcase,
	FaGraduationCap,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";
import htmlImage from "./assets/html-5.png";
import cssImage from "./assets/css-logo.png";
import bootstrapImage from "./assets/bootstrap-logo-vector.svg";
import tailwindImage from "./assets/tailwind-css.png";
import materialUiImage from "./assets/material-ui.png";
import javascriptImage from "./assets/javaScript.webp";
import reactImage from "./assets/React.webp";
import nextjsImage from "./assets/nextjs.png";
import typescrptImage from "./assets/typescript.webp";
import phpImage from "./assets/php.png";
import laravelImage from "./assets/laravel.wine.png";
import nodeImage from "./assets/nodejs.png";
import expressImage from "./assets/express.webp";
import mongooseImage from "./assets/mongoose.png";
import postGresSQLImage from "./assets/PostgreSQL.png";
import graphQLImage from "./assets/graphQL.png";
import mongodb from "./assets/mongoose.png";
import prismaImage from "./assets/prisma.png";

export const links = [
	{
		name: "Home",
		id: 1,
		icon: <FaHome className="navIcon" />,
		path: "/",
	},

	{
		id: 2,
		name: "Portfolio",
		icon: <FaFolderOpen className="navIcon" />,
		path: "/portfolio",
	},

	{
		id: 3,
		name: "About",
		icon: <FaUser className="navIcon" />,
		path: "/about",
	},

	{
		id: 4,
		name: "Contact",
		icon: <FaEnvelopeOpen className="navIcon" />,
		path: "/contact",
	},

	{
		id: 5,
		name: "Dashboard",
		icon: <MdDashboardCustomize className="navIcon" />,
		path: "/dashboard/DashboardHome",
	},
];

export const personalInfo = [
	{
		id: 1,
		title: "Name : ",
		description: "Israt Jahan",
	},
	{
		id: 3,
		title: "Nationality : ",
		description: "Bangladeshi",
	},

	{
		id: 5,
		title: "Phone : ",
		description: (
			<a
				href="tel:+8801733577248"
				style={{ color: "hsl(252, 35%, 51%)", fontWeight: "700" }}
				target="blank"
			>
				+8801733577248
			</a>
		),
	},
	{
		id: 7,
		title: "Email : ",
		description: (
			<a
				href="mailto:mnmnisrat@gmail.com"
				style={{ color: "hsl(252, 35%, 51%)", fontWeight: "700" }}
				target="blank"
			>
				mnmnisrat@gmail.com
			</a>
		),
	},
	{
		id: 8,
		title: "LinkedIn : ",
		description: (
			<a
				href="https://www.linkedin.com/in/israt-jahan-92a06542/"
				style={{ color: "hsl(252, 35%, 51%)", fontWeight: "700" }}
				target="blank"
			>
				Israt Jahan
			</a>
		),
	},
	{
		id: 4,
		title: "Address : ",
		description: "Nasirabad H/S, Chattogram, Bangladesh",
	},
];

export const stats = [
	{
		id: 1,
		no: "1",
		title: "Years of <br /> Experience",
	},

	{
		id: 2,
		no: "30",
		title: "Completed <br /> Projects",
	},

	{
		id: 3,
		no: "5",
		title: "Happy <br /> Customers",
	},

	{
		id: 4,
		no: "1",
		title: " Awards <br /> Won",
	},
];

export const resume = [
	{
		id: 1,
		category: "experience",
		icon: <FaBriefcase style={{ fontSize: "18px", color: "white" }} />,
		year: "Feb-2023 - Aug-2023",
		title: "X-Codex",
		desc: "As a Front-end React Developer, my role involves creating user-friendly web interfaces using React.js. I integrate these interfaces with back-end services, manage application state, and ensure responsive design. Collaborating with designers and other developers, you'll optimize performance, conduct testing, and follow best practices to deliver high-quality web applications. Staying updated on industry trends and problem-solving are key aspects of my role.",
	},
	{
		id: 2,
		category: "experience",
		icon: <FaBriefcase style={{ fontSize: "18px", color: "white" }} />,
		year: "2021 - 2022",
		title: "WebHunt BD",
		desc: "As a WordPress developer in an IT firm, I create and maintain WordPress websites, customize themes and plugins, handle website configuration, ensure security, troubleshoot issues, and collaborate with teams. Your expertise in WordPress development is essential for delivering functional websites.",
	},

	{
		id: 3,
		category: "experience",
		icon: <FaGraduationCap style={{ fontSize: "20px", color: "white" }} />,
		year: "2021 - 2022",
		title: "Creative IT Institute",
		desc: "Backend technology with Laravel, PHP, and MySQL forms a powerful stack for developing robust and scalable web applications",
	},

	{
		id: 4,
		category: "education",
		icon: <FaGraduationCap style={{ fontSize: "20px", color: "white" }} />,
		year: "2022",
		title: "Complete Web Developement <br> Programming Hero</br>",
		desc: "Build full-stack web applications using MongoDB, Express.js, React, and Node.js. It includes video tutorials, coding exercises, and projects for hands-on learning. Completion of the course equips learners with skills to create robust applications using the MERN stack.",
	},

	{
		id: 5,
		category: "education",
		icon: <FaGraduationCap style={{ fontSize: "20px", color: "white" }} />,
		year: "2017",
		title: "B.Sc in Architecture <br> Ahsanullah University Of Science & Techonology </br>",
		desc: "A Bachelor's degree in Architecture provides a comprehensive education in the field, covering design principles, construction technology, and history.",
	},
];

export const skills = [
	{
		id: 1,
		title: "HTML",
		image: htmlImage,
	},
	{
		id: 2,
		title: "CSS",
		image: cssImage,
	},
	{
		id: 3,
		title: "Bootstrap",
		image: bootstrapImage,
	},
	{
		id: 4,
		title: "Tailwind",
		image: tailwindImage,
	},
	{
		id: 5,
		title: "Material UI",
		image: materialUiImage,
	},
	{
		id: 6,
		title: "Javascript",
		image: javascriptImage,
	},
	{
		id: 7,
		title: "React.js",
		image: reactImage,
	},
	{
		id: 8,
		title: "Next.js",
		image: nextjsImage,
	},
	{
		id: 9,
		title: "PHP",
		image: phpImage,
	},
	{
		id: 10,
		title: "Laravel",
		image: laravelImage,
	},
	{
		id: 11,
		title: "NodeJs",
		image: nodeImage,
	},
	{
		id: 12,
		title: "ExpressJS",
		image: expressImage,
	},
	{
		id: 13,
		title: "Typescript",
		image: typescrptImage,
	},
	{
		id: 14,
		title: "Mongoose",
		image: mongooseImage,
	},
	{
		id: 15,
		title: "PostgreSQL",
		image: postGresSQLImage,
	},
	{
		id: 16,
		title: "GraphQL",
		image: graphQLImage,
	},
	{
		id: 17,
		title: "MongoDB",
		image: mongodb,
	},
	{
		id: 18,
		title: "Prisma",
		image: prismaImage,
	},
];

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: "hsl(252, 35%, 51%)",
	},

	{
		id: 2,
		img: Theme2,
		color: "hsl(4, 93%, 54%)",
	},

	{
		id: 3,
		img: Theme3,
		color: "hsl(271, 76%, 53%)",
	},

	{
		id: 4,
		img: Theme4,
		color: "hsl(225, 73%, 57%)",
	},

	{
		id: 5,
		img: Theme5,
		color: "hsl(43, 74%, 49%)",
	},

	{
		id: 6,
		img: Theme6,
		color: "hsl(339, 81%, 66%)",
	},

	{
		id: 7,
		img: Theme7,
		color: "hsl(80, 61%, 50%)",
	},

	{
		id: 8,
		img: Theme8,
		color: "hsl(19, 96%, 52%)",
	},

	{
		id: 9,
		img: Theme9,
		color: "hsl(88, 65%, 43%)",
	},

	{
		id: 10,
		img: Theme10,
		color: "hsl(42, 100%, 50%)",
	},
];
