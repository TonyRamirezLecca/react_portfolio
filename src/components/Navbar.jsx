import React, { Component } from "react";
import "../styles/navbar.css";
import resume from "../assets/documents/ResumePublic.pdf";

class Navbar extends Component {
  state = {
    menuToggled: false
  };

  toggleMenu = () => {
    return this.state.menuToggled ? "menu menuVisible" : "menu";
  };

  showMenu = () => {
    if (this.state.menuToggled) {
      this.setState({ menuToggled: false });
      this.toggleMenu();
      document.documentElement.style.overflowY = "";
    } else {
      this.setState({ menuToggled: true });
      this.toggleMenu();
      document.documentElement.style.overflowY = "hidden";
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="menuButton" onClick={this.showMenu}>
            {this.state.menuToggled ? (
							<p className="menuToggled">...</p>
            ) : (
							<p>...</p>
            )}
          </div>
        </div>
        <div className={this.toggleMenu()}>
          <div className="menuLinks">
            <div className="menuNavigationLinks">
              <div className="slidingMenu">
                <a href="#about" onClick={this.showMenu}>
                  <p>About</p>
                </a>
              </div>
              <div className="slidingMenu">
                <a href="#portfolio" onClick={this.showMenu}>
                  <p>Portfolio</p>
                </a>
              </div>
              <div className="slidingMenu" onClick={this.showMenu}>
                <a href="#contact">
                  <p>Contact</p>
                </a>
              </div>
            </div>
            <div className="menuLinkedInGithubLinks">
              <a
                href="https://github.com/TonyRamirezLecca"
                onClick={this.showMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/tonyramirezlecca"
                onClick={this.showMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={resume}
                className="menuLinkedInGithubLinks"
                onClick={this.showMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;