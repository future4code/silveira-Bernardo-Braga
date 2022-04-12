import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;
const Titulo = styled.div`
    background: gray;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

  
`;
const PergERespostas = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`;
const Pergunta = styled.div`
    display: flex;
    flex-direction: column;
`;



class Etapa1 extends React.Component{


    render(){
        return(
            <MainContainer>
                <Titulo>
                    <h2>ETAPA 1 - DADOS GERAIS</h2>
                </Titulo>
                <PergERespostas>
                    <Pergunta>
                        <h3> 1. Qual o seu nome? </h3>
                        <input></input>
                    </Pergunta>
                    <Pergunta>
                        <h3> 2. Qual a sua idade? </h3>
                        <input></input>
                    </Pergunta>
                    <Pergunta>
                        <h3> 3. Qual o seu e-mail? </h3>
                        <input></input>
                    </Pergunta>
                    <Pergunta>
                        <h3> 4. Qual a sua escolaridade? </h3>
                        <select>
                            <option value="medioIncon">Ensino medio incompleto</option>
                            <option value="mediocomp">Ensino medio completo</option>
                            <option value="supIncon">Ensino superior incompleto</option>
                             <option value="supComp">Ensino superior completo</option>
                        </select>
                    </Pergunta>
                
               
                </PergERespostas>
            </MainContainer>

        );
    }
}

export default Etapa1;