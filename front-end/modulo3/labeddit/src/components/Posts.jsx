import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalStateContext";

import setaCimaBranca from '../imagem/seta-cima-branca.png'
import setaCimaPreta from '../imagem/seta-cima-preta.jpg'
import setaBaixoBranca from '../imagem/seta-baixo-branca.png'
import setaBaixoPreta from '../imagem/seta-baixo-preta.jpg'

import { goToPage } from "../routes/coordinator";
import { Comment, Container, Like, Nick, Text, ContainerLike, LikeButton } from "./style";

export const Posts = props => {
    const navigate = useNavigate();
    const { states,request} = useGlobal()
    
    const check = props.Post.voteSum == null ? 0 : props.Post.voteSum;

    const numb = parseInt(check)

    const [contVote, setContVote] = useState(numb)
    // states,setters,
// console.log(localStorage.getItem('token'));
// console.log(props.Post);

    const like = type => {
        const body = {
            "direction": type
        }
        if (props.Where === 'feed') {
            request.postCreatePostVote(props.Post.id,body)
            setContVote(contVote + 1)
        }else{
            request.postCreateCommentVote(props.Post.id,body)
            setContVote(contVote + 1)
        }
    }
    // setters.setVotePost(props.Post.voteSum + states.votePosts)
    return(
        <Container
             
        >
            <Nick
                onClick={ () => {goToPage(navigate,`/postComment/${props.Post.id}/${props.Post.username}/${props.Post.body}/${props.Post.voteSum}/${props.Post.title}`)} }
            >nickname: {props.Post.username}</Nick>

            {props.status && <Text>Title: {props.Post.title} </Text>}

            <Text
                onClick={ () => {goToPage(navigate,`/postComment/${props.Post.id}/${props.Post.username}/${props.Post.body}/${props.Post.voteSum}/${props.Post.title}`)} }
            >Body: {props.Post.body}</Text>

            {
                props.status && 

                <Comment 
                    onClick={ () => {goToPage(navigate,`/postComment/${props.Post.id}/${props.Post.username}/${props.Post.body}/${props.Post.voteSum}/${props.Post.title}`)} } 
                    > 
                    comentários: {props.Post.commentCount}
                </Comment>
            }
            
            
            <ContainerLike>
                <Like>Votos: </Like>
                <LikeButton 
                    onClick={ () => {like(1)} }
                    src={setaCimaBranca}    
                />
                
                {contVote}
                
                <LikeButton 
                    onClick={ () => {like(-1)} }
                    src={setaBaixoBranca}
                />

            </ContainerLike>

        </Container>
    )
}







