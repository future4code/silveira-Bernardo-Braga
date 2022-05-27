import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`

    width: 500px;
    height:100px;

    margin: 20px;
    display: flex;
    align-items: center;
`
const PhotoMatch = styled.img`
    width: 80px;
    height:80px;
    border-radius: 30px;

    margin-left: 10px;
`
const AgeMatch = styled.div`
    margin-left: 10px;
`
const NameMatch = styled.div`
    margin-left: 10px;
`


export default function ShowMatches(props){
// console.log('==============')

// console.log('==============')
    return (
        <MainContainer>
            <PhotoMatch src={props.FotoMatch}></PhotoMatch>
            <NameMatch>{props.NameMatch}</NameMatch>
            <AgeMatch>{props.IdadeMatch}</AgeMatch>
        </MainContainer>
    )
}