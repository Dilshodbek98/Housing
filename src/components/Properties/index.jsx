import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseCard from "../HouseCard";
import SubNavbar from "../SubNavbar/subNavbar";
import { Container, Section, Wrapper } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;

const PropertiesComponent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const {search}
   = useLocation()
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);
  return (
    <>
      <SubNavbar padding/>
      <Container>
        <Wrapper>
          <Section>
            {data.map((value) => {
              return <HouseCard data={value} key={value.id} onClick={() => navigate(`/houseitem/${value.id}`)} />;
            })}
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};

export default PropertiesComponent;
