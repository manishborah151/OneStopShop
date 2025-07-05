import React from "react";
import "./CSS/Shop.css";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
// import EmailSubscribe from "../components/EmailSubscribe/EmailSubscribe";

const Shop = () => {
  return (
    <>
      <div className="shop">
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        {/* <EmailSubscribe /> */}
      </div>
    </>
  );
};

export default Shop;
