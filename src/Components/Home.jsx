import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Partner from "./Partner";
import Testimonial from "./Testimonial";
import Contacts from "./Contacts";
// import Footer from "./Footer";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
        <div className="home-container">
          <div className="home-banner-container">
              <div className="home-bannerImage-container">
                  <img src={BannerBackground} alt="" />
              </div>

              <div className="home-text-section">
                  <h1 className="primary-heading">
                      Your Favourite Food Delivered Hot & Fresh
                  </h1>
                  <p className="primary-text">
                      Healthy switcher chefs do all the prep work, like peeding, chopping
                      & marinating, so you can cook a fresh food.
                  </p>

                  <Link className="link-button" to="/menus">
                     <button className="secondary-button">Order Now <FiArrowRight /></button>
                  </Link>   
              </div>

              <div className="home-image-container">
                  <img src={BannerImage} alt="" />
              </div>
          </div>
          {/* // THIS IS THE ABOUT SECTION IN THE HOMEPAGE */}
          <About />
          <Work/>
          <Partner/>
          <Testimonial/>
          <Contacts/>
          {/* <Reservations/> */}
          {/* <Footer/> */}
      </div>     
  );
};

export default Home;
