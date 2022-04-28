import react, {useState, useEffect} from 'react';

//import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { goToHomePage, goToPage } from '../routes/coordinator';
import {Button, ButtonContainer, Title, Input } from '../Styles/styles'



const MainContainer = styled.div`
    background: blue;

    
` 

const LoginPage = () =>{


    const navigate = useNavigate();

    return (
        <MainContainer>
            
            <Title>Login</Title>

            <Input>E-mail</Input>     
            <Input>Senha</Input>     

            <ButtonContainer>
                <Button onClick={() => goToHomePage(navigate)} > VOLTAR </Button>
                <Button onClick={() => goToPage(navigate,'admHome')} > ENTRAR </Button>
            </ButtonContainer>

        </MainContainer>);

    }
export default LoginPage;