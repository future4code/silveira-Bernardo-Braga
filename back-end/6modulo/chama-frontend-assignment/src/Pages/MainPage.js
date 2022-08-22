import React from "react";
import SearchPage from "../Components/Search/SearchPage";
import ShowUser from "../Components/ShowUser/ShowUser";
import { goToPage } from "../Router/Coordinator";
import { useNavigate } from "react-router-dom";

import { Button, ChoosePage, MainContainer } from "./Styled";
import { useGlobal } from "../Global/GlobalStateContext";

export default function MainPage() {


    const { states } = useGlobal()
    const navigate = useNavigate();


    return (
        <MainContainer>
            <SearchPage />
            <ChoosePage>
                <Button onClick={() => {
                    localStorage.setItem('userSearch', JSON.stringify(states.userSearch));
                    goToPage(navigate, '/history')

                }}>ir para Histórico</Button>

            </ChoosePage>
            <ShowUser />

        </MainContainer>
    )
}