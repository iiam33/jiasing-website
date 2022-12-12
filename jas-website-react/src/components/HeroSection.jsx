import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import AnimatedLogo from "./AnimatedLogo";

import name from "../assets/images/JiaSing_Namesvg.svg";
import title from "../assets/images/JiaSing_ConceptArtistIllustratorsvg.svg";

import "./css/HeroSection.css";

function Name({ scrollDown }) {
  const nameStyles = useSpring({
    from: { opacity: 0, y: -30 },
    to: {
      opacity: scrollDown ? 1 : 0,
      y: scrollDown ? -140 : -30,
    },
    delay: scrollDown ? 100 : 0,
  });

  return (
    <animated.div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "11vw",
        ...nameStyles,
      }}
    >
      <img className="name" src={name} alt="Name" />
    </animated.div>
  );
}

function JobTitle({ scrollDown }) {
  const titleStyles = useSpring({
    from: { opacity: 0, y: 0 },
    to: {
      opacity: scrollDown ? 1 : 0,
      y: scrollDown ? -50 : 0,
    },
    delay: scrollDown ? 250 : 0,
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
      <img className="title" src={title} alt="Title" />
    </animated.div>
  );
}

function HeroSection() {
  const [scrollDown, setScrollDown] = useState(false);

  const translateStyles = useSpring({
    from: { y: 0, maxWidth: "20vw" },
    to: { y: scrollDown ? -130 : 0, maxWidth: scrollDown ? "10vw" : "20vw" },
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
        <div className="hero-container">
          <animated.div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              ...translateStyles,
            }}
          >
            <div className="logo">
              <AnimatedLogo />
            </div>
          </animated.div>
          <Name scrollDown={scrollDown} />
          <JobTitle scrollDown={scrollDown} />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
