import React from "react";
import styled from "styled-components";

const Titulo = styled.div`
    background: gray;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

  
`;

class Final extends React.Component{

    render() {
        return(
            <>
                <Titulo>
                    <h2>O FORMULÁRIO ACABOU</h2>
                </Titulo>
                <div>
                    <p>Muito obrigado por participar! Entraremos em contato!</p>
                </div>
            
            </>
        );
    }
}

export default Final;