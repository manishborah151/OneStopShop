import React from "react";
import "./Offers.css";
import exclusive_image from "../../assets/p4Li2.png";

// import {useNavigate} from "react-router-dom";

const Offers = () => {
  // const navigate = useNavigate();
  return (
    <div className="offers">
      <div className="offers-left">
        <h1 className="h1">Exclusive</h1>
        <h1 className="h1">Offers For You</h1>
        <p className="p">ONLY ON BEST SELLERS PRODUCTS</p>
        {/* <button onClick={() => navigate("/offers")}>Check Now</button> */}
        <div class="Btn-container">
          <a href="#" class="button type--C">
            <div class="button__line"></div>
            <div class="button__line"></div>
            <span class="button__text">CHECK OUT</span>
            <div class="button__drow1"></div>
            <div class="button__drow2"></div>
          </a>
        </div>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
