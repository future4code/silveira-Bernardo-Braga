import react, {useState, useEffect} from 'react';

//import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import { goBack, goToHomePage, goToPage } from '../routes/coordinator';
import {Button, ButtonContainer,Title,Input, InputContainer} from '../Styles/styles';


const MainContainer = styled.div`` 

const Select = styled.select``


const CreateTripPage = () =>{


    const navigate = useNavigate();


    return (
        <MainContainer>
            <Title>Criar Viagem</Title>

            <InputContainer>
                <Input>nome</Input>
                <Select>
                    <option>plutao</option>
                    <option>C-137</option>
                    ESCOLHA UMA VIAGEM
                    colocar as tags de option
                </Select>
                
                <Input>Data, tera que ser colocada a data </Input>
                <Input>Descricao</Input>
                <Input>Duracao em dias</Input>
                
            </InputContainer>
            
            <ButtonContainer>

                <Button onClick={() => goBack(navigate)} >VOLTAR</Button>
                <Button onClick={() => goToPage(navigate,'tripDetail')}>CRIAR</Button>

            </ButtonContainer>
        </MainContainer>
    );

}
export default CreateTripPage;