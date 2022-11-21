import styled from "styled-components";

export const HomeStyle = styled.div`
  background-color: aliceblue;
`;

export const StyledSelect = styled.select`
  height: 27px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  width: 180px;
  margin-top: 5px;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & div {
    margin: 0px 10px;
  }

  & label {
    display: grid;
    font-size: 15px;
  }
`;
