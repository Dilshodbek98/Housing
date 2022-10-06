import React from "react";
import Banner from "../Banner";
import Carousel from "../Carousel";
import Category from "../Category";
import Recent from "../Recent";
import Recommended from "../Recommended";
import Testimonials from "../Testimonials";
import WhyChooseUs from "../WhyChooseUs";

const HomeComponent = () => {
  return (
    <div>
      <Carousel />
      <Recommended/>
      <WhyChooseUs />
      <Category/>
      <Banner/>
      <Recent/>
      <Testimonials/>
    </div>
  );
};

export default HomeComponent;
