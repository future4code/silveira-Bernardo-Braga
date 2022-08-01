import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import { useGlobal } from "../Global/GlobalStateContext";
import { MainContainer } from "./Styled";

export default function MainPage() {
  const { states } = useGlobal();

  return (
    <MainContainer>
      <Header />
      <Table />
    </MainContainer>
  );
}
