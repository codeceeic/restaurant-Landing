import React from "react";
import { Link } from "react-router-dom";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

function About() {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        A well-balanced diet provides all of the: energy you need to keep active throughout the day. nutrients you need for growth and repair, helping you to stay strong and healthy and help to prevent diet-related illness, such as some cancers.
        </p>
        <p className="primary-text">
        Eating a healthy diet is all about feeling great, having more energy, improving your health, and boosting your mood.
        </p>
        <div className="about-buttons-container">
          <Link className="learnmore-link" to={"/company"}>
          <button className="secondary-button">Learn More</button>
          </Link>
            <button className="watch-video-button"> <BsFillPlayCircleFill/> Watch Video </button>
        </div>
      </div>
    </div>
  );
}

export default About;
