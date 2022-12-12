import React from "react";

import Pin from "./Pin";

import "./css/PortfolioSection.css";

function PortfolioSection() {
  const pins = require
    .context("../assets/images/portfolio/", false, /\.(png|jpe?g|svg)$/)
    .keys();

  return (
    <>
      <div className="portfolio-header">
        <div className="portfolio-title">
          <p>Portfolio</p>
        </div>
      </div>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {pins.map((element, index) => {
            let image = element.split("./").pop();
            let imageUrl = require(`../assets/images/portfolio/${image}`);
            let imageName = index;
            return <Pin key={index} urls={imageUrl} name={imageName} />;
          })}
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
