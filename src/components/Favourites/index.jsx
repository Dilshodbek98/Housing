import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { PropertiesContext } from "../../context/properties";
import HouseCard from "../HouseCard";
import SubNavbar from "../SubNavbar/subNavbar";
import { Container, Section, Wrapper } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;

const Favourites = () => {
  const [state, dispatch] = useContext(PropertiesContext)
  const navigate = useNavigate();
  const fetchData = async () => {
    let res = await fetch(`${url}/houses/getAll/favouriteList`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  };
  const { data, refetch } = useQuery("data", fetchData, {
    onSuccess: () => dispatch({ type: "refetch", payload: refetch }),
  });
  return (
    <>
      <SubNavbar padding />
      <Container>
        <Wrapper>
          <Section>
            {data?.data.length ? (
              data?.data.map((value) => {
                return (
                  <HouseCard
                    data={value}
                    key={value?.id}
                    onClick={() => navigate(`/houseitem/${value.id}`)}
                  />
                );
              })
            ) : (
              <h1>Data was not found</h1>
            )}
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};

export default Favourites;
