import React from "react";
import Banner from "../components/layout/Banner";
import AditionalInfo from "../components/layout/AditionalInfo";
import Advertise from "../components/layout/Advertise";
import NewArrival from "../components/layout/NewArrival";
import Bestseller from "../components/layout/Bestseller";
import SpeOffers from "../components/layout/SpeOffers";
import MiddleAdvertise from "../components/layout/MiddleAdvertise";

const Home = () => {
  return (
    <>
      <Banner />
      <AditionalInfo />
      <Advertise />
      <NewArrival />
      <Bestseller />
      <MiddleAdvertise />
      <SpeOffers />
    </>
  );
};

export default Home;
