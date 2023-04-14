import React from "react";
import image1 from "../Assets/organic1.webp";
import image2 from "../Assets/farm2.png";
import image3 from "../Assets/farm3.png";
import image4 from "../Assets/farm4.png";
import image5 from "../Assets/organic5.png";
import image6 from "../Assets/farm1.png";

const Partner = () => {
    return (
        <div className="marquee-section-wrapper">
            <div className="partner-section-top">
                <p className="primary-heading">Our Food Partners</p>
            </div>

            <div className="marquee-wrapper">
                <div className="partner-image-wrapper">
                    <img src={image1} alt="" />
                </div>
                <div className="partner-image-wrapper">
                    <img src={image2} alt="" />
                </div>
                <div className="partner-image-wrapper">
                    <img src={image3} alt="" />
                </div>
                <div className="partner-image-wrapper">
                    <img src={image4} alt="" />
                </div>
                <div className="partner-image-wrapper">
                    <img src={image5} alt="" />
                </div>
                <div className="partner-image-wrapper">
                    <img src={image6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partner;
