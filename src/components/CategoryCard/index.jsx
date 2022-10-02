import React from 'react'
import { Blur, Container, Content, Img } from "./style";
import img from '../../assets/images/imgCategory.jpg'
const CategoryCard = ({data, onClick}) => {
  return (
    <Container onClick={onClick}>
      <Img src={img} />
      <Content>
        <p>{data?.name || "Category name"}</p>
      </Content>
      <Blur />
    </Container>
  );
}

export default CategoryCard