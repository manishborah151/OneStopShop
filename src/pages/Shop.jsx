import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
// import EmailSubscribe from "../components/EmailSubscribe/EmailSubscribe";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      {/* <EmailSubscribe /> */}
    </>
  );
};

export default Shop;
