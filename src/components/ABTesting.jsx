import React, { Component } from "react";
import "../styles/abtesting.css";
import "../styles/fonts.css";
const images = require.context("../assets/images", true);
const code = images("./code.jpg");

class ABTesting extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div className="testing-ctn">
				<div className="testing-text-ctn">
					<h1>CRO<br /> A/B Testing</h1>
					<p>Experience using VWO, Adobe Target, and Google Optimize for A/B testing with dozens of clients.</p>
					<div className="testing-test-links"><a href="https://github.com/TonyRamirezLecca/ab_testing_projects">View Github</a></div>
					<div className="testing-sub-text">The goal isn't to get people to your website. The goal is to get people to convert. Whether that's filling out a form, making a call, or making a purchase.</div>
				</div>

				<div className="testing-img-ctn" >
					<div className="testing-img" style={{backgroundImage: `url(${code})`}}></div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		function parallax() {
				var pagePosition = window.pageYOffset ;
				var img1Position = document.querySelector('.testing-ctn').parentNode.offsetTop - 400;

				if (pagePosition > img1Position && pagePosition) {
					document.querySelector(".testing-text-ctn").classList.add('testing-slide-right');
					document.querySelector(".testing-img-ctn").classList.add('testing-slide-left');
				}
				else {
					document.querySelector(".testing-text-ctn").classList.remove('testing-slide-right');
					document.querySelector(".testing-img-ctn").classList.remove('testing-slide-left');
				}
		}
		document.addEventListener("scroll", () => {
			parallax();
		});
	}

}

export default ABTesting;