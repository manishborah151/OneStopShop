import React from "react";
import "./Hero.css";

import {ArrowBigRight} from "lucide-react";
// import hero_image from "../../assets/prodBanners/p5L1.png";
// import heroVid from "../../assets/prodBanners/p5.mp4";
import {ShopContext} from "../../Context/ShopContext";
import {Link} from "react-router-dom";
import VideoSlider from "../HeroSlider/VideoSlider";

const Hero = () => {
  return (
    <div className="hero">
      <VideoSlider />
      {/* <div className="hero-left">
        <h2 className="h2h">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p className="ph">New</p>
          </div>
          <p className="ph">Collections</p>
          <p className="ph">For Everyone</p>
        </div>
        <Link className="link" to={"/collections"}>
          <div className="hero-latest-btn">
            <div className="div">Latest Collection</div>
            <ArrowBigRight />
          </div>
        </Link>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />{" "}
      </div> */}
    </div>
  );
};

export default Hero;
