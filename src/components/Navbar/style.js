import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ submenu }) => (submenu ? "white" : "#0d263b")};
`;

export const Main = styled.div`
  padding: 0 130px;
  width: 100%;
  max-width: 1440px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  p {
    font-size: 22px;
    font-weight: 700;
    transform: translateY(9px);
  }
  display: flex;
  align-items: center;
  color: #fff;
  gap: ${({ gap }) => gap && "60px"};
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #a9ecf6;
  }
`;
export const Logo = styled(LogoImg)`
  & path {
    fill: #fff;
  }
  margin-right: 12px;
`;

export const Navlink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
`;

export const SubNavbar = styled.div`
  height: 64px;
  background-color: white;
  max-width: 1440px;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input-field {
    position: relative;
    img {
      position: absolute;
      top: 15px;
      left: 15px;
    }
  }
`;
