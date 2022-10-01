import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  background-color: ${({ submenu }) => (submenu ? "white" : "#0d263b")};
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  height: 585px;
  justify-content: space-between;

  img {
    width: 100%;
    height: 580px;
  }
  .slick-slider {
    max-width: 100%;
    background-color: red;
    height: 580px;
  }

  .slick-dots li button:before {
    color: white;
  }

  .slick-prev {
    z-index: 11;
    position: absolute;
    left: 30px;
    width: fit-content;
  }

  .slick-prev::before {
    font-size: 40px;
  }

  .slick-next {
    z-index: 1;
    position: absolute;
    right: 30px;
  }

  .slick-next::before {
    font-size: 40px;
  }
`;

export const Slide = styled.div`
  width: 100%;
  position: relative;
  top: 0;
`;

export const Blur = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;



export const Content = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Content.Title = styled.h1`
  color: white;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02rem;
`
Content.Price = styled.h1`
  color: white;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02rem;
`
Content.Desc = styled.p`
  color: white;
  line-height: 24px;
`