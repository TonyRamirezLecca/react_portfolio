import React, { Component } from "react";
import "../styles/skills.css";
import "../styles/fonts.css";
const images = require.context("../assets/images", true);
const java = images("./java.png");
const csharp = images("./csharp.png");
const c = images("./c.png");
const cpp = images("./cpp.png");
const html = images("./html.png");
const css = images("./css.png");
const javascript = images("./javascript.png");
const vue = images("./vue.png");
const react = images("./react.png");
const laptop = images("./laptopstorm.jpg");

class Skills extends Component {
	constructor() {
		super();
		this.state = {
			skills: [
				{
					id: 1,
					img: java 
				},
				{
					id: 2,
					img: csharp 
				},
				{
					id: 3,
					img: c 
				},
				{
					id: 4,
					img: cpp 
				},
				{
					id: 5,
					img: html 
				},
				{
					id: 6,
					img: css 
				},
				{
					id: 7,
					img: javascript 
				},
				{
					id: 8,
					img: vue 
				},
				{
					id: 9,
					img: react 
				},
			]
		};
	}

	render() {
		return (
			<React.Fragment>
				<div className="skillsContainers" style={{backgroundImage: `url(${laptop})`}}>
					<div className="skillsContainersBackground"></div>
					<div className="skillsTitle"><h6>Development<br />Skills</h6></div>
					<div className="skillsImgCtn">
						{this.state.skills.map(section => {
							return (
								<div key={section.id}><img src={section.img}/></div>
							);
						})}
					</div>
					<div className="skillsDescription">
						I started my development career studying Computer Science at Brigham Young University. There I gained a foundation on data structures, time complexity, and object oriented programming. If you want fast, resuable, readable code, I'm your guy.  
					</div>
				</div>
			</React.Fragment>
		);
	}

	componentDidMount() {
		function parallax() {
				var pagePosition = window.pageYOffset + window.innerHeight;
				var img1Position = document.querySelector('.skillsContainers').parentNode.offsetTop;


				if (pagePosition > img1Position + 200 && pagePosition < img1Position + window.innerHeight + 600) {
					document.querySelector(".skillsContainers").style.transform = `translateY(${(pagePosition - img1Position) / 60}%)`;
					document.querySelector('.skillsContainers').classList.add('skills-fade-in');
				}
				else {
					document.querySelector('.skillsContainers').classList.remove('skills-fade-in');
				}
		}
		document.addEventListener("scroll", () => {
			parallax();
		});
	}
}

export default Skills;