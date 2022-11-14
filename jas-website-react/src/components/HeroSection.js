import React from "react";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

// import ReactCSSTransitionGroup from 'react-transition-group';

import "./HeroSection.css";

function HeroSection() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY < 0) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };

    console.log(scrollUp);
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollUp]);

  return (
    <>
      <div className="hero-container" name="hero-section">
        <div className="center">
          <div className="logo">
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
