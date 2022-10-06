import img1 from "../../assets/images/house1.jpg";
import React from 'react'
import { Container, Slide } from "./style";
import { Button } from "../Generics";

const Banner = () => {
  return (
    <Container>
      <Slide>
        <div className="content">
          <h1>
            Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
          </h1>
          <Button>Read more</Button>
        </div>
        <img src={img1} alt="" />
        <div className="blur"></div>
      </Slide>
    </Container>
  );
}

export default Banner