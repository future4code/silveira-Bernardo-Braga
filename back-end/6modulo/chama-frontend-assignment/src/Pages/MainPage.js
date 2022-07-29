import React from "react";
import SearchPage from "../Components/Search/SearchPage";
import ShowUser from "../Components/ShowUser/ShowUser";
import { goToPage } from "../Router/Coordinator";
import { useNavigate } from "react-router-dom";

import { Button, ChoosePage, MainContainer } from "./Styled";

export default function MainPage() {

    const navigate = useNavigate();
    return (
        <MainContainer>
            <SearchPage />
            <ChoosePage>
                <Button onClick={() => { goToPage(navigate, '/history') }}>ir para Historico</Button>

            </ChoosePage>
            <ShowUser />

        </MainContainer>
    )
}