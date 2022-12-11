import React from "react";

import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import PortfolioSection from "../PortfolioSection";

import "../../App.css";

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

      {/* <ScrollContainer>
        <ScrollPage>
          <Animator></Animator>
        </ScrollPage>
      </ScrollContainer> */}
    </>
  );
}

export default Home;
