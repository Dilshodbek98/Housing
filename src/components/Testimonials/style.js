import styled from "styled-components";

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
  padding-bottom: 68px;
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
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 48px;
  width: 380px;
  height: 200px;
  h2{
    margin-bottom: 8px;
  }
  p{
    text-align: center;
  }
  img{
    position: absolute;
    bottom: -20px;
  }
`
export { Container, Wrapper, Section, Cards, Card };
