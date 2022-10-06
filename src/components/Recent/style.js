import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
`

const Container = styled.div`
  width: 100%;
  padding: 96px 0;
  h1 {
    color: var(--primaryColor);
  }

  .slick-next {
    font-size: 25px;
  }
  .slick-next::before {
    color: black;
  }
  .slick-prev::before {
    color: black;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;



export { Container, Main, Wrapper};