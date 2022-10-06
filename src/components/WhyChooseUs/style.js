import styled from "styled-components";
import { ReactComponent as Smile } from "../../assets/icons/cardsmile.svg";
import { ReactComponent as House } from "../../assets/icons/cardhouse.svg";
import { ReactComponent as Phone } from "../../assets/icons/cardphone.svg";
import { ReactComponent as Map } from "../../assets/icons/cardmap.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f5f7fc;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 48px 130px;
`
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  align-items: center;
  h1 {
    color: var(-primaryColor);
    margin-bottom: 8px;
  }
  p {
    color: var(-secondaryColor);
    margin-bottom: 40px;
  }
`;

const Cards = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 243px;
  h2{
    margin-bottom: 8px;
  }
  p{
    text-align: center;
  }
`
const Icon = styled.div``
Icon.Smile = styled(Smile)`
  margin-bottom: 24px;
`
Icon.House = styled(House)`
  margin-bottom: 24px;
`
Icon.Phone = styled(Phone)`
  margin-bottom: 24px;
`
Icon.Map = styled(Map)`
  margin-bottom: 24px;
`;



export { Container, Wrapper, Section, Cards, Card, Icon };