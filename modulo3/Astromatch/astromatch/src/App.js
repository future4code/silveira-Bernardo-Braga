	import React, {useState, useEffect} from 'react';

	import styled from "styled-components";
	import axios from 'axios';
	import ShowMatches from "./components/ShowMatches";
	import ShowUser from "./components/ShowUser";
	import Choice from "./components/Choice";

	const MainContainer = styled.div`
		margin:0px;
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
	const ButtonClear = styled.button`

	`


function App () {
	const [mudaTela, setMudaTela] = useState('main');  //isso é um State, atributo de State
	const [person, setPerson] = useState([]);  // cria o componente de estado do ide do personagem
	//const [choice, setChoice] = useState(false);  //cria o componente de estado da escolha 
	
	useEffect(() => {
		getProfileChoice()
	},[])

	const postChoosePerson = async(id, choice) => {
			const me = 'bernardo-silveira'
		try{
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

	const getProfileChoice = async() => {
			const me = 'bernardo-silveira';
		
		try{
			
			const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/person`);
			console.log(response.data);
			setPerson(response.data.profile)
			
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

	const trocaTela = ( nomeTela ) => {
		setMudaTela(nomeTela);
	}
	
	const doChoice = (id, choice) => {

	}

	const escolheTela = () => {
		console.log(`a tela ira mudar para ${mudaTela}`)
		switch (mudaTela) {
			case 'mostrar matches':
				return(
					<ShowMatches
						trocaTela={ trocaTela() }
						getMatches={ getMatches() }
					/>
				);
			case 'main':
				// nameUser()
				return(
				<>
					<ShowUser
						
						Person={person}
						
					/>
					{/* 
						aqui tera que mostrar a foto da pessoa que vc pegou da api e 
						mostrar na tela do usuario e mostrar junto com a imagem mostrar a 
						descricao da pessoa, o nome, a idade, e a foto. A primeira ideia eh
						de pegar essas informacoes pelo metodo getProfileChoosee 
					
					*/}
					<Choice
						PostChoosePerson={() => postChoosePerson()}
						Person={person}
					/>
						
					{/*
						A INTENCAO EH COLOCAR 2 BOTOES UM DE "GOSTEI" E O OUTRO DE "NAO GOSTEI"
						NA QUAL TERAO UMA FUNCAO DE onClick QUE VAI PASSAR POR PARAMETRO O ID DA PESSOA E A 
						ESCOLHA(SENDO TRUE OU FALSE), A PRIMEIRA IDEIA EH DE A FUNCAO onClick SER A FUNCAO postChoosePerson
						da api , o parametro de id pode ser pego com o retorno da funcao
						getProfileChoosee .id se nao me engano
					*/}
					
					
					<ButtonClear onClick={putClear} >Limpar todos os matches</ButtonClear>
					{/*
						o botao a cima tem que limpar todos os seus matches
					*/}
				</>
				);
				default:
					return(<p>algo de errado aconteceu com o switch</p>);
		}
	}
	
	return (
		<MainContainer>					
			<Headers>
						<h2>AstroMatch</h2>
						<ButtonSeeMatch onClick={() => trocaTela('mostrar matches')} >Ver o Match</ButtonSeeMatch>
					{/* 
						O botao a cima tem que te direcionar para outra pagina, e mostrar
						todos os seus matches 
					*/}
					</Headers>
			{escolheTela()}
		</MainContainer>
		
	);
}

	export default App;


	// cd modulo3/Astromatch/astromatch