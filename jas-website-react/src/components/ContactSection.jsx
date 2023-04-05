import React from "react";
import { TypeAnimation } from "react-type-animation";

import "./css/ContactSection.css";

function ContactSection({ isActive }) {
  return (
    <>
      <div className="contact-header">
        <div className="contact-title">
          {isActive ? (
            <TypeAnimation
              sequence={["", 800, "Let's Talk", 5000]}
              cursor={true}
              speed={40}
              repeat={Infinity}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactSection;
