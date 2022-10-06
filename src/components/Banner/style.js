import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 651px;
  
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
      font-size: 28px;
      line-height: 48px;
      letter-spacing: -2%;
      color: #fff;
      margin-bottom: 48px;
      max-width: 655px;
      text-align: center;
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
