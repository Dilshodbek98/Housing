import React, { useEffect, useState } from "react";
import noprofile from "../../assets/images/noprofile.jpg";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Content,
  Icon,
  Left,
  Main,
  Right,
  Section,
  TitleBox,
  UserBox,
  Wrapper,
  Details,
  Text,
} from "./style";
import Input from "../Generics/Input";
import { Checkbox } from "antd";
import Button from "../Generics/Button";
import Recommended from "../Recommended";

const HouseItem = () => {
  const params = useParams();
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const { REACT_APP_BASE_URL } = process.env;
  useEffect(() => {
    fetch(`${REACT_APP_BASE_URL}/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => setItem(res.data));
    // eslint-disable-next-line
  }, [params.id]);

  return (
    <Container>
      <Wrapper>
        <Section>
          <img src={item?.attachments[0]?.imgPath} alt="main=img" />
          <Main>
            <Content>
              <TitleBox>
                <Left>
                  <h2 className="heading">{item?.name}</h2>
                  <p>
                    {item?.country}, {item?.city}, {item?.address}
                  </p>
                </Left>
                <Right>
                  <Icon>
                    <p>Share</p>
                    <Icon.Share />
                  </Icon>
                  <Icon>
                    <p>Save</p>
                    <Icon.Love />
                  </Icon>
                </Right>
              </TitleBox>
              <Details marbot>
                <Details.Item>
                  <Details.Bed />
                  <Text footer>Beds: {item?.houseDetails?.beds || 0}</Text>
                </Details.Item>
                <Details.Item>
                  <Details.Bath />
                  <Text footer>Baths: {item?.houseDetails?.bath || 0}</Text>
                </Details.Item>
                <Details.Item>
                  <Details.Car />
                  <Text footer>Garage: {item?.houseDetails?.garage || 0}</Text>
                </Details.Item>
                <Details.Item>
                  <Details.Ruler />
                  <Text footer>
                    Area: {item?.houseDetails?.area || 0} sq.ft
                  </Text>
                </Details.Item>
                <Left>
                  <Right>
                    <Text>
                      <del>${item?.price || "0"}</del>
                    </Text>
                    <h2>${item?.salePrice || "0"} </h2>
                  </Right>
                  <Left>
                    <h2>{item?.user?.firstname}</h2>
                  </Left>
                </Left>
              </Details>
              <h2>Description</h2>
              <p>{item?.description}</p>
              <h2>Features</h2>
              <Details mar>
                <Left>
                  <Icon>
                    <Icon.Conditioner />
                    <p>Air Conditioning</p>
                  </Icon>
                  <Icon>
                    <Icon.Barbecue />
                    <p>Barbeque</p>
                  </Icon>
                  <Icon>
                    <Icon.Dryer />
                    <p>Dryer</p>
                  </Icon>
                  <Icon>
                    <Icon.Dumbbell />
                    <p>Gym</p>
                  </Icon>
                </Left>
                <Left>
                  <Icon>
                    <Icon.Grass />
                    <p>Lawn</p>
                  </Icon>
                  <Icon>
                    <Icon.Laundry />
                    <p>Laundry</p>
                  </Icon>
                  <Icon>
                    <Icon.Microwave />
                    <p>Microwave</p>
                  </Icon>
                  <Icon>
                    <Icon.OutdoorShower />
                    <p>Outdoor Shower</p>
                  </Icon>
                </Left>
                <Left>
                  <Icon>
                    <Icon.Refrigerator />
                    <p>Refrigerator</p>
                  </Icon>
                  <Icon>
                    <Icon.Sauna />
                    <p>Sauna</p>
                  </Icon>
                  <Icon>
                    <Icon.Swimmer />
                    <p>Swimming Pool</p>
                  </Icon>
                  <Icon>
                    <Icon.Coaxial />
                    <p>TV Cable</p>
                  </Icon>
                </Left>
                <Left>
                  <Icon>
                    <Icon.Liquidsoap />
                    <p>Washer</p>
                  </Icon>
                  <Icon>
                    <Icon.Wifi />
                    <p>WiFi</p>
                  </Icon>
                  <Icon>
                    <Icon.Blinds />
                    <p>Window Coverings</p>
                  </Icon>
                  <Icon>
                    <Icon.Chair />
                    <p>Dining room</p>
                  </Icon>
                </Left>
              </Details>
            </Content>
            <UserBox>
              <Right>
                <img src={noprofile} alt="noimg" />
                <Left>
                  <h2>{item?.user?.firstname}</h2>
                  <p>(123)456-7890</p>
                </Left>
              </Right>
              <Input placeholder="Name" />
              <Input placeholder="Phone" />
              <Input placeholder="Email" />
              <Input placeholder="Message" />
              <Checkbox>
                <p>By submitting this form I agree to Terms of Use</p>
              </Checkbox>
              <Button width={"%"} onClick={() => navigate(`/home`)}>
                Send request
              </Button>
            </UserBox>
          </Main>
        </Section>
        <Recommended padnot={true} />
      </Wrapper>
    </Container>
  );
};

export default HouseItem;
