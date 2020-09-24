import React, { Component } from "react";
import "../styles/analytics.css";
import "../styles/fonts.css";
const images = require.context("../assets/images", true);
const googleanalytics = images("./googleanalytics.png");
const googleads = images("./googleicon.png");
const facebookpixel = images("./facebookpixel.png");
const calltrackingmetrics = images("./calltrackingmetrics.png");
const bingads = images("./bingads.png");

class Analytics extends Component {
	constructor() {
		super();
		this.state = {
			analytics : [
				{
					id: 1,
					img: googleanalytics
				},
				{
					id: 2,
					img: googleads 
				},
				{
					id: 3,
					img: facebookpixel 
				},
				{
					id: 4,
					img: calltrackingmetrics
				},
				{
					id: 5,
					img: bingads 
				}
			]
		};
	}

	render() {
		return (
			<div className="analyticsContainers" >
				<div className="analyticsTitle"><h6>Analytics Tracking for<br />Lead Gen and Ecommerce</h6></div>
				<div className="analyticsImgCtn">
					{this.state.analytics.map(section => {
						return (
							<div key={section.id}><img src={section.img}/></div>
						);
					})}
				</div>
				<div className="analyticsDescription">
					Implementing tracking is important, but implementing accurate tracking is what counts. I've worked on analytics for dozens of sites. Figuring out why their current implementations aren't working, adding enhanced ecommerce tracking, setting up lead gen tracking, and so much more. 
				</div>
			</div>
		);
	}

	componentDidMount() {
		function parallax() {
				var pagePosition = window.pageYOffset + window.innerHeight - 100  ;
				var img1Position = document.querySelector('.analyticsTitle').parentNode.parentNode.offsetTop;

				if (pagePosition > img1Position && pagePosition < (pagePosition + window.innerHeight - 100)) {
					document.querySelector(".analyticsTitle").classList.add('analytics-scale');
				}
				else {
					document.querySelector(".analyticsTitle").classList.remove('analytics-scale');
				}
				if (pagePosition > img1Position + 200  && pagePosition < (pagePosition + window.innerHeight + 180)) {
					document.querySelector(".analyticsImgCtn").classList.add('analytics-scale');
				}
				else {
					document.querySelector(".analyticsImgCtn").classList.remove('analytics-scale');
				}
				if (pagePosition > img1Position + 440 && pagePosition < (img1Position + window.innerHeight + 780 )) {
					document.querySelector(".analyticsDescription").classList.add('analytics-scale');
				}
				else {
					document.querySelector(".analyticsDescription").classList.remove('analytics-scale');
				}
		}
		document.addEventListener("scroll", () => {
			parallax();
		});
	}
}

export default Analytics;