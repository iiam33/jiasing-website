import React from "react";
import { useSpring, animated } from "react-spring";

import Pin from "./Pin";

import "./css/PortfolioSection.css";

function FadeUpTitle({ isActive }) {
  const titleStyles = useSpring({
    from: { opacity: 0, y: 0 },
    to: {
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 50,
    },
    delay: isActive ? 400 : 0,
    config: { duration: isActive ? 400 : 0 },
  });

  return (
    <animated.div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "50vw",
        ...titleStyles,
      }}
    >
      <div className="portfolio-header">
        <div className="portfolio-title">
          <p>Portfolio</p>
        </div>
      </div>
    </animated.div>
  );
}

function FadeUp({ isActive, index, imageUrl, imageName }) {
  const titleStyles = useSpring({
    from: { opacity: 0, y: 0 },
    to: {
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 50,
    },
    delay: isActive ? 800 : 0,
    config: { duration: isActive ? 700 : 0 },
  });

  return (
    <animated.div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "50vw",
        ...titleStyles,
      }}
    >
      <Pin key={index} urls={imageUrl} name={imageName} />
    </animated.div>
  );
}

function PortfolioSection({ isActive }) {
  const pins = require
    .context("../assets/images-hr/portfolio/", false, /\.(png|jpe?g|svg)$/)
    .keys();

  return (
    <>
      <FadeUpTitle isActive={isActive} />
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          {pins.map((element, index) => {
            let image = element.split("./").pop();
            let imageUrl = require(`../assets/images-hr/portfolio/${image}`);
            let imageName = index;
            return <Pin key={index} urls={imageUrl} name={imageName} />;
            // return (
            //   <FadeUp
            //     index={index}
            //     imageUrl={imageUrl}
            //     imageName={imageName}
            //     isActive={isActive}
            //   />
            // );
          })}
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
