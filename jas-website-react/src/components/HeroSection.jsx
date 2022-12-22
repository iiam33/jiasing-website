import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import AnimatedLogo from "./AnimatedLogo";
import AnimatedStar from "./AnimatedStar";

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
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "60vw",
        ...titleStyles,
      }}
    >
      {/* <img className="title" src={title} alt="Title" /> */}
      <div className="hero-job-title">
        <div className="job-title">
          <p>Concept Artist / Illustration</p>
        </div>
      </div>
    </animated.div>
  );
}

function HeroSection({ isActive }) {
  const [scrollDown, setScrollDown] = useState(false);

  const translateStyles = useSpring({
    from: { y: 160, maxWidth: "20vw" },
    to: { y: scrollDown ? 30 : 160, maxWidth: scrollDown ? "10vw" : "20vw" },
  });

  // const shrinkStyles = useSpring({
  //   from: { maxHeight: "100vh" },
  //   to: { maxHeight: scrollDown ? "90vh" : "100vh" },
  // });

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
      {/* <animated.div
        style={{
          ...shrinkStyles,
        }}
        className="hero-wrapper"
      > */}
      <div className="hero-wrapper">
        <div className="star">
          <AnimatedStar isActive={isActive} />
        </div>
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
          <FadeUpName scrollDown={scrollDown} />
          <FadeUpJobTitle scrollDown={scrollDown} />
        </div>
      </div>
      {/* </animated.div> */}
    </>
  );
}

export default HeroSection;
