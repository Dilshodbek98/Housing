import { Divider } from "antd";
import React from "react";
import { Card, Section, Container, Wrapper, Icon } from "./style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Card>
            <h2>Contact Us</h2>
            <div className="content">
              <Icon.Location />
              <p>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>
            </div>
            <div className="content">
              <Icon.Phone />
              <p>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>
            </div>
            <div className="content">
              <Icon.Message />
              <p>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>
            </div>
          </Card>
          <Card>
            <h2>Discover</h2>
            <p>Chicago</p>
            <p>Los Angeles</p>
            <p>Miami</p>
            <p>New York</p>
          </Card>
          <Card>
            <h2>Lists by Category</h2>
            <p>Apartments</p>
            <p>Condos</p>
            <p>Houses</p>
            <p>Offices</p>
            <p>Retail</p>
            <p>Villas</p>
          </Card>
          <Card>
            <h2>Lists by Category</h2>
            <p>About Us</p>
            <p>Terms / Conditions</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </Card>
        </Section>
        <div className="divider"></div>
        <Section>
          <div className="sub-footer">
            <div className="logo">
              <Icon.Logo />
              <h1>Houzing</h1>
            </div>
            <p className>
              Copyright © 2021 CreativeLayers. All Right Reserved.
            </p>
          </div>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Footer;
