import React from "react";
import Marquee from "react-fast-marquee";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic2 from "../Assets/courtney.png";
import ProfilePic3 from "../Assets/Julia.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper">
      <div className="work-section-top">
        <p className="primary-heading">Testimonial</p>
        <h1 className="primary-subheading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ab,
          sunt voluptatum quibusdam molestias odio?
        </p>
      </div>

      <div className="testimonial-marquee-wrapper">
        <Marquee play={true} pauseOnHover={true} speed={70} gradient={false}>
          <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
              "Absolutely love this place! The food is always great and portion
              are huge and very reasonably priced. Service is of top notch.
              Always friendly and courteous! Owner is a gem!"
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Brain Smith</h2>
          </div>

          <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
              "Stopped here for breakfast because this has been a good
              restaurant for meals at any time of day for many years now. You
              can just count on a decent meal when you stop here.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Yuli Vladmir</h2>
          </div>

          <div className="testimonial-section-bottom">
            <img src={ProfilePic2} alt="" />
            <p>
              I went with my family around December - February time, and I had
              ordered just a simple lunch, okay, the service was terrible when
              the waitress took our order she had a straight "
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Courtney Shappell</h2>
          </div>

          <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
              We stopped in for lunch. I found the food was just ok. Tenderloin,
              FF, slaw, tea was 11.00. The service was a bright spot. It was
              clean as well. Not sure if I will go back.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Allen Iverson</h2>
          </div>

          <div className="testimonial-section-bottom">
            <img src={ProfilePic3} alt="" />
            <p>
              "I was so impressed with my breakfast this morning! I tried the
              Fried Green Tomato Benedict and my boyfriend got the Crab Cakes
              Benedict.
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>Julia Hudson</h2>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
