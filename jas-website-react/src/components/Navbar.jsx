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
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            className="nav-links"
            activeClass="active"
            to="hero-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            section1
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
