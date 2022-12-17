import React, { useEffect, useRef, useState, useMemo } from "react";

import { Element } from "react-scroll";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";

import "../App.css";

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
  const [tween, setTween] = useState(null);

  const isInHeroSection = useIsInViewport(refHero);

  const isInAboutSection = useIsInViewport(refAbout);

  const isInPortfolioSection = useIsInViewport(refPortfolio);

  useEffect(() => {
    if (tween) return;

    gsap.registerPlugin(ScrollTrigger);
    let scrollTween = gsap.to(refHero.current, {
      ease: "none",
      scrollTrigger: {
        trigger: refHero.current,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        start: "top 0%",
        end: "+=10%",
        markers: false,
        toggleActions: "play reset play reset",
        // onUpdate: (self) => {
        //   setProgress((self.progress * 100) | 0);
        // }
      }
    });

    setTween(scrollTween);
  }, []);

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
