import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .slick-dots li button:before {
    color: white;
    transform: translateY(-30px);
  }
  .slick-prev {
    z-index: 111;
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
  position: relative;
  width: 100%;
  height: 585px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 8;
  }

  .content {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 44px;
      line-height: 48px;
      letter-spacing: -2%;
      color: #fff;
      margin-bottom: 8px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
    }
    h2 {
      font-weight: 600;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -2%;
      color: #fff;
    }
  }
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.4);
  }

`;
