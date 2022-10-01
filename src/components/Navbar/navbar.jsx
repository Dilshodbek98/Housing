import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbarData } from "../../utils/navbarData";
import { Button } from "../Generics";
import { Section, Wrapper, Container, Logo, Navlink, Main } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Main>
          <Wrapper>
            <Section logo onClick={() => navigate("/home")}>
              <Logo />
              <p>Houzing</p>
            </Section>
            <Section gap>
              {navbarData.map((item, index) => {
                return (
                  !item.hidden && (
                    <Navlink
                      key={index}
                      className={({ isActive }) => isActive && "active"}
                      to={item.path}
                    >
                      {item.title}
                    </Navlink>
                  )
                );
              })}
            </Section>
            <Section>
              <Button type="dark" onClick={() => navigate("/signin")}>
                Log In
              </Button>
            </Section>
          </Wrapper>
        </Main>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
