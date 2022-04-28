import react, {useState, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import { goBack, goToHomePage, goToPage } from '../routes/coordinator';
import {Button, ButtonContainer } from '../Styles/styles'
//import axios from 'axios';

const MainContainer = styled.div``


const Title = styled.div``
const Select = styled.select``


const AdminHomePage = () =>{


const navigate = useNavigate();


    return (
        <MainContainer>
            
            <Title> Painel Administrativo</Title>
            
            <ButtonContainer>
                <Button onClick={() => goBack(navigate)}> VOLTAR </Button>
                <Button onClick={() => goToPage(navigate,'createTrip')} > CRIAR VIAGEM </Button>
                <Button onClick={() => goToHomePage(navigate)} >LOGOUT</Button>
            </ButtonContainer>

            <Select>
                <option>xxxxxx</option>
                <option>yyyyyy</option>
                <option>zzzzzz</option>
            </Select>

        </MainContainer>);

}
export default AdminHomePage;