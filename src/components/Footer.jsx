import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <p>Tony Lecca Web Development</p>
        <ul>
          <a href="https://github.com/TonyRamirezLecca">
            <li>Github</li>
          </a>
          <a href="https://www.linkedin.com/in/tonyramirezlecca/">
            <li>LinkedIn</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Footer;