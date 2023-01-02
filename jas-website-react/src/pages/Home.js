import React, { useEffect, useRef, useState, useMemo } from "react";

import { Element } from "react-scroll";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

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
  const refContact = useRef(null);
  const [tween, setTween] = useState(null);

  // const isInHeroSection = useIsInViewport(refHero);

  const isInAboutSection = useIsInViewport(refAbout);

  const isInPortfolioSection = useIsInViewport(refPortfolio);

  const isInContactSection = useIsInViewport(refContact);

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
        end: "+=30%",
        markers: false,
        toggleActions: "play reset play reset",
        // onUpdate: (self) => {
        //   setProgress((self.progress * 100) | 0);
        // }
      },
    });

    setTween(scrollTween);
  }, [tween]);

  return (
    <>
      <Navbar />
      <Element name="hero-section">
        <div ref={refHero} className="hero-section">
          <HeroSection refAbout={refAbout} />
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

      <Element name="contact-section">
        <div ref={refContact} className="contact-section">
          <ContactSection isActive={isInContactSection} />
        </div>
      </Element>
    </>
  );
}

export default Home;
