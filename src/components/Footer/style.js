import styled from "styled-components";
import { ReactComponent as LogoSvg} from "../../assets/icons/logo.svg";
import { ReactComponent as LocationIcon} from "../../assets/icons/location.svg";
import { ReactComponent as PhoneIcon} from "../../assets/icons/phone.svg";
import { ReactComponent as MessageIcon} from "../../assets/icons/message.svg";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--primaryColor);
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 48px 130px;
  padding-bottom: 0px;
  .divider {
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .sub-footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 68px;
    align-items: center;
    p{
      color: white;
    }
    .logo{
      display: flex;
      margin-top: 12px;
      gap: 11px;
      h1{
        color: white;
      }
    }
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    color: #fff;
    margin-bottom: 8px;
  }
  p{
    max-width: 250px;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    :hover{
      color: var(--activeColor);
    }
  }
  .content{
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
  }
`

const Icon =styled.div``
Icon.Logo = styled(LogoSvg)``
Icon.Location = styled(LocationIcon)``
Icon.Phone = styled(PhoneIcon)``
Icon.Message = styled(MessageIcon)``

export { Container, Wrapper, Section, Card, Icon };