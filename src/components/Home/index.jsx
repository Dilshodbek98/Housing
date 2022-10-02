import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import CategoryCard from "../CategoryCard";
import SubNavbar from "../SubNavbar/subNavbar";
import { Container, Wrapper } from "./style";

const HomeComponent = () => {
  return (
    <>
      <SubNavbar padding/>
      <Carousel />
      <Container>
        <Wrapper>
          <CategoryCard/>
          <Category/>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeComponent;
