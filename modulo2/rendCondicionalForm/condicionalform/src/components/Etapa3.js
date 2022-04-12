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



class Etapa3 extends React.Component{


    render(){
        return(
            <MainContainer>
                <Titulo>
                    <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                </Titulo>
                <PergERespostas>
                    <Pergunta>
                        <h3> 6. Por que você não terminou um curso de graduação? </h3>
                        <input></input>
                    </Pergunta>
                    <Pergunta>
                        <h3> 7. Você fez algum curso complementar?</h3>
                       <select>
                            <option value="nenhum">Nenhum</option>
                            <option value="CursoTec">Curso Tecnico</option>
                            <option value="cursoIngles">Curso de Ingles</option>
                        </select>
                    </Pergunta>
                    
               
                </PergERespostas>
            </MainContainer>

        );
    }
}

export default Etapa3;