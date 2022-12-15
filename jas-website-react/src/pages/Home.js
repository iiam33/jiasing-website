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
  console.log("isInViewport1: ", isInHeroSection);

  const isInAboutSection = useIsInViewport(refAbout);
  console.log("isInViewport2: ", isInAboutSection);

  const isInPortfolioSection = useIsInViewport(refPortfolio);
  console.log("isInViewport3: ", isInPortfolioSection);

  return (
    <>
      <Navbar />
      <Element name="hero-section">
        <div ref={refHero} className="hero-section">
          <HeroSection />
        </div>
      </Element>

      <Element name="about-section">
        <div ref={refAbout} className="about-section">
          <AboutSection isActive={isInAboutSection} />
        </div>
      </Element>

      <Element name="portfolio-section">
        <div ref={refPortfolio} className="portfolio-section">
          <PortfolioSection isActive={isInPortfolioSection} />
        </div>
      </Element>
    </>
  );
}

export default Home;
