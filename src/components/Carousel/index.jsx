import img1 from "../../assets/images/house1.jpg";
import img2 from "../../assets/images/house2.jpg";
import img3 from "../../assets/images/house3.jpg";
import img4 from "../../assets/images/house4.jpg";
import React from 'react'
import Slider from "react-slick";
import { Container, Slide } from "./style";

const Carousel = () => {
  return (
    <Container>
      <Slider
        slidesToScroll={1}
        slidesToShow={1}
        dots={true}
        arrows={true}
        autoplay={true}
      >
        <Slide>
          <div className="content">
            <h1>Skyper Pool Partment</h1>
            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
            <h2>$5,250/month</h2>
          </div>
          <img src={img1} alt="" />
          <div className="blur"></div>
        </Slide>
        <Slide>
          <div className="content">
            <h1>New Apartment Nice Wiew</h1>
            <p>45 Glenwood Ave Hyde Park, La, MA</p>
            <h2>$4,250/month</h2>
          </div>
          <img src={img2} alt="" />
          <div className="blur"></div>
        </Slide>
        <Slide>
          <div className="content">
            <h1>Skyper Pool Partment</h1>
            <p>52 Glenwood Ave Hyde Park, NY, MA</p>
            <h2>$5,250/month</h2>
          </div>
          <img src={img3} alt="" />
          <div className="blur"></div>
        </Slide>
        <Slide>
          <div className="content">
            <h1>New Apartment Nice Wiew</h1>
            <p>74 Glenwood Ave Hyde Park, LA</p>
            <h2>$8,250/month</h2>
          </div>
          <img src={img4} alt="" />
          <div className="blur"></div>
        </Slide>
      </Slider>
    </Container>
  );
}

export default Carousel