import React, { useEffect, useRef, useState, useMemo } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";

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

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function Home() {
  const refHero = useRef(null);
  const refAbout = useRef(null);
  const refPortfolio = useRef(null);

  const isInHeroSection = useIsInViewport(refHero);
  // console.log("isInViewport1: ", isInHeroSection);

  const isInAboutSection = useIsInViewport(refAbout);
  // console.log("isInViewport2: ", isInAboutSection);

  const isInPortfolioSection = useIsInViewport(refPortfolio);
  // console.log("isInViewport3: ", isInPortfolioSection);

  return (
    <>
      {/* <Navbar /> */}
      <div ref={refHero}>
        <Element name="hero-section" className="hero-section">
          <HeroSection />
        </Element>
      </div>

      <div ref={refAbout}>
        <Element name="about-section" className="about-section">
          <AboutSection isActive={isInAboutSection && !isInHeroSection && !isInPortfolioSection} />
        </Element>
      </div>

      <div ref={refPortfolio}>
        <Element name="portfolio-section" className="portfolio-section">
          <PortfolioSection />
        </Element>
      </div>
    </>
  );
}

export default Home;
