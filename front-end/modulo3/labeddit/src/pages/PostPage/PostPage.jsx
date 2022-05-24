import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobal } from '../../context/GlobalStateContext';
import { goToHomePage } from '../../routes/coordinator';
import { AddCommitContainer,CommitContainer, Button, Headers, MainContainer, PostsContainer, Input } from '../../styles/styled';
import { Posts } from '../../components/Posts';
import { Comment, Like, Nick, Text } from '../FeedPage/styled';

export const PostPage = props => {

    const [commit,setCommit] = useState(''); 

    const { postId, nick, body, voteCont, title} = useParams();
    const navigate = useNavigate()
    const { states, setters, request } = useGlobal()

    useEffect( () => {
        request.getPostComments(postId)

    }, [] )

    const onChangeCommit = e => {

        setCommit(e.target.value)

    }

    const addCommit = () => {
        const body = {body: commit}
        request.postCreateComment(postId,body)
        document.location.reload(true);
    }


    
console.log(states.postComment);

    const comment = states.postComment && states.postComment.map( (post) => { 
        return(
            <Posts key={post.id}
                Post={post}
                Where = 'postComment'
            
            />
        )
    } )
        
    return (
        <MainContainer>
            <Headers>          
                
                <Button onClick={() => { goToHomePage(navigate)} } >ir para a home</Button>

            </Headers>
            
            

            <CommitContainer>

                <PostsContainer>
                    <Nick>nickname: {nick}</Nick>
                    <Text>Title: {title}</Text>
                    <Text>Body: {body}</Text>
                    <Like>contagem de votos: {voteCont}</Like>
                    <Comment > 
                        comentarios: {states.postComment.length}     
                    </Comment>
                </PostsContainer>

                <AddCommitContainer>
                    <Input
                    name="commit"
                    value={commit} 
                    onChange={ onChangeCommit }
                    placeholder={' digite o seu comentario '}

                    />

                    <Button onClick={ () => { addCommit() } } >
                        adicionar comentário
                    </Button>
                </AddCommitContainer>

                {comment}
                
            </CommitContainer>
        </MainContainer>
    );
}