import React from 'react'
import { Card, Cards, Container, Icon, Section, Wrapper } from "./style";

const WhyChooseUs = () => {
  return (
    <Container>
      <Wrapper>
        <Section column>
          <h1>Why Choose Us?</h1>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Section>
        <Cards>
          <Card>
            <Icon.Smile />
            <h2>Trusted By Thousands</h2>
            <p>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Card>
          <Card>
            <Icon.House />
            <h2>Wide Renge Of Properties</h2>
            <p>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Card>
          <Card>
            <Icon.Phone />
            <h2>Financing Made Easy</h2>
            <p>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Card>
          <Card>
            <Icon.Map />
            <h2>See Neighborhoods</h2>
            <p>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
          </Card>
        </Cards>
      </Wrapper>
    </Container>
  );
}

export default WhyChooseUs