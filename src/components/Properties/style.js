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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1400px) {
    justify-content: center;
    gap: 30px;
    padding: 0 19px;
  }
`;
