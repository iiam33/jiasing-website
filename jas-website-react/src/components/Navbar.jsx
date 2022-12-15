import React from "react";
import "./css/Navbar.css";
import {
  Link,
  // Button,
  // Element,
  // Events,
  // animateScroll,
  // scrollSpy,
  // scroller,
} from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-container">
          <Link
            className="nav-links"
            activeClass="active"
            to="hero-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-10}
          >
            Home
          </Link>

          <Link
            className="nav-links"
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>

          <Link
            className="nav-links"
            activeClass="active"
            to="portfolio-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>

          <Link
            className="nav-links"
            // activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
