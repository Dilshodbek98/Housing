import { Dropdown } from "antd";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { navbarData } from "../../utils/navbarData";
import Footer from "../Footer";
import { Button } from "../Generics";
import {
  Section,
  Wrapper,
  Container,
  Logo,
  Navlink,
  Main,
  Modal,
} from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  const OnClick = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "log-out") {
      localStorage.removeItem("token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };
  const menu = (
    <Modal>
      <p className="link" data-name="my-profile" onClick={OnClick}>
        My Profile
      </p>
      <p className="link" data-name="my-properties" onClick={OnClick}>
        My Properties
      </p>
      <p className="link" data-name="favourites" onClick={OnClick}>
        Favourites
      </p>
      <p className="link" data-name="log-out" onClick={OnClick}>
        Log Out
      </p>
    </Modal>
  );
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
              {localStorage.getItem("token") ? (
                <Dropdown
                  overlay={menu}
                  trigger="click"
                  placement="bottomRight"
                >
                  <Button type="dark">Profile</Button>
                </Dropdown>
              ) : (
                <Button type="dark" onClick={() => navigate("/signin")}>
                  Sign In
                </Button>
              )}
            </Section>
          </Wrapper>
        </Main>
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
