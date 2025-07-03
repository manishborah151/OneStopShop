import React, {useContext} from "react";
import "./Hero.css";

import {ArrowBigRight} from "lucide-react";
import hero_image from "../../assets/prodBanners/p5L1.png";
import {ShopContext} from "../../Context/ShopContext";
import {Link} from "react-router-dom";

const Hero = () => {
  const {theme} = useContext(ShopContext);
  return (
    <div className={"hero_" + theme}>
      <div className="hero-left">
        <h2 className={"h2h_" + theme}>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p className={"ph_" + theme}>New</p>
          </div>
          <p className={"ph_" + theme}>Collections</p>
          <p className={"ph_" + theme}>For Everyone</p>
        </div>
        <Link className="link" to={"/collections"}>
          <div className="hero-latest-btn">
            <div className={"div_" + theme}>Latest Collection</div>
            <ArrowBigRight />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
