import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 130px;
  display: flex;
  justify-content: center;
`;
export const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 17px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 19px;
  }
`;
