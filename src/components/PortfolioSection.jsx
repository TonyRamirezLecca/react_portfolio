import React, { Component } from "react";
import "../styles/portfolioSection.css";
import "../styles/fonts.css";

class PortfolioSection extends Component {
  state = {};

  showPopup = () => {
    return this.props.title !== this.props.buttonClicked
      ? "portfolioSectionPopup"
      : "portfolioSectionPopup portfolioShowPopup";
  };

	hidePopup = () => {
    return this.props.title !== this.props.buttonClicked
	};

  loadImage = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="portfolioSectionContainer"
          onClick={() => this.props.showLinks(this.props.title)}
        >
          <div className="portfolioImgContainer">
            <img
              src={this.props.img}
              className="portfolioImg"
              onLoad={this.loadImage}
              alt="Cannot Display"
            />
          </div>
          <h1 className="portfolioHeader">{this.props.title}</h1>
        </div>
        <div className={this.showPopup()}>
          <div className="portfolioPopupContent">
						<div className="portfolioPopupImgCtn"><img src={this.props.img}/></div>
						<div className="portfolioPopupTextCtn">
							<h6>{this.props.title}<span className="portfolioPopupClose" onClick={() => this.props.showLinks('')}>X</span></h6>
							<div className="portfolioPopupDescription">{this.props.description}</div>
							<div className="portfolioPopupLinks"><a href={this.props.github} target="_blank">View Github</a><a href={this.props.url} target="_blank">Visit Website</a></div>
						</div>
          </div>
          <div className="portfolioPopupBackground" onClick={() => this.props.showLinks('')}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioSection;