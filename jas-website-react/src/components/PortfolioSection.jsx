import React from "react";
import { useState, useEffect } from "react";

import Pin from "./Pin";

// import portfolio from "../assets/images/portfolio/01"

import "./css/PortfolioSection.css";

function ImportPortfolioImages(context) {
  const [images, setImages] = useState([]);

  // const images = [];
  useEffect(() => {
    context.keys().forEach((key) => {
      const filename = key.split("./").pop();
      const ext = filename.split(".").at(-1);
      const image = filename.replace("." + ext, "");
      // images.push(image);

      setImages((images) => [...images, image]);
    });
  }, [context]);

  return images;
}

function PortfolioSection() {
  // const pins = ImportPortfolioImages(
  //   require.context(
  //     "../assets/images/portfolio/",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );
  const pins = require
    .context("../assets/images/portfolio/", false, /\.(png|jpe?g|svg)$/)
    .keys();

  return (
    <>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {pins.map((element, index) => {
            let image = element.split("./").pop();
            console.log(image);
            let imageUrl = require(`../assets/images/portfolio/${image}`);
            let imageName = pins[index];
            return <Pin key={index} urls={imageUrl} name={imageName} />;
          })}
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
