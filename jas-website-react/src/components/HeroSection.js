import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import AnimatedLogo from "./AnimatedLogo";

import "./HeroSection.css";

function HeroSection() {
  const [scrollDown, setScrollDown] = useState(false);

  const styles = useSpring({
    from: { y: 0, maxWidth: "20vw" },
    to: { y: scrollDown ? -150 : 0, maxWidth: scrollDown ? "13vw" : "20vw" },
  });

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    console.log(scrollDown);
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollDown]);

  return (
    <>
      <div className="hero-container">
        <div className="center">
          <animated.div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              ...styles,
            }}
          >
            <div className="logo">
              <AnimatedLogo />
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
