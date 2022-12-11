import React from "react";

import Pin from "./Pin";

import "./PortfolioSection.css";

function importPortfolioImages(context) {
  const images = [];

  context.keys().forEach((key) => {
    const image = key.split("./").pop();
    images.push(image);
  });

  return images;
}

function getImageName(images) {
  const imageNames = [];

  images.forEach((key) => {
    const ext = key.split(".").at(-1);
    const imageName = key.replace("." + ext, "");
    imageNames.push(imageName);
  });

  return imageNames;
}

function PortfolioSection() {
  const pins = importPortfolioImages(
    require.context(
      "../../public/images/portfolio/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const imageNames = getImageName(pins);

  return (
    <>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {pins.map((element, index) => {
            let imageUrl = "images/portfolio/" + element;
            let imageName = imageNames[index];
            return <Pin key={index} urls={imageUrl} name={imageName} />;
          })}
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
