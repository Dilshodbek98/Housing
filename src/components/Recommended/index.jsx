import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import HouseCard from "../HouseCard";
import { Container, Main, Wrapper } from "./style";

const Recommended = ({ padnot }) => {
  const [data, setData] = useState([]);
  const {REACT_APP_BASE_URL} = process.env;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/houses/list`)
      .then((response) => response.json())
      .then((response) => setData(response?.data || []));
    // eslint-disable-next-line
  }, []);
  return (
    <Main>
      <Wrapper padnot={padnot}>
        <Container>
          <div className="content">
            <h1>Recommended</h1>
            <p>
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </p>
          </div>
          <Slider slidesToShow={3} arrows={true} dots={true} autoplay={true}>
            {data.map((value) => {
              return (
                <HouseCard
                  data={value}
                  key={value.id}
                  onClick={() => navigate(`/houseitem/${value.id}`)}
                />
              );
            })}
          </Slider>
        </Container>
      </Wrapper>
    </Main>
  );
};

export default Recommended;
