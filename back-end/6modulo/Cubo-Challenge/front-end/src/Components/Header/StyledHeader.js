import styled from "styled-components";

export const MainHeader = styled.div`
  background-color: yellowgreen;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Form = styled.form`
  height: 100%;
  width: 100%;
  margin-top: 11px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input`
  margin-bottom: 5px;
  margin-left: 5px;
  padding-left: 5px;
  width: 200px;
`;

export const Button = styled.button`
  border-radius: 6px;
  margin-left: 5px;
  background-image: linear-gradient(to right, orange, yellow);
`;
