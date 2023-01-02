import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { animateScroll as scroll } from "react-scroll";

import AnimatedLogo from "./AnimatedLogo";
import AnimatedStar from "./AnimatedStar";
import AnimatedScrollableIndicator from "./AnimatedScrollableIndicator";
import AnimatedScrollCircle from "./AnimatedScrollCircle";

import name from "../assets/images/JiaSing_Namesvg.svg";

import "./css/HeroSection.css";

function FadeUpName({ scrollDown }) {
  const nameStyles = useSpring({
    from: { opacity: 0, y: 90 },
    to: {
      opacity: scrollDown ? 1 : 0,
      y: scrollDown ? 10 : 90,
    },
    delay: scrollDown ? 100 : 0,
  });

  return (
    <animated.div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "11vw",
        maxWidth: "11vw",
        ...nameStyles,
      }}
    >
      <img className="name" src={name} alt="Name" />
    </animated.div>
  );
}

function FadeUpJobTitle({ scrollDown }) {
  const titleStyles = useSpring({
    from: { opacity: 0, y: 90 },
    to: {
      opacity: scrollDown ? 1 : 0,
      y: scrollDown ? 40 : 90,
    },
    delay: scrollDown ? 250 : 0,
  });

  return (
    <animated.div
      style={{
        maxWidth: "60vw",
        ...titleStyles,
      }}
    >
      <div className="job-title">
        <p>Concept Artist / Illustration</p>
      </div>
    </animated.div>
  );
}

function scrollToAboutSection() {
  scroll.scrollTo(1265, {
    duration: 1500,
    delay: 0,
  });
}

function HeroSection() {
  const [scrollDown, setScrollDown] = useState(false);

  const translateStyles = useSpring({
    from: {
      y: 130,
    },
    to: {
      y: scrollDown ? 10 : 130,
      width: scrollDown ? "10vw" : "20vw",
      maxWidth: scrollDown ? "10vw" : "20vw",
    },
  });

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollDown]);

  return (
    <>
      <div className="hero-wrapper">
        <div className="left-indicator">
          <div className="indicator-wrapper">
            <div className="text-indicator">
              <AnimatedScrollCircle />
            </div>
            <div className="arrow-indicator" onClick={scrollToAboutSection}>
              <AnimatedScrollableIndicator />
            </div>
          </div>
        </div>
        <div className="right-indicator">
          <div className="indicator-wrapper">
            <div className="arrow-indicator" onClick={scrollToAboutSection}>
              <AnimatedScrollableIndicator />
            </div>
            <div className="text-indicator">
              <AnimatedScrollCircle />
            </div>
          </div>
        </div>
        <div className="star">
          <AnimatedStar />
        </div>
        <div className="hero-container">
          <div className="logo-container">
            <animated.div
              style={{
                ...translateStyles,
              }}
            >
              <div className="logo">
                <AnimatedLogo />
              </div>
            </animated.div>
          </div>
          <div className="name-container">
            <FadeUpName scrollDown={scrollDown} />
          </div>
          <div className="job-title-container">
            <FadeUpJobTitle scrollDown={scrollDown} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
