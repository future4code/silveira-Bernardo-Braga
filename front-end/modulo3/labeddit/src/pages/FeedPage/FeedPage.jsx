import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import { goToHomePage } from '../../routes/coordinator';
import { useGlobal } from '../../context/GlobalStateContext';

import { MainContainer,Headers,Input,Button,PostsContainer, Form } from '../../styles/styled';
// import { WriteAPost } from './styled'
import { Posts } from '../../components/Posts';
import {useForm} from '../../hooks/useForm'


export const FeedPage = props => {
    const {states,setters,request} = useGlobal()

    const {form,onChange,cleanField} = useForm({title:'',body:''})


    const navigate = useNavigate();

  
    useEffect( () => {request.getPosts()} , [])


    const addPost = e => {
      console.log(form);
        request.postCreatePost(form);
    }

    const post = states.post && states.post.map( (post) => {
        
        return(
            <Posts key={post.id}
                status={true}
                Post={post}
                Where='feed'
            />
        )
    } )

    return (
        <MainContainer>
            <Headers>
                <Button onClick={ () => {goToHomePage(navigate)} }>VOLTAR</Button>
            </Headers>
            
            <Form >
                <Input                    
                    name="title"
                    value={form.title} 
                    onChange={ onChange }
                    placeholder={'titulo: '}
                />
                <Input                    
                    name="body"
                    value={form.body} 
                    onChange={ onChange }
                    placeholder={'corpo: '}
                />
                <Button onClick={ () => { addPost() } }>ADICIONAR POST</Button>
            </Form>

            <PostsContainer>
                 {post}
            </PostsContainer>

        </MainContainer>
    );
}