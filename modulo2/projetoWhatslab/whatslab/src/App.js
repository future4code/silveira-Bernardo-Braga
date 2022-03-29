import React from 'react';
import styled from 'styled-components';
import './App.css';

const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    background-color: greenyellow;
    padding-top: 7px;
    padding-left: 50px;
    border: 50px;
`

 const UnderContainer =styled.footer`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%; /* Note a medida */
    background-color: blue;
`; 


class App extends React.Component {
    state ={
        mensagem: [
            {
                nickName: "nickName",
                mensagem: "sua mensagem aparecera aqui!!"
            }
        ],
        valorInputNickName:"",
        valorInputMensagem:""
    }

    onChangeInputNickName = (event) => {
        this.setState({ valorInputNickName: event.target.value });
    };

    onChangeInputMensagem = (event) =>{
        this.setState({ valorInputMensagem: event.target.value });
    };

    adicionaComentario = () => {
        const novaMensagem = {
            mensagem: this.state.valorInputMensagem,
            nickName: this.state.valorInputNickName
        };

        const novaMensagens = [...this.state.mensagem, novaMensagem];
        this.setState({
            mensagem:novaMensagens,
            valorInputMensagem:"",
            valorInputNickName:""
        })
    }



    render() {
        return (
            <>
                <MainContainer>
                    
                </MainContainer>

                <UnderContainer>
                    <input
                        value={ this.state.valorInputNickName }
                        onChange={ this.onChangeInputNickName }
                        placeholder={ "nickName" }
                    />
                    <input
                        value={ this.state.valorInputMensagem }
                        onChange={ this.onChangeInputMensagem }
                        placeholder={ "mensagem" }
                    />

                    <button onClick={ this.adicionaComentario }>
                        comentar
                    </button>
                </UnderContainer>

            </>
        );
    }
}

export default App;
