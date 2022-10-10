import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #e5e5e5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 540px;
  padding: 96px 0;
  background-color: white;
  border: 1px solid #e6e9ec;
  box-shadow: 0 10px 30px #0d263b0d;
  padding: 30px;
  margin: 64px 0;
  h2{
    margin-bottom: 44px;
    color: var(--primaryColor);
  }
`;



export { Container, Main};