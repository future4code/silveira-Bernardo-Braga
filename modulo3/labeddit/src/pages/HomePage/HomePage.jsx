import React, {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import { useGlobal } from '../../context/GlobalStateContext';
import {useForm} from '../../hooks/useForm'

import { goToPage } from '../../routes/coordinator'



import { MainContainer,Form,Input,Button } from '../../styles/styled';

export const HomePage = props => {

    const navigate = useNavigate();
    const {states,request} = useGlobal()

    const {form,onChange,cleanField} = useForm({email:'',password:''})

    const doLogin = e => {
        
        e.preventDefault()
        request.postLogin(form)

        cleanField();
        console.log(states.status);
        if( states.status === true ) {
            goToPage(navigate,'/feed')
        } else {
           console.log('e-mail ou senha incorretos')
        }
        

    }






    return (
        <MainContainer>
            <h1>Labeddit</h1>
            <h3>O Projeto de rede social do Bernardo Braga</h3>
                
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