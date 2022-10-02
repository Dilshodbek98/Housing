import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://houzing-app.herokuapp.com/api/v1/categories/list")
      .then((response) => response.json())
      .then((response) => setData(response?.data || []));
  }, []);
  return (
    <Container>
      <h1>Category</h1>
      <p>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Slider slidesToShow={3} arrows={true} dots={true} autoplay={true}>
        {data.map((value) => {
          return (
            <CategoryCard
              data={value}
              key={value.id}
              onClick={() => navigate(`/properties?categoty=${value.name}`)}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
