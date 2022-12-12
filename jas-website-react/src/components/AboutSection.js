import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import "./css/AboutSection.css";

function FadeInOpacity({ isActive }) {
  const fadeInStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: isActive ? 0.4 : 0 },
    delay: 250,
    config: { duration: 900 },
  });

  return (
    <>
      <animated.div
        style={{
          backgroundColor: "#000000",
          width: "100%",
          height: "100%",
          ...fadeInStyles,
        }}
      />
    </>
  );
}

function FadeInMoveLeft({ isActive }) {
  const moveLeftStyles = useSpring({
    from: { opacity: 0, x: 0 },
    to: { opacity: isActive ? 1 : 0, x: isActive ? -50 : 0 },
    delay: isActive ? 300 : 200,
    config: { duration: isActive ? 900 : 600},
  });

  return (
    <>
      <animated.div
        style={{
          ...moveLeftStyles,
        }}
      >
        <img src={require(`../assets/images/JiaSing_About.jpg`)} alt="about" />
        {/* <img src={require(`../assets/images/JiaSing_About.jpg`)} alt="about" /> */}
      </animated.div>
    </>
  );
}

function About({ isActive }) {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-left-container">
          <div className="about-image">
            <FadeInMoveLeft isActive={isActive} />
          </div>
        </div>
        <div className="about-right-container"></div>
        <FadeInOpacity isActive={isActive} />
      </div>
    </>
  );
}

export default About;
