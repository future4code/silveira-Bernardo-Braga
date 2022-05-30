import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const MainContainer = styled.div`
    width: 500px;
    height: 100px;

    display: flex;
    justify-content: center;

    margin-top:7px;
    margin-bottom:7px;
`
const ButtonDimiss = styled.img`
    width: 50px;
    height: 75px;
    margin-right: 70px;
`
const ButtonPass = styled.img`
    width: 50px;
    height: 75px;
    margin-left: 70px;
`

export default function Choice (props) {

    
	const getProfileChoice = async() => {
			const me = 'bernardo-silveira';
		
		try{
			
			const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/person`);
			console.log(response.data);
			props.SetPerson(response.data.profile)

		}catch(err){
			console.log(err.message);
		}
	}

    const postChoosePerson = async(id, choice) => {
			const me = 'bernardo-silveira'
		try{
            console.log(`o nome é o: ${props.Person.name} escolha: ${choice}`);
			console.log('PASSOU AQUI 1');
			const body =  {
				"id": id,
				"choice": choice
			}
			console.log('PASSOU AQUI 2');
			const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/choose-person`, body,'Content-Type: application/json');
			console.log('PASSOU AQUI 3');
			console.log(response.data);
	
		}catch(err){
			console.log('deu erro no post ')
			console.log(err)
		}
	}

    const doChoice = (id,choice) => {
        postChoosePerson(id,choice);
        getProfileChoice();

    } 

    return(
        <MainContainer>
            <ButtonDimiss 
            
            src={'https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/08/X-Vermelho-PNG.png'} 
            onClick={() => {doChoice(props.Person.id,false)}}>

            </ButtonDimiss>

            <ButtonPass 
            src={'https://greenpng.com/wp-content/uploads/2021/03/untitleddesign_1_original-51-300x300.png'} 
            onClick={() =>{doChoice(props.Person.id,true)}} >

            </ButtonPass>
        </MainContainer>
    )
}
