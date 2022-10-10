import styled from "styled-components";

export const Inp = styled.input`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 44px;
  outline: none;
  padding: ${({ icon }) => (icon ? "12px 40px" : "12px 16px")};
  border: 1px solid #e6e9ec;
  font-size: 14px;
  margin: ${({margin}) => margin && margin};
  line-height: 20px;
  font-weight: 400;
  font-family: "Montserrat";
  :focus{
    border: 1px solid var(--bgPrimary)
  }
`;