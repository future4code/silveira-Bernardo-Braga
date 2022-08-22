import React from "react";
import { } from "./Styled";
import { MainInfo, H1, Image, P } from "./Styled";

export default function InfoUser(props) {
    // console.log(props);

    return (

        <MainInfo>
            <H1>{props.User.login}</H1>
            <Image src={props.User.avatar_url} />
            <P>Bio: {props.User.bio} </P>
            <P>Localização: {props.User.location}</P>
            <P>Seguidores: {props.User.followers}</P>
            <P>Seguindo: {props.User.following}</P>
            <P>entrou: {props.User.created_at} </P>
            <P>ultimo update: {props.User.updated_at} </P>
        </MainInfo>
    )
}