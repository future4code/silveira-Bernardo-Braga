import react, {useState, useEffect} from 'react';

//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useForm from "../hooks/useFoms";

import styled from 'styled-components';
import { postLogin } from '../Api/Post';
import { goToHomePage, goToPage } from '../routes/coordinator';
import {Button, ButtonContainer, Title, Input, Form } from '../Styles/styles'



const MainContainer = styled.div`
    background: blue;

    
` 

const LoginPage = () =>{
    const {bool, setBool} = useState(false);
    const navigate = useNavigate();
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
    // const {email,setEmail} = useState("");
    // const {password,setPassword} = useState("");


    const checkforLogin = (event) => {
        
        console.log(form);
        postLogin(form.email,form.password,setBool)

  
            goToPage(navigate,'admHome');

         
    }

    return (
        <MainContainer>
            
            <Title>Login</Title>
            <Form onSubmit={checkforLogin}>
                <Input          
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={"E-mail"}
                    required
                    type="email"
                /> 

                <Input                
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha"}
                    required
                    pattern={"^.{3,}"}
                    title={"Sua senha deve ter no mínimo 3 caracteres"}   
                />

                <ButtonContainer>
                    <Button onClick={() => goToHomePage(navigate)} > VOLTAR </Button>
                    <Button onClick={() => checkforLogin(form.email,form.password)} > ENTRAR </Button>
                </ButtonContainer>
            </Form>
        </MainContainer>);

    }
export default LoginPage;