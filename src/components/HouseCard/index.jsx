import React from "react";
import {
  Container,
  Content,
  Details,
  Divider,
  Footer,
  Img,
  Price,
  Review,
  Text,
  Title,
} from "./style";
import noImg from "../../assets/images/noImg.jpg";
import { message } from "antd";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties";
import { useMutation } from "react-query";

const HouseCard = ({ data = {}, onClick }) => {
  const {
    city,
    country,
    description,
    address,
    houseDetails,
    price,
    id,
    salePrice,
    attachments,
    favorite,
  } = data;
  const { REACT_APP_BASE_URL: url } = process.env;
  const [state, ] = useContext(PropertiesContext);

  const mutateDAta = async () => {
    let res = await fetch(
      `${url}/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.json();
  };
  const { mutate } = useMutation(mutateDAta, {
    onSuccess: state.refetch,
  });
  const save = (e) => {
    e.stopPropagation();
    if (favorite) {
      mutate();
      message.warn("Removed from Favourites");
    } else {
      mutate();
      message.success("Added to Favourites");
    }
  };

  return (
    <Container onClick={onClick}>
      <Img src={attachments && (attachments[0]?.imgPath || noImg)} />
      <Content>
        <Title>
          {city} {country} {description}
        </Title>
        <Text>
          {address}, rooms: {houseDetails?.room}
        </Text>
        <Details marbot>
          <Details.Item>
            <Details.Bed />
            <Text footer>Beds: {houseDetails?.beds || 0}</Text>
          </Details.Item>
          <Details.Item>
            <Details.Bath />
            <Text footer>Baths: {houseDetails?.bath || 0}</Text>
          </Details.Item>
          <Details.Item>
            <Details.Car />
            <Text footer>Garage: {houseDetails?.garage || 0}</Text>
          </Details.Item>
          <Details.Item>
            <Details.Ruler />
            <Text footer>Area: {houseDetails?.area || 0} sq.ft</Text>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Footer>
        <Price>
          <del>
            <Text>${salePrice || 0} per/month</Text>
          </del>
          <Title footer>${price || 0} per/month</Title>
        </Price>
        <Review fav={favorite}>
          <Review.Resize />
          <div className="love" onClick={save}>
            <Review.Love />
          </div>
        </Review>
      </Footer>
    </Container>
  );
};

export default HouseCard;
