import "./styles/app.css";
import "./styles/fonts.css";
import React, { Component } from "react";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Analytics from "./components/Analytics";
import Skills from "./components/Skills";
import ABTesting from "./components/ABTesting";
import Footer from "./components/Footer";
const images = require.context("./assets/images", true);
const gray = images("./gray.jpg");


class App extends Component {

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="portfolioWrapper" id="portfolio">
          <Portfolio />
        </div>
				<div className="analyticsWrapper" id="analytics" style={{backgroundImage: `url(${gray})`}}>
          <Analytics />
        </div>
        <div className="skillsWrapper" id="skills" style={{backgroundImage: `url(${gray})`}}>
          <Skills />
					<div className="skillsWrapperHalfBackground" ></div>
        </div>
        <div className="abtestingWrapper" id="abtesting">
          <ABTesting />
        </div>
        <div className="aboutWrapper" id="about">
          <About />
        </div>
        <div className="contactWrapper" id="contact">
          <Contact />
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    );
  }

}

export default App;