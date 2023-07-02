import React from "react";
import "./Contact.css";
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineLocalLibrary, MdOutlineWifiCalling3 } from "react-icons/md";

const Contact = () => {
	return (
		<section className="contact section">
			<h2 className="sectionTitle">
				Get In<span> Touch</span>
			</h2>
			<div className="contactContainer container grid">
				<div className="contactData">
					<h2 className="contactTitle">Don't be Shy!!</h2>
					<p className="contactDesc">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Odio, in.
					</p>

					<div className="contactInfo">
						<div className="infoItem">
							<MdOutlineLocalLibrary className="infoIcon" />
							<div>
								<h1 className="infoTitle">Location: </h1>
								<h4 className="infoDesc">
									Chattogram, Dhaka.
								</h4>
							</div>
						</div>
						<div className="infoItem">
							<BsEnvelopeAt className="infoIcon" />
							<div>
								<h1 className="infoTitle">Email Me: </h1>
								<h4 className="infoDesc">
									mnmnisrat@gmail.com
								</h4>
							</div>
						</div>
						<div className="infoItem">
							<BsPhoneVibrate className="infoIcon" />
							<div>
								<h1 className="infoTitle">Call Me: </h1>
								<h4 className="infoDesc">+8801733577248</h4>
							</div>
						</div>
					</div>

					<div className="contactSocials">
						<a
							href="https://www.facebook.com/moonmoon.israt/"
							className="contactSocial-links"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://www.facebook.com/moonmoon.israt/"
							className="contactSocial-links"
						>
							<FaTwitter />
						</a>
						<a
							href="https://dribbble.com/moon_01"
							className="contactSocial-links"
						>
							<FaDribbble />
						</a>
						<a
							href="https://www.linkedin.com/in/israt-moonmoon-92a06542/"
							className="contactSocial-links"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>

				<form className="contactForm" action="">
					<div className="formInput-group">
						<div className="formInput-div">
							<input
								type="text"
								placeholder="Your Name"
								className="form-control"
							/>
						</div>
						<div className="formInput-div">
							<input
								type="email"
								placeholder="Your Email"
								className="form-control"
							/>
						</div>
						<div className="formInput-div">
							<input
								type="text"
								placeholder="Your Subject"
								className="form-control"
							/>
						</div>
					</div>

					<div className="formInput-div">
						<textarea
							className="form-control"
							name=""
							placeholder="Your Message"
							id=""
							cols="30"
							rows="10"
						></textarea>
					</div>
					<button className="button">
						Send Message
						<span className="buttonIcon contactButton-icon">
							<FiSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
