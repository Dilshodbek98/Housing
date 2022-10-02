import React, { useRef } from "react";
import { Input, Button } from "../Generics";
import { Container, Main, MenuWrapper, Section } from "./style";
import settingIcon from "../../assets/icons/setting.svg";
import searchIcon from "../../assets/icons/search.svg";
import housesIcon from "../../assets/icons/houses.svg";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const SubNavbar = (props) => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const ziCodeRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPirceRef = useRef();
  const maxPirceRef = useRef();

  const navigate = useNavigate();
  const location = useLocation()
  const query = useSearch()

  const onChange = ({target: {value, name}}) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)  
  }


  const menu = (
    <MenuWrapper>
      <h2>Address</h2>
      <Section>
        <Input defaultValue={query.get("country")} onChange={onChange} name="country" ref={countryRef} width={200} placeholder={"Country"} />
        <Input defaultValue={query.get("region")} onChange={onChange} name="region" ref={regionRef} width={200} placeholder={"Region"} />
        <Input defaultValue={query.get("city")} onChange={onChange} name="city" ref={cityRef} width={200} placeholder={"City"} />
        <Input defaultValue={query.get("zipcode")} onChange={onChange} name="zipcode" ref={ziCodeRef} width={200} placeholder={"Zip code"} />
      </Section>
      <h2>Apartment info</h2>
      <Section>
        <Input defaultValue={query.get("rooms")} onChange={onChange} name="rooms" ref={roomsRef} width={200} placeholder={"Rooms"} />
        <Input defaultValue={query.get("size")} onChange={onChange} name="size" ref={sizeRef} width={200} placeholder={"Size"} />
        <Input defaultValue={query.get("sort")} onChange={onChange} name="sort" ref={sortRef} width={200} placeholder={"Sort"} />
      </Section>
      <h2>Price</h2>
      <Section>
        <Input defaultValue={query.get("maxprice")} onChange={onChange} name="maxprice" ref={minPirceRef} width={200} placeholder={"Min price"} />
        <Input defaultValue={query.get("minprice")} onChange={onChange} name="minprice" ref={maxPirceRef} width={200} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );

  return (
    <Main>
      <Container padding={props.padding}>
        <div className="input-field">
          <img src={housesIcon} alt="search" />
          <Input
            icon
            placeholder="Enter an address, neighborhood, city, or ZIP code"
          />
        </div>
        <Dropdown trigger={'click'} overlay={menu} placement="bottom" arrow>
          <div>
            <Button width={130} type={"light"}>
              <img
                alt="settings"
                style={{ marginRight: "8px" }}
                src={settingIcon}
              />{" "}
              Advanced
            </Button>
          </div>
        </Dropdown>
        <Button width={180}>
          <img alt="search" src={searchIcon} style={{ marginRight: "10px" }} />{" "}
          Search
        </Button>
      </Container>
    </Main>
  );
};

export default SubNavbar;
