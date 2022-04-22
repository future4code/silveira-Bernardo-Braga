import React, {useState} from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
    display: block;
    text-align: center;
`
const ImagemPersonagem = styled.img`
    width: 300px;
    height: 300px;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Person = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
`

const NameUser= styled.div`
    margin-right: 10px;
`
const IdadeUser = styled.div`

`
const DescriptionUser = styled.div`
    margin-bottom: 10px;
    margin-top: 5px;
`

export default function ShowUser (props) {
{/* 
	aqui tera que mostrar a foto da pessoa que vc pegou da api e 
	mostrar na tela do usuario e mostrar junto com a imagem mostrar a 
	descricao da pessoa, o nome, a idade, e a foto. A primeira ideia eh
	de pegar essas informacoes pelo metodo getProfileChoosee 
*/}

    return(
        <MainContainer>
            <ImagemPersonagem src={props.Person.photo} />
            <InfoContainer>
                <Person>
                    <NameUser>{props.Person.name}</NameUser>
                    <IdadeUser>{props.Person.age} anos</IdadeUser>
                </Person>
                <DescriptionUser>{props.Person.bio}</DescriptionUser>
            </InfoContainer>


        </MainContainer>
    )
}