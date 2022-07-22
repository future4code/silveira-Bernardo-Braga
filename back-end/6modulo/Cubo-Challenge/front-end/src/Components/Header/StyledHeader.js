import styled from "styled-components";

export const MainHeader = styled.div`
  background-color: yellowgreen;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
`;
export const Form = styled.form`
  height: 100%;
  width: 100%;
  margin-top: 11px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
  padding-left: 5px;
  width: 10%;
  height: 30px;
`;

export const Button = styled.button`
  border-radius: 10px;
  margin-left: 5px;
  height: 32px;
  background-image: linear-gradient(to right, orange, yellow);
`;
