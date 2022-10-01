import React from "react";
import Carousel from "../components/Carousel";
import HouseCard from "../components/HouseCard";
import SubNavbar from "../components/SubNavbar/subNavbar";

const Home = () => {
  return (
    <div>
      <SubNavbar />
      <Carousel />
      <HouseCard />
    </div>
  );
};

export default Home;
