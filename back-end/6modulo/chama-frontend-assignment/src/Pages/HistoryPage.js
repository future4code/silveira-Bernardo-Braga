import React from "react";


import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Router/Coordinator";

import { Button, ChoosePage, MainContainer } from "./Styled";




export default function HistoryPage() {
    const navigate = useNavigate();


    return (

        <MainContainer>
            <ChoosePage>
                <Button onClick={() => { goToHomePage(navigate) }}>ir para pagina de busca</Button>

            </ChoosePage>
            pagina de historico de busca


            bernardo braga


        </MainContainer>

    )
}

