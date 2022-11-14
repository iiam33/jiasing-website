import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";

import {
  // Link,
  // Button,
  Element,
  // Events,
  // animateScroll,
  // scrollSpy,
  // scroller,
} from "react-scroll";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  // batch,
  // Fade,
  // FadeIn,
  // FadeOut,
  // Move,
  // MoveIn,
  // MoveOut,
  // Sticky,
  // StickyIn,
  // StickyOut,
  // Zoom,
  // ZoomIn,
  // ZoomOut,
} from "react-scroll-motion";

function Home() {
  return (
    <>
      <Navbar />
      <Element name="hero-section" className="hero-section">
      <ScrollContainer>
        <ScrollPage>
          <Animator>
            {/* <Element name="hero-section" className="hero-section"> */}
              <HeroSection />
            {/* </Element> */}

            {/* <Element name="test1" className="element">
        test 1
      </Element> */}
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      </Element>

      <ScrollContainer>
        <ScrollPage>
          <Animator></Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default Home;
