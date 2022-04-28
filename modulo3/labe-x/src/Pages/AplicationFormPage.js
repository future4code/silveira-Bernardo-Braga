import react, {useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { goBack } from '../routes/coordinator';
import {Button, ButtonContainer,Title,InputContainer, Input } from '../Styles/styles'
//import {useNavigate} from 'react-router-dom';
//import axios from 'axios';

const MainContainer = styled.div` 

` 
const Select = styled.select``


const ApplicationFormPage = () =>{
   

    const navigate = useNavigate();

    return (
        <MainContainer>
            <Title>inscreva-se para uma viagem</Title>

            <InputContainer>

                <Select>
                    <option>plutao</option>
                    <option>C-137</option>
                    ESCOLHA UMA VIAGEM
                    colocar as tags de option
                </Select>

                <Input>nome</Input>
                <Input>idade</Input>
                <Input>Texto de Candidatura</Input>
                <Input>Profissao</Input>

                <Select>
                    <option>Brasil</option>
                    <option>Butao</option>
                    Escolha um pais
                    colocar as tags de option
                </Select>

            </InputContainer>    

             <ButtonContainer>
                <Button onClick={ () => goBack(navigate) } > VOLTAR </Button>
                 <Button > ENVIAR </Button> 
                 faz o envio do formulario por meio da api
            </ButtonContainer>
        bernardo
        </MainContainer>
    );

}

export default ApplicationFormPage;