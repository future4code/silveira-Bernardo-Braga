import React from "react";
import { useNavigate } from "react-router-dom";

import { goToPage } from "../routes/coordinator";
import { Comment, Container, Like, Nick, Text } from "./style";

export const Posts = props => {
    const navigate = useNavigate();


    return(
        <Container>
            <Nick>nickname: {props.Post.username}</Nick>

            {props.status && <Text>Title: {props.Post.title} </Text>}

            <Text>Body: {props.Post.body}</Text>

            <Like>contagem de votos: {props.Post.voteSum}</Like>
            
            <Comment 
                onClick={ () => {goToPage(navigate,`/postComment/${props.Post.id}/${props.Post.username}/${props.Post.body}/${props.Post.voteSum}/${props.Post.title}`)} } 
            > 
                comentários: {props.Post.commentCount}
            </Comment>

        </Container>
    )
}







