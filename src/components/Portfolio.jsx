import "../styles/portfolio.css";
import React, { Component } from "react";
import PortfolioSection from "./PortfolioSection";
import PortfolioButton from "./PortfolioButton";

const images = require.context("../assets/images", true);
const weatherImg = images("./weather.jpg");
const portfolioImg = images("./portfolio.jpg");
const comicImg = images("./xkcdComics.jpg");
const googleMapsImg = images("./mapAPI.jpg");
const americanTaxiImg = images("./americanTaxi.jpg");
const lockHartGroup = images("./lockhartgroup.jpg");
const incredibleHealth = images("./incrediblehealth.jpg");
const amazingHealthNow = images("./amazinghealthnow.jpg");
const regexGenerator= images("./regexgenerator.jpg");
const sparkTraining= images("./sparktraining.jpg");
const enigmaIOPsych= images("./enigmaiopsych.jpg");
const bukt= images("./bukt.jpg");
const thetileman = images("./thetileman.jpg");
const pilotmap = images("./pilotmap.jpg");
const cabins = images("./cabins.jpg");
const glamSophisticated = images("./glamsophisticated.jpg");
const appointmentSetter = images("./appointmentsetter.jpg");

const gray = images("./gray.jpg");

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			portfolioSections: [
				{
					id: 1,
					title: "Portfolio",
					img: portfolioImg,
					github: "https://github.com/TonyRamirezLecca/portfolioWebsite",
					url: "https://tony.services",
					description: "My porfolio is built using React. It's where I share my projects, my contact info, resume, Github, LinkedIn, and other professional information about me.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: true,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 14,
					title: "Bukt",
					img: bukt,
					github: "https://github.com/TonyRamirezLecca/web_app_bukt",
					url: "https://bukt.io",
					description: "In Progress: I teamed up with 2 friends to create our Bucket List website. We hope to create an app soon that will track bucket lists, connect users, and more. Being created using React, Redux, Typescript, MongoDB, and Node.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: true,
					hasJavascript: true,
					hasNodeJS: true,
					hasExpress: true,
					hasRESTAPI: true,
                    hasMongoDB: true,
                    hasWordpress: false,
                    hasRedux: true,
                    hasTypescript: true,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 3,
					title: "Weather API",
					img: weatherImg,
					github: "https://github.com/TonyRamirezLecca/weather_forecast_api",
					url: "http://weather.tony.services",
					description: "One of my first times using an api ~2 years ago. A website displaying the use of the free weather API. Allows you to search a city in the United States and it will display the local weather in a clean and simple format.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: true,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 5,
					title: "XKCD Comics API",
					img: comicImg,
					github: "https://github.com/TonyRamirezLecca/xkcd_comic_api",
					url: "http://xkcd.tony.services",
					description: "Who doesn't love XKCD Comics? This project uses their API to display comics using Vue. The user can navigate to the next, previous, or generate a random comic.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: true,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: true,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 6,
					title: "Google Maps API",
					img: googleMapsImg,
					github: "https://github.com/TonyRamirezLecca/google_maps_api",
					url: "http://googlemaps.tony.services/",
					description: "First time using Google Maps API ~2 years ago. A website I made to show the activies and places you can go to in Utah. Includes the Google Maps API with flags showing different locations.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: true,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 7,
					title: "American Taxi",
					img: americanTaxiImg,
					github: "https://github.com/TonyRamirezLecca/website_american_taxi",
					url: "https://americantaxiutah.com/",
					description: "American Taxi Utah is a local taxi company that not only takes to the Airport 24/7, but does local tours as well. Integrated Google Maps API to show what areas they cover in Utah",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 8,
					title: "Incredible Health Now",
					img: incredibleHealth,
					github: "https://github.com/TonyRamirezLecca/IncredibleHealthNow",
					url: "https://www.incrediblehealthnow.org/",
					description: "Incredible Health Now provides its visitors with knowledge and products for living a healthy life. Custom built site with a wordpress blog added",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 9,
					title: "Lock Hart Group Utah",
					img: lockHartGroup,
					github: "#no_github",
					url: "http://lockhartgrouputah.com/",
					description: "The Lockhart Group helps clients secure important government contracts in highly competitive and politically-charged environments.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: false,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 10,
					title: "RegEx Generator",
					img: regexGenerator,
					github: "https://github.com/TonyRamirezLecca/website_regex_generator",
					url: "https://amazing-sammet-4a37bb.netlify.com/",
					description: "Working at a Web Marketing Agency, we needed Regular Expressions for all the URLs that we wanted to target for tests or tracking. You can paste the URLS and it generates the ReGex.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                },
                {
					id: 11,
					title: "Spark Training",
					img: sparkTraining,
					github: "https://github.com/TonyRamirezLecca/website_spark_training",
					url: "https://sparktraining.net/",
					description: "A group of personal trainers reached out to me to create a website for them. One of them started with HTML and he wanted me to finish the site for them so they could launch.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                },
                {
					id: 12,
					title: "Enigma IO Psych Consulting",
					img: enigmaIOPsych,
					github: "#no_github",
					url: "http://www.enigmaiopsych.consulting/",
					description: "A psychologist in pursuit of starting a consulting business reached out to me to create a blog, store, and portfolio site for the company. Created using wordpress and css.",
					hasHTML5: false,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                },
                {
					id: 13,
					title: "The Tile Man",
					img: thetileman,
					github: "#no_github",
					url: "https://thetileman.co",
					description: "A local handy man reached out to me to create a portfolio site for him. Very simply created a wordpress website for him.",
					hasHTML5: false,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: false,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 15,
					title: "Steele Away",
					img: cabins,
					github: "https://github.com/TonyRamirezLecca/web_app_cabin_scheduler",
					url: "https://cabins.tony.services/",
					description: "A react application used to reserve 2 cabins using a calendar scheduler and stripe api to make payments. Uses MongoDB as the database. Not launched yet. It's currently being hosted statically so the Node app isn't running to process API requests.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: true,
					hasJavascript: true,
					hasNodeJS: true,
					hasExpress: true,
					hasRESTAPI: true,
                    hasMongoDB: true,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 16,
					title: "Pilot Map Tracker",
					img: pilotmap,
					github: "https://github.com/TonyRamirezLecca/web_app_pilot_map",
					url: "https://pilotmap.tony.services/",
					description: "My wife is a pilot and I thought it would be a fun project to create a react app that can record places that have been visited. Uses MongoDB as the database. Not launched yet. It's currently being hosted statically so the Node app isn't running to process API requests.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: true,
					hasJavascript: true,
					hasNodeJS: true,
					hasExpress: true,
					hasRESTAPI: true,
                    hasMongoDB: true,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 17,
					title: "Appointment Setter",
					img: appointmentSetter,
					github: "https://github.com/TonyRamirezLecca/appointment_setter_1",
					url: "#no_url",
					description: "Used Java, JavaFX, and MySQL to create a desktop application that allows counselors to add clients, schedule appointments per client, and keep track of different timezones as well.",
					hasHTML5: false,
					hasCSS3: false,
					hasVue: false,
					hasReact: false,
					hasJavascript: false,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: true,
                    hasSQL: true
				},
				{
					id: 18,
					title: "Glam Sophisticated",
					img: glamSophisticated,
					github: "#no_github",
					url: "https://glamsophisticated.com/",
					description: "A client reached out to help me create their makup academy website. I made a simple website with wordpress - which is what they asked.",
					hasHTML5: false,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: false,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 19,
					title: "Amazing Health Now",
					img: amazingHealthNow,
					github: "#no_github",
					url: "http://amazinghealthnow.org/",
					description: "One of my previous clients had me basically duplicate her site and change some images for one of her teammates. Custom made using Javascript, CSS, HTML + a wordpress blog",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				}
			],
			filteredPortfolio: [
				{
					id: 1,
					title: "Portfolio",
					img: portfolioImg,
					github: "https://github.com/TonyRamirezLecca/portfolioWebsite",
					url: "https://tony.services",
					description: "My porfolio is built using React. It's where I share my projects, my contact info, resume, Github, LinkedIn, and other professional information about me.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: true,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 14,
					title: "Bukt",
					img: bukt,
					github: "https://github.com/TonyRamirezLecca/web_app_bukt",
					url: "https://bukt.io",
					description: "I teamed up with 2 friends to create our Bucket List website. We hope to create an app soon that will track bucket lists, connect users, and more. Being created using React, Redux, Typescript, MongoDB, and Node.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: true,
					hasJavascript: true,
					hasNodeJS: true,
					hasExpress: true,
					hasRESTAPI: true,
                    hasMongoDB: true,
                    hasWordpress: false,
                    hasRedux: true,
                    hasTypescript: true,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 3,
					title: "Weather API",
					img: weatherImg,
					github: "https://github.com/TonyRamirezLecca/weather_forecast_api",
					url: "http://weather.tony.services",
					description: "A website displaying the use of the free weather API. Allows you to search a city in the United States and it will display the local weather in a clean and simple format.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: true,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 5,
					title: "XKCD Comics API",
					img: comicImg,
					github: "https://github.com/TonyRamirezLecca/xkcd_comic_api",
					url: "http://xkcd.tony.services",
					description: "Who doesn't love XKCD Comics? This project uses their API to display comics using VUE. The user can navigate to the next, previous, or generate a random comic.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: true,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: true,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 6,
					title: "Google Maps API",
					img: googleMapsImg,
					github: "https://github.com/TonyRamirezLecca/google_maps_api",
					url: "http://googlemaps.tony.services/",
					description: "A website I made to show the activies and places you can go to in Utah. Includes the Google Maps API with flags showing different locations.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: true,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 7,
					title: "American Taxi",
					img: americanTaxiImg,
					github: "https://github.com/TonyRamirezLecca/website_american_taxi",
					url: "https://americantaxiutah.com/",
					description: "American Taxi Utah is a local taxi company that not only takes to the Airport 24/7, but does local tours as well. Integrated Google Maps API to show what areas they cover in Utah",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 8,
					title: "Incredible Health Now",
					img: incredibleHealth,
					github: "https://github.com/TonyRamirezLecca/IncredibleHealthNow",
					url: "https://www.incrediblehealthnow.org/",
					description: "Incredible Health Now provides its visitors with knowledge and products for living a healthy life. Custom built site with a wordpress blog added",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 9,
					title: "Lock Hart Group Utah",
					img: lockHartGroup,
					github: "#no_github",
					url: "http://lockhartgrouputah.com/",
					description: "The Lockhart Group helps clients secure important government contracts in highly competitive and politically-charged environments.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: false,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
				},
				{
					id: 10,
					title: "RegEx Generator",
					img: regexGenerator,
					github: "https://github.com/TonyRamirezLecca/website_regex_generator",
					url: "https://amazing-sammet-4a37bb.netlify.com/",
					description: "Working at a Web Marketing Agency, we needed Regular Expressions for all the URLs that we wanted to target for tests or tracking. You can paste the URLS and it generates the ReGex.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                },
                {
					id: 11,
					title: "Spark Training",
					img: sparkTraining,
					github: "https://github.com/TonyRamirezLecca/website_spark_training",
					url: "https://sparktraining.net/",
					description: "A group of personal trainers reached out to me to create a website for them. One of them started with HTML and he wanted me to finish the site for them so they could launch.",
					hasHTML5: true,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: false,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                },
                {
					id: 12,
					title: "Enigma IO Psych Consulting",
					img: enigmaIOPsych,
					github: "#no_github",
					url: "http://www.enigmaiopsych.consulting/",
					description: "A psychologist in pursuit of starting a consulting business reached out to me to create a blog, store, and portfolio site for the company. Created using wordpress and css.",
					hasHTML5: false,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: true,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                },
                {
					id: 13,
					title: "The Tile Man",
					img: thetileman,
					github: "#no_github",
					url: "https://thetileman.co",
					description: "A local handy man reached out to me to create a portfolio site for him. Very simply created a wordpress website for him.",
					hasHTML5: false,
					hasCSS3: true,
					hasVue: false,
					hasReact: false,
					hasJavascript: false,
					hasNodeJS: false,
					hasExpress: false,
					hasRESTAPI: false,
                    hasMongoDB: false,
                    hasWordpress: true,
                    hasRedux: false,
                    hasTypescript: false,
                    hasJava: false,
                    hasSQL: false
                }
			],
			filterButtons: [
				{
					name: "All"
				},
				{
					name: "HTML5"
				},
				{
					name: "CSS3"
				},
				{
					name: "Vue"
				},
				{
					name: "React"
				},
				{
					name: "Javascript"
				},
				{
					name: "API"
				},
				{
					name: "NodeJS"
				},
				{
					name: "Express"
				},
				{
					name: "MongoDB"
                },
                {
                    name: "Wordpress"
                },
                {
                    name: "Java"
                },
                {
                    name: "Redux"
                },
                {
                    name: "Typescript"
                },
                {
                    name: "SQL"
                }
			],
			isLoading: false,
			buttonClicked: "",
			projectsBeingFiltered: ""
		};
	}

	filterPortfolio = buttonName => {
		this.setState({ projectsBeingFiltered: buttonName });
		this.loadingScreen();
		setTimeout(() => {
			let filteredPortfolio = [];
			switch (buttonName) {
				case "All":
					filteredPortfolio = this.state.portfolioSections;
					break;
				case "HTML5":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasHTML5
					);
					break;
				case "CSS":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasCSS3
					);
					break;
				case "Vue":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasVue
					);
					break;
				case "React":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasReact
					);
					break;
				case "Javascript":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasJavascript
					);
					break;
				case "NodeJS":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasNodeJS
					);
					break;
				case "Express":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasExpress
					);
					break;
				case "API":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasRESTAPI
					);
					break;
				case "MongoDB":
					filteredPortfolio = this.state.portfolioSections.filter(
						e => e.hasNodeJS
					);
                    break;
                case "Wordpress":
                    filteredPortfolio = this.state.portfolioSections.filter(
                        e => e.hasWordpress
                    );
                    break;  
                case "Redux":
                    filteredPortfolio = this.state.portfolioSections.filter(
                        e => e.hasRedux
                    );
                    break;
                case "Typescript":
                    filteredPortfolio = this.state.portfolioSections.filter(
                        e => e.hasTypescript
                    );
                    break;
                case "Java":
                    filteredPortfolio = this.state.portfolioSections.filter(
                        e => e.hasJava
                    );
                    break;    
                case "SQL":
                    filteredPortfolio = this.state.portfolioSections.filter(
                        e => e.hasSQL
                    );
                    break;           
				default:
					filteredPortfolio = this.state.portfolioSections;
					break;
			}
			this.setState({ filteredPortfolio });
		}, 1000);
	};

	loadingScreen = () => {
		this.setState({ isLoading: true });
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 2000);
	};

	showLinks = title => {
		this.setState({ buttonClicked: title });
	};

	loadingScreenStyle() {
		return !this.state.isLoading
			? "loadingScreen"
			: "loadingScreen loadingScreenVisible";
	}
	loadingScreenTextStyle() {
		return !this.state.isLoading
			? "loadingScreenText"
			: "loadingScreenText loadingTextFadeIn";
	}
	loadingScreenSliderTop() {
		return !this.state.isLoading
			? "loadingTopSlider"
			: "loadingTopSlider loadingSlidersSlideInLeft";
	}
	loadingScreenSliderBottom() {
		return !this.state.isLoading
			? "loadingBottomSlider"
			: "loadingBottomSlider loadingSlidersSlideInRight";
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ filteredPortfolio: [] });
			setTimeout(() => {
				this.setState({ filteredPortfolio: this.state.portfolioSections });
			}, 100);
		}, 500);
	}

	render() {
		return (
			<div className="portfolioContainer" style={{backgroundImage: `url(${gray})`}}>
				<div className="portfolioTitle">
					<h1>Projects</h1>
				</div>
				<div className={this.loadingScreenStyle()}>
					<div className={this.loadingScreenTextStyle()}>{`Filtering ${
						this.state.projectsBeingFiltered
					} Projects...`}</div>
					<div className={this.loadingScreenSliderTop()} />
					<div className={this.loadingScreenSliderBottom()} />
				</div>
				<div className="buttonsContainer">
					{this.state.filterButtons.map(button => {
						return (
							<PortfolioButton
								key={button.name}
								name={button.name}
								filterPortfolio={this.filterPortfolio}
							/>
						);
					})}
				</div>
				<div className="portfolioGrid">
					{this.state.filteredPortfolio.map(section => {
						return (
							<PortfolioSection
								key={section.id}
								title={section.title}
								showLinks={this.showLinks}
								buttonClicked={this.state.buttonClicked}
								img={section.img}
								github={section.github}
								url={section.url}
								description={section.description}
							/>
						);
					})}
				</div>
				<div className="portfolio-background-design1"></div>
			</div>
		);
	}
}

export default Portfolio;