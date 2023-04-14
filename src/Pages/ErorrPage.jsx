import React from "react";
import { Link } from "react-router-dom";
import image from "../Assets/errorfood.png";


const ErorrPage = () => {
  return (
    <div className="notfound">
      <h1 className="notfound-heading">Oops! Page not found. </h1>
      <img src={image} alt="" />
      <h1 className="notfound-page">404</h1>
      <p className="notfound-p">We can't find the page you are looking for.</p>
      <Link className="goback-link" to={"/"}>
        <button className="goback-button"> GO BACK HOME</button>
      </Link>
      
    </div>
  );
};

export default ErorrPage;
