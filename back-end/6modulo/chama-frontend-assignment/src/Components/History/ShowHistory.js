import React from "react";
import { A, MainHistory } from "./StyledH";



export default function ShowHistory(props) {



    const login = props.Item.login
    const url = props.Item.url
    console.log(url);
    return (

        <MainHistory>

            <A href={url} >{login}</A>


        </MainHistory>

    )
}





