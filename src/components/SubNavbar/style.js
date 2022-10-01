import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  height: 64px;
  background-color: white;
  max-width: 1440px;
  width: 1440px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input-field{
    position: relative;
    width: 100%;
    img{
      position: absolute;
      top: 15px;
      left: 15px;
    }
  }
`
export const MenuWrapper = styled.div`
  width: 920px;
  background-color: white;
  height: 350px;
  margin-right: 130px;
  border-radius: 5px;
  padding: 30px;
  border: 1px solid #e6e9ec;
  h2 {
    color: #0d263b;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`