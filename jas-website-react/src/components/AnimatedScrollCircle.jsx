import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import CircleType from "circletype";

function AnimatedCircle() {
  const circleText = useRef();

  useEffect(() => {
    new CircleType(circleText.current).radius(80);
  }, []);

  const circleStyles = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 10000 },
  });

  return (
    <animated.div
      style={{
        // width: "100px",
        // height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...circleStyles,
      }}
    >
      <div ref={circleText}>&nbsp;SCROLL • SCROLL • SCROLL • &nbsp;</div>
    </animated.div>
  );
}

function AnimatedScrollCircle() {
  return (
    <>
      <AnimatedCircle />
    </>
  );
}

export default AnimatedScrollCircle;
