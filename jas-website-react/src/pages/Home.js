import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";

import "../App.css";

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
  // Animator,
  ScrollContainer,
  ScrollPage,
  //   batch,
  //   Fade,
  //   FadeIn,
  //   FadeOut,
  //   Move,
  //   MoveIn,
  //   MoveOut,
  //   Sticky,
  //   StickyIn,
  //   StickyOut,
  //   Zoom,
  //   ZoomIn,
  //   ZoomOut,
} from "react-scroll-motion";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Element name="hero-section"> */}
      {/* <ScrollContainer className="container">
        <ScrollPage className="section"> */}
      {/* <Animator> */}
      <Element name="hero-section" className="hero-section">
        <HeroSection />
      </Element>
      {/* </ScrollPage> */}

      <Element name="about-section" className="portfolio-section">
        <PortfolioSection />
      </Element>

      {/* <ScrollContainer>
        <ScrollPage> */}
      <Element name="portfolio-section" className="portfolio-section">
        <PortfolioSection />
      </Element>
      {/* </ScrollPage>
      </ScrollContainer> */}
      {/* </Animator>
          </ScrollPage>
        </ScrollContainer> */}
      {/* </Element> */}

    </>
  );
}

export default Home;
