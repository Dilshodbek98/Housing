import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as conditioner } from "../../assets/icons/air-conditioner.svg";
import { ReactComponent as barbecue } from "../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as dumbbell } from "../../assets/icons/dumbbell.svg";
import { ReactComponent as grass } from "../../assets/icons/grass.svg";
import { ReactComponent as laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../assets/icons/microwave.svg";
import { ReactComponent as outdoorShower } from "../../assets/icons/outdoor-shower.svg";
import { ReactComponent as refrigerator } from "../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "../../assets/icons/swimmer.svg";
import { ReactComponent as coaxial } from "../../assets/icons/coaxial.svg";
import { ReactComponent as liquidsoap } from "../../assets/icons/liquid-soap.svg";
import { ReactComponent as wifi } from "../../assets/icons/wifi.svg";
import { ReactComponent as blinds } from "../../assets/icons/blinds.svg";
import { ReactComponent as chair } from "../../assets/icons/chair.svg";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 130px;
`;
const Main = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 20px;
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 500px;
  }
`;

//////////////////////////////////////

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: var(--primaryColor);
    margin-bottom: 0;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 20px;
  h2{
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
  }
  img{
    width: 52px;
    height: 52px;
    border-radius: 50%;
  }
`;

const Icon = styled.div`
  display: flex;
  cursor: pointer;
  :active{
    transform: scale(0.95);
  }
  p {
    margin-left: 24px;
  }
`;

Icon.Share = styled(share)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Love = styled(love)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;

 const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: ${({ footer }) => (footer ? "0px" : "14px")};
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  h2 {
    color: var(--primaryColor);
  } 
`;
const UserBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  gap: 20px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;
const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: ${({mar}) => mar && '10px'};
`;

Details.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Details.Bed = styled(bed)`
  & path {
    fill: #696969;
  }
`;
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
Details.Info = styled.p``;



/////feature-icons
Icon.Conditioner = styled(conditioner)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Barbecue = styled(barbecue)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Dryer = styled(dryer)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Dumbbell = styled(dumbbell)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Grass = styled(grass)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Laundry = styled(laundry)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Microwave = styled(microwave)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.OutdoorShower = styled(outdoorShower)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Refrigerator = styled(refrigerator)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Sauna = styled(sauna)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Swimmer = styled(swimmer)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Coaxial = styled(coaxial)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Liquidsoap = styled(liquidsoap)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Wifi = styled(wifi)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Blinds = styled(blinds)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
Icon.Chair = styled(chair)`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;
export {
  Main,
  Content,
  UserBox,
  Container,
  Wrapper,
  Section,
  TitleBox,
  Icon,
  Left,
  Right,
  Details,
  Text
};
