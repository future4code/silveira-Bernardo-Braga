	import React, {useState, useEffect} from 'react';

	import styled from "styled-components";
	import axios from 'axios';
	import ShowMatches from "./components/ShowMatches";
	import ShowUser from "./components/ShowUser";
	import Choice from "./components/Choice";

	const MainContainer = styled.div`
		background:lightblue;
		border:3px solid black;

		width: 500px;
		height:100%;
		
		margin-top: 200px;
		margin-bottom: 200px;
		margin-left: 300px;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
	
	`
	const Headers = styled.header`
		background:yellow;

		width: 500px;

		display: flex;
		align-items: center;
		justify-content: space-between;
	`
	const ButtonSeeMatch = styled.button`
		margin-right: 30px;
	
	`
	const Title = styled.h2`
		margin-left:30px;
	`
	const ButtonClear = styled.button`

	`
	const Show = styled.div`
	
	`


function App () {
	const [mudaTela, setMudaTela] = useState(false);  //isso é um State, atributo de State
	const [person, setPerson] = useState([]);  // cria o componente de estado do ide do personagem
	const [matches, setMatches] = useState([]);  // cria estado de matches
	
	useEffect(() => {
		document.title = "AstroMatch Bernardo-braga"
		getProfileChoice()
	},[])

	const getProfileChoice = async() => {
			const me = 'bernardo-silveira';
		try{
			const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/person`);
			setPerson(response.data.profile)
			
		}catch(err){
			console.log(err.message);
		}
	}

	const getMatches = async() => {
			const me = 'bernardo-silveira';
		
		try {
			
			const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/matches`)
			setMatches(response.data.matches); 
			

		} catch (err) {
			console.log(err.message)
		}
	}

	const putClear = async() => {
			const me = 'bernardo-silveira';
		try {
		
			const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/clear`,'Content-Type: application/json')
			 setMudaTela(false)
		
		} catch (err) {
		
			console.log(err.message);
		
		}
	}
	
	const onClickSee = (bool) => {
		
		setMudaTela(bool);
		getMatches();
		
	}

	const seeMatches = matches.map((match => {
		return(
			<ShowMatches
				FotoMatch={match.photo}
				NameMatch={match.name}
				IdadeMatch={match.age}
			/>
		)
	}))

	const escolheTela = () => {
		console.log(`a tela ira mudar para ${mudaTela}`)
		if (mudaTela === true) {
			return(
				<>
					<Headers>
						<h2>AstroMatch</h2>
						<ButtonSeeMatch onClick={() => onClickSee(false)}> Matchear </ButtonSeeMatch>
					</Headers>
			
					<Show>
						{seeMatches}
					</Show>	

					<ButtonClear onClick={putClear}>
						Limpar todos os matches
					</ButtonClear>
				</>
			);
		
		}else if(mudaTela === false){
				return(
				<>
					<Headers>
						<Title>AstroMatch</Title>
						<ButtonSeeMatch onClick={() => onClickSee(true)} >Ver o Match</ButtonSeeMatch>

					</Headers>

					<ShowUser
						GetProfileChoice={() => {getProfileChoice()}}
						Person={person}

						
					/>
					
					<Choice
						SetPerson={setPerson}
						Person={person}
					/>

					
				</>
				);
				
					
		}else{return(<p>algo de errado aconteceu com o switch</p>);}
	}
	
	return (
		<MainContainer>					
			{escolheTela()}
		</MainContainer>
		
	);
}

	export default App;


	// cd modulo3/Astromatch/astromatch