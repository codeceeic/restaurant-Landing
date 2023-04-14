import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <ScrollToTop smooth color="#fe9e0c" top="2500" />

      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>

        <div className="footer-icons">
          <FaFacebookF />

          <a
            href="https://www.linkedin.com/in/ceeic/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/codeceeic"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <BsYoutube />
          <BsTwitter />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonial</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>212-7723-9108</span>
          <span>hello@foodie.com</span>
          <span>press@foodie.com</span>
          <span>contact@foodie.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
