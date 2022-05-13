import React, {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import { useGlobal } from '../../context/GlobalStateContext';
import {useForm} from '../../hooks/useForm'

import { goToPage } from '../../routes/coordinator'



import { MainContainer,Form,Input,Button } from '../../styles/styled';
import { UnderTitle,Title } from './styled';

export const HomePage = props => {
    const {states,request} = useGlobal();

    const navigate = useNavigate();
    

    

    const {form,onChange,cleanField} = useForm({email:'',password:''})

    const doLogin = e => {
        
        e.preventDefault(true)
        request.postLogin(form, navigate,'/feed')

        cleanField();
        
    }

    return (
        <MainContainer>
            <Title>Labeddit</Title>
            <UnderTitle>O Projeto de rede social do Bernardo Braga</UnderTitle>
                
            <Form onSubmit={doLogin}  >
                <Input 
                    name="email"
                    value={form.email} 
                    onChange={ onChange }
                    placeholder={'digite o seu email'}
                    forHtml="email"
                    required

                />
                <Input
                    name="password"
                    value={form.password} 
                    onChange={ onChange }
                    placeholder={'digite o sua Senha'}
                    type="password"
                    required
                />
                <Button> Fazer Login</Button>
            </Form>
            <Button onClick={() => { goToPage ( navigate,'/checkin' ) } } >Criar uma conta na Labeddit</Button>
        </MainContainer>
    );
}