import React from "react";
import SearchPage from "../Components/Search/SearchPage";
import ShowUser from "../Components/ShowUser/ShowUser";

import { MainContainer } from "./Styled";

export default function MainPage() {


    return (
        <MainContainer>

            <SearchPage />
            <ShowUser />

        </MainContainer>
    )
}