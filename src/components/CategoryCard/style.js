import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 350px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 3px;

  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    line-height: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;
const Blur = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 3px;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.65);
`;

export { Container, Img, Content, Blur };
