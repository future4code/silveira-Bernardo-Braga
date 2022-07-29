import React from "react";
import { P } from "../InfoUser/Styled";
import { MainShowRepo } from "./StyledSR";

export default function ShowRepositories(props) {

    // console.log(props);
    const repo = props.repo



    return (
        <MainShowRepo>

            <a href={repo.url}>{repo.name}</a>
            <P>description: {repo.description}</P>
            <P>{repo.language}</P>
            <P>Stars: {repo.stargazers_count}</P>
        </MainShowRepo>
    )
}