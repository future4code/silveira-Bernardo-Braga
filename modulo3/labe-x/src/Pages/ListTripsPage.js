import react, {useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { goBack, goToPage } from '../routes/coordinator';
import {Button, ButtonContainer } from '../Styles/styles'



const MainContainer = styled.div``

const InfoTrip = styled.div``
const Name = styled.div`` 

const Description = styled.div``


const Planet = styled.div``

const Duration = styled.div`` 

const Date = styled.div`` 


const ListTripsPage = () =>{
    

    const navigate = useNavigate();

    return (
        <MainContainer>

            <ButtonContainer>
                <Button onClick={() => goBack(navigate)}> voltar </Button>
                <Button onClick={() => goToPage(navigate,'aplicationForm')}> inscrever-se </Button>
            </ButtonContainer>
            
            <InfoTrip>
                <Name>nome</Name>
                <Description>descricao</Description>
                <Planet>planeta</Planet>
                <Duration>duracao</Duration>
                <Date>data</Date>
            </InfoTrip>
        </MainContainer>
    );

}
export default ListTripsPage;