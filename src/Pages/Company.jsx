import React from 'react';
import { Link } from "react-router-dom";
import image from '../Assets/foodie_open.jpg';
import image1 from '../Assets/foodie_team.jpg';

const Company = () => {
  return (
    <div className='company-container'>
        <div className='company-about-top'>
            <h4 className='primary-heading'>ABOUT FOODIE</h4>
            <p className='company-text'>Foodie is an elegant fine dining restaurant with an emphasis on natural, organic food. <br /> sourced from the world most dedicated farmers and food producers.
            </p> <br />
            <p className='company-text'>We create beautifully crafted dishes, seeking out the best of world produce, with a passion <br /> to delight and share our curiosity and our love of delicious artisanal food</p>
            <div>
                <Link className='amazingdish-link' to={"/menus"}>
                    <a className='amazing-dish-btn' >
                        <h6>Find Our Amazing Dishes</h6>
                    </a>
                </Link>
                
            </div>
        </div>

  

        <div className=''>
            <div className='company-mid-section'>
                <img src={image} alt="" />
                <span>
                Since opening in August 2017, Foodie has received numerous awards including three stars in the 2021 React Guide, 10/10 in the Good Food Guide, five AA Javascript, Best Restaurant at the Coding Food and Drink Awards, New Restaurant of the Year by The FrontEnd Guild, and the Service Award at the National Restaurant Awards.
                <br /> <br />
                Grace also received the World’s Best Female Chef Award by the World’s 50 Best Restaurants.
                </span>
            </div>
        </div>

        <div className='company-mid-section2-header'>
            <h4>THE TEAM</h4>
                
            <div className='company-mid-section2'>
                <span>At the very heart of everything we do is our team. We are blessed to have  loyal hospitality professionals who continually strive to develop themselves and improve the guest experience at Foodie.</span>
                <img src={image1} alt="" />
                
            </div>
            <a className='foodie-team-btn' href="">THE FOODIE TEAM</a>
        </div>
        
        <Link className='reserve-link' to={"/reservations"}>
            <div className='reserve-table'>
                <h3>
                    <a href="">RESERVE YOUR TABLE</a> 
                </h3>
            </div>
        </Link>
        
    </div>
  )
}

export default Company