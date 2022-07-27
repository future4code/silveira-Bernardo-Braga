import React from "react";
import { P } from "../InfoUser/Styled";
import { MainShowRepo } from "./StyledSR";

export default function ShowRepositories(props) {

    // console.log(props);
    const repo = props.repo

    console.log(repo);

    return (
        <MainShowRepo>

            <P>{repo.name}</P>
        </MainShowRepo>
    )
}