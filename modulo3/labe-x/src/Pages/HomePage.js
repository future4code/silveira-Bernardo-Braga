import react from 'react';

import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

import styled from 'styled-components';
import { goToPage } from '../routes/coordinator';
import {Button, ButtonContainer, Title } from '../Styles/styles'


const MainContainer = styled.div` 

`
const HomePage = () =>{

    const navigate = useNavigate();

    return (
        <MainContainer>

            <Title> LabeX </Title>

            <ButtonContainer>

                <Button onClick={() => goToPage(navigate,'listTrip')} > Lista de Viagens </Button>
                <Button onClick={() => goToPage(navigate,'login')} > Area Administrativa </Button>

            </ButtonContainer>
           
        </MainContainer>);

}
export default HomePage;