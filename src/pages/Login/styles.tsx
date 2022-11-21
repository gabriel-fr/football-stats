import styled from "styled-components";

export const LoginContainer = styled.div`
  background-image: linear-gradient(180deg, #bce5ff 0, #9db9f2 50%, #7e8fb3 100%);

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  display: grid;
  background-color: white;
  padding: 50px 80px 30px;
  width: 200px;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  text-align: center;
  margin-top: 40px;

  display: flex;
  width: 100px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  background-color: #9ebaf2;
  border-radius: 5px;
  color: white;
  border: none;
  font-weight: bold;
  align-items: center;
  height: 26px;
  text-shadow: #8294ba 2px 1px 0px;

  :hover {
    background-color: #91a9db;
  }
`;

export const StyledInput = styled.input`
  height: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 5px;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const LoginTitle = styled.div`
  font-family: cursive;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: white;
  text-shadow: #8294ba 2px 2px 0px;
  margin-bottom: 10px;
`;
