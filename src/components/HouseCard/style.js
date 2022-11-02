import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 333px;
  border-radius: 3px;
  border: 1px solid #e6e9ec;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 220px;
`;

export const Content = styled.div`
  padding: 0 20px;
  padding-bottom: 14px;
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 24px;
  color: #0d263b;
  margin: ${({footer}) => footer ? '0 0 8px 0' : '24px 0 4px 0'};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: ${({footer}) => footer ? '0px' : '14px'};
`;

export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


Details.Bed = styled(bed)`
  & path {
    fill: #696969;
  }
`
Details.Bath = styled(bath)`
  & path {
    fill: #696969;
  }
`;
Details.Car = styled(car)`
  & path {
    fill: #696969;
  }
`;
Details.Ruler = styled(ruler)`
  & path {
    fill: #696969;
  }
`;
Details.Info = styled.p``

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e9ec;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 20px;
  justify-content: space-between;
`

export const Price = styled.div``

export const Review = styled.div`
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 13px;
  .love {
    width: 35px;
    height: 35px;
    background-color: ${({ fav }) => (fav ? "red" : "#f6f8f9")};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :active {
      transform: scale(0.9);
    }
  }
`;

Review.Resize = styled(resize)`
  & path {
    fill: #696969;
  }
  cursor: pointer;

`;

Review.Love = styled(love)`
  & path {
    fill: ${({ fav }) => (fav ? "white" : "#696969")};
  }
`;
