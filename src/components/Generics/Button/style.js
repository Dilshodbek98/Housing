import styled from "styled-components";

const getType = ({type}) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        border: '1px solid white',
        color: 'white',
      }
    case 'primary':
      return {
        background: "#0061DF",
        color: 'white',
        border: 'none',
      };
    case 'light':
      return {
        background: "white",
        color: "#0D263B",
        border: "1px solid #E6E9EC",
      };
    default:
      return {
        background: "#0061DF",
        color: 'white',
        border: 'none',
      };
  }
}

const getWidth = ({width}) => {
  if(!width) return '130px';
  else if(`${width}`.includes('%')) return '100%'
  else return `${width}px`

}

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: ${getWidth};
  min-width:130px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  cursor: pointer;
  font-size: 14px;
  :active{
    opacity:0.8;
  }
  ${getType}
`;
