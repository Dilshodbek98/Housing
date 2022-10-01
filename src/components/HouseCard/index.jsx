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

const HouseCard = ({data = {}}) => {
  const {
    city,
    country,
    description,
    address,
    houseDetails,
    price,
    salePrice,
    attachments,
   } = data;
  return (
    <Container>
      <Img src={attachments && (attachments[0].imgPath || noImg)} />
      <Content>
        <Title>
          {city} {country} {description}
        </Title>
        <Text>{address}</Text>
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
        <Review>
          <Review.Resize />
          <div className="love">
            <Review.Love />
          </div>
        </Review>
      </Footer>
    </Container>
  );
};

export default HouseCard;
