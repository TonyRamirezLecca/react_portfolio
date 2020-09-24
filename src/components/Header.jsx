import React, { Component } from "react";
import "../styles/header.css";
import "../styles/navbar.css";
import Navbar from "../components/Navbar";
import resume from "../assets/documents/ResumePublic.pdf";
const headerImg = require.context("../assets/images", true);
const laptop = headerImg("./landingpageLaptop.jpg");

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="header-ctn">
					<div className="header-text-ctn">
						<h1>Tony <br /> Ramirez</h1>
						<div className="header-underline"></div>
						<h6>Web Developer</h6>
					</div>
					<div className="header-img-ctn"><div className="header-slant-background1"></div><div className="header-slant-background2"></div><div className="header-img-darken"></div><img className="header-img" src={laptop}/></div>
				</div>
				<div className="header-links"><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a><a href="https://github.com/TonyRamirezLecca" target="_blank" rel="noopener noreferrer">Github</a><a href="https://www.linkedin.com/in/tonyramirezlecca" target="_blank" rel="noopener noreferrer">LinkedIn</a><Navbar className="nav-bar-in-header"/></div>
			</React.Fragment>
		);
	}

	componentDidMount() {
		function parallax() {
				var windowHeight = window.innerHeight;
				var pagePosition = window.pageYOffset ;
				var img1Position = document.querySelector(".header-img").offsetTop;

				if (pagePosition > img1Position && pagePosition < window.innerHeight * 2) {
					document.querySelector(".header-img").style.transform = `translateY(${(pagePosition - img1Position) / 30}%)`;
				}
				else {
					document.querySelector(".header-img").style.transform = ``;
				}

				if(pagePosition > window.innerHeight) {
					document.querySelector('.header-links').classList.add('header-links-sticky');
				}
				else {
					document.querySelector('.header-links').classList.remove('header-links-sticky');
				}
		}
		document.addEventListener("scroll", () => {
			parallax();
		});
	}
}

export default Header;