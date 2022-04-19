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
  

  
  const postChoosePerson = async() => {
    const me = `bernardo-silveira` 
    
    try{
      const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${me}/choose-person`);
      console.log(response.data);
    }catch(err){
      console.log(err.message)

    }
  }
  
  return (    
    
    <MainContainer>
      <Headers>

        <h2>AstroMatch</h2>
        <ButtonSeeMatch>Ver o Match</ButtonSeeMatch>

      </Headers>

      <UserContainer>
        bernardo
      </UserContainer>

      <ChoiceContainer>
        bernardo
      </ChoiceContainer>
      <ButtonClear>Limpar todos os matches</ButtonClear>
    </MainContainer>
    
  );
}

 export default App;


// cd Astromatch/astromatch