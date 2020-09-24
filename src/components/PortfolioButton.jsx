import React, { Component } from "react";
import "../styles/portfolioButton.css";

class PortfolioButton extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.filterPortfolio(this.props.name)}>
          <div className="buttonText">{this.props.name}</div>
          <div className="topSlider" />
          <div className="bottomSlider" />
          <div className="buttonBackground" />
        </button>
      </React.Fragment>
    );
  }
}

export default PortfolioButton;