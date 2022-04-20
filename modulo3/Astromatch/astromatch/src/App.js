	import React, {useState, useEffect} from 'react';

	import styled from "styled-components";
	import axios from 'axios';

	const MainContainer = styled.div`
		border: 1px solid;
		border-radius: 5px;
		background: aquamarine;
	
	`
	const Headers = styled.header`
		background: purple;
		display: flex;
		justify-content: center;
		align-items: center;
	`
	const ButtonSeeMatch = styled.button`
	
	`
	const ChoiceContainer = styled.div`
		background: orange;

	`
	const UserContainer = styled.div`
		background: burlywood;

	`
	const ButtonClear = styled.button`

	`


function App () {
	

	
	const postChoosePerson = async(id, choice) => {
			const me = `bernardo-silveira`   
		try{
		
			const body = {
				"id": id,
				'choice': choice
			}
			const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/choose-person`, body,'Content-Type: application/json');
			console.log(response.data);
		
		}catch(err){
			console.log(err.message)
		}
	}

	const getProfileChoice = async() => {
			const me = 'bernardo-silveira';
		
		try{
			
			const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/person`);
			console.log(response.data);
			
		}catch(err){
			console.log(err.message);
		}
	}

	const getMatches = async() => {
			const me = 'bernardo-silveira';
		
		try {
			
			const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/matches`)
			console.log(response.data);

		} catch (err) {
			console.log(err.message)
		}
	}

	const putClear = async() => {
			const me = 'bernardo-silveira';
		try {
		
			const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/clear`,'Content-Type: application/json')
		
		} catch (err) {
		
			console.log(err.message);
		
		}
	}
	
	return (    
		
		<MainContainer>
			<Headers>

				<h2>AstroMatch</h2>
				<ButtonSeeMatch onClick={getMatches}>Ver o Match</ButtonSeeMatch>
			{/* 
				O botao a cima tem que te direcionar para outra pagina, e mostrar
				todos os seus matches 
			*/}

			</Headers>

			<UserContainer>
			{/* 

				aqui tera que mostrar a foto da pessoa que vc pegou da api e 
				mostrar na tela do usuario e mostrar junto com a imagem mostrar a 
				descricao da pessoa, o nome, a idade, e a foto. A primeira ideia eh
				de pegar essas informacoes pelo metodo getProfileChoosee 
			
			*/}
			</UserContainer>

			<ChoiceContainer>
			
			{/* 
				
				A INTENCAO EH COLOCAR 2 BOTOES UM DE "GOSTEI" E O OUTRO DE "NAO GOSTEI"
				NA QUAL TERAO UMA FUNCAO DE onClick QUE VAI PASSAR POR PARAMETRO O ID DA PESSOA E A 
				ESCOLHA(SENDO TRUE OU FALSE), A PRIMEIRA IDEIA EH DE A FUNCAO onClick SER A FUNCAO postChoosePerson
				da api , o parametro de id pode ser pego com o retorno da funcao
				getProfileChoosee .id se nao me engano
			
			*/}
			</ChoiceContainer>
			
			<ButtonClear onClick={putClear} >Limpar todos os matches</ButtonClear>
			{/* 
			
				o botao a cima tem que limpar todos os seus matches  
			
			*/}

		</MainContainer>
		
	);
}

	export default App;


	// cd Astromatch/astromatch