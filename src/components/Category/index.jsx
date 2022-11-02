import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { Container, Main, Wrapper } from "./style";

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/categories/list`)
      .then((response) => response.json())
      .then((response) => setData(response?.data || []));
  }, []);
  return (
    <Main>
      <Wrapper>
        <Container>
          <div className="content">
            <h1>Category</h1>
            <p>
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </p>
          </div>
          <Slider slidesToShow={3} arrows={true} dots={true} autoplay={true}>
            {data.map((value) => {
              return (
                <CategoryCard
                  data={value}
                  key={value.id}
                  onClick={() =>
                    navigate(`/properties?categoty_id=${value.id}`)
                  }
                />
              );
            })}
          </Slider>
        </Container>
      </Wrapper>
    </Main>
  );
};

export default Category;
