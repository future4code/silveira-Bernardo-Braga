import React, {useState} from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
    background: orange;
    opacity: 0,5;
    margin-top: 5px;
    margin-left: 1px;

    /* border: 1px solid blue; */

    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
`
const ImagemPersonagem = styled.img`
    width: 498px;
    height: 300px;
    margin: 0px;
`
const InfoContainer = styled.div`
    background-color: aliceblue;
    opacity: 0,5;
    position: absolute;
    width: 498px;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

`
const Person = styled.div`
    display:flex;
    margin: 5px;
    margin-left: 15px;

`

const NameUser= styled.div`
    margin-right: 10px;

`
const IdadeUser = styled.div`
    margin-left: 10px;
    margin-right: 100%;
`
const DescriptionUser = styled.div`
    display: flex;
`

export default function ShowUser (props) {

    return(
        <MainContainer>
            
            <ImagemPersonagem  src={props.Person.photo}/>
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