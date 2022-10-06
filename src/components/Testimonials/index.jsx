import React from 'react'
import { Card, Cards, Container, Section, Wrapper } from "./style";
import img from '../../assets/images/client.png'
const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Section column>
          <h1>Testimonials</h1>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Section>
        <Cards>
          <Card>
            <p>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </p>
            <h2>Marvin McKinney</h2>
            <img src={img} alt="" />
          </Card>
          <Card>
            <p>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </p>
            <h2>Marvin McKinney</h2>
            <img src={img} alt="" />
          </Card>
          <Card>
            <p>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </p>
            <h2>Marvin McKinney</h2>
            <img src={img} alt="" />
          </Card>
        </Cards>
      </Wrapper>
    </Container>
  );
}

export default Testimonials