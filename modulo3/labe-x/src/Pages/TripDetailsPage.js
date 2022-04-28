import react, {useState, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import {Button, ButtonContainer, Title, InfoContainer, Info } from '../Styles/styles'
import { goBack } from '../routes/coordinator';

const MainContainer = styled.div`` 



const TripDetailPage = () =>{


    const navigate = useNavigate();

    return (
        <MainContainer>
            
            <Title>Levis</Title>

            <InfoContainer>

                <Info> Nome : ------ </Info>
                <Info> Descricao : ======= </Info>
                <Info> Planeta : _______ </Info>
                <Info> Duracao : xxx dias </Info>
                <Info> Data : dd/mm/yyyy </Info>

            </InfoContainer>

             
            <ButtonContainer>
                <Button onClick={() => goBack(navigate)} >VOLTAR</Button>
            </ButtonContainer>
        </MainContainer>
    );

}
export default TripDetailPage;