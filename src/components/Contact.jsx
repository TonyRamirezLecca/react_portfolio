import React, { Component } from "react";
import "../styles/contact.css";
const images = require.context("../assets/images", true);
const gray = images("./gray.jpg");

class Contact extends Component {
  render() {
    return (
			<div className="contactContainer" style={{backgroundImage: `url(${gray})`}}>

        <div className="email">
          <h1>Contact Me @</h1>
          <a href="mailto:tonyramirezlecca@gmail.com">
            tonyramirezlecca@gmail.com
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;