import React from 'react';
import styled from 'styled-components'


const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`
const ButtonDimiss = styled.img`
    width:50px;
    height:50px;
    margin-right: 6rem;
`
const ButtonPass = styled.img`
    width:50px;
    height:50px;
    margin-left: 6rem;
`

export default function Choice (props) {

    return(
        <MainContainer>
            <ButtonDimiss src={'https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/08/X-Vermelho-PNG.png'} onClick={() => {props.PostChoosePerson(props.Person.id,false)}}></ButtonDimiss>
            <ButtonPass src={'https://greenpng.com/wp-content/uploads/2021/03/untitleddesign_1_original-51-300x300.png'} onClick={() =>{props.PostChoosePerson(props.Person.id,true)}} ></ButtonPass>
        </MainContainer>
    )
}
