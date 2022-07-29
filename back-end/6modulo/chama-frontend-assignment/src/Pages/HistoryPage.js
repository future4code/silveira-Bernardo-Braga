import React from "react";


import { useNavigate } from "react-router-dom";
import ShowHistory from "../Components/History/ShowHistory";
import { goToHomePage } from "../Router/Coordinator";

import { Button, ChoosePage, MainContainer } from "./Styled";




export default function HistoryPage() {
    const navigate = useNavigate();

    let itens = localStorage.getItem('userSearch') // JSON.parse(localStorage.getItem('userSearch'))

    console.log('============');
    console.log(itens);

    let json = JSON.parse(itens)
    console.log(json);
    console.log('============');

    const showHistory = json.map((item) => {
        return (
            <ShowHistory Item={item} key={item.login} />
        )
    })

    return (

        <MainContainer>
            <ChoosePage>
                <Button onClick={() => { goToHomePage(navigate) }}>ir para pagina de busca</Button>
            </ChoosePage>

            {showHistory}


        </MainContainer>

    )
}

