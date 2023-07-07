import React, { useRef } from "react";
import "./Contact.css";
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineLocalLibrary, MdOutlineWifiCalling3 } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ParticlesContainer from "../../components/ParticlesContainer";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_og5ab1t",
				"template_yo8o9ij",
				form.current,
				"cyn9YgwJLIc0jjsCT"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message Sent");
					toast.success("Email Sent Successfully");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<section className="contact section">
			<ParticlesContainer />
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
								<h4 className="infoDesc">Chattogram, Dhaka.</h4>
							</div>
						</div>
						<div className="infoItem">
							<BsEnvelopeAt className="infoIcon" />
							<div>
								<h1 className="infoTitle">Email Me: </h1>
								<h4 className="infoDesc">
									<a
										href="mailto:jamilakterup@gmail.com"
										style={{
											color: "hsl(252, 35%, 51%)",
											fontWeight: "700",
										}}
										target="blank"
									>
										mnmnisrat@gmail.com
									</a>
								</h4>
							</div>
						</div>
						<div className="infoItem">
							<BsPhoneVibrate className="infoIcon" />
							<div>
								<h1 className="infoTitle">Call Me: </h1>
								<h4 className="infoDesc">
									<a
										href="tel:+8801790-398719"
										style={{
											color: "hsl(252, 35%, 51%)",
											fontWeight: "700",
										}}
										target="blank"
									>
										+8801733577248
									</a>
								</h4>
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
							href="https://twitter.com/mnisrat_j"
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

				<form ref={form} onSubmit={sendEmail} className="contactForm">
					<div className="formInput-group">
						<div className="formInput-div">
							<input
								type="text"
								placeholder="Your Name"
								className="form-control"
								name="user_name"
							/>
						</div>
						<div className="formInput-div">
							<input
								type="email"
								placeholder="Your Email"
								className="form-control"
								name="user_email"
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
							name="message"
							placeholder="Your Message"
							cols="30"
							rows="10"
						></textarea>
					</div>

					<button className="button" type="submit" value="Send">
						Send Message
						<span
							className="buttonIcon contactButton-icon"
							type="submit"
							value="Send"
						>
							<FiSend />
						</span>
					</button>
				</form>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</section>
	);
};

export default Contact;
