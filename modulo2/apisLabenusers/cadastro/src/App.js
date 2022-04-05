import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
    background: pink;
    display: flex;
    width: 100%;
    height: 100%;

`

const TrocaTela = styled.div`

`

const Button = styled.button`

`

const ContainerCriar = styled.div`

`

const InputName  = styled.input`

`

const InputMail = styled.input`

`

const ButtonCriar = styled.button`

`

class App extends  React.Component {
    state = {

        inputName:"",
        inputMail:""
    }
    
    ComponentDidMount = () => {
        this.getAllUsers()
    }

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.inputName,
            email: this.state.inputMail
        }
        const headers = {
            headers: {
                Authorization: "bernardo-braga-silveira"
            }
        }
        console.log('PASSOU AQUI');
        axios.post(url,body,headers)
        .then((res) =>{

            console.log(res)
            console.log(body.name)

        })
        .catch((err) =>{
            console.log(err)
        })

    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            headers: {
                Authorization: "bernardo-braga-silveira"
            }
        }
        console.log('PASSOU AQUI');
        axios.get(url,headers)
        .then((res) => {
            console.log(res)
            this.setState({
                inputName:"",
                inputMail:""
            })
        })
        .catch((err) =>{
            console.log(err)
        })

    }


    onChangeInputName = (event) => {this.setState({inputName:event.target.value})}
    onChangeInputMail = (event) => {this.setState({inputMail:event.target.value})}

    render() {
        return (
            <MainContainer>
                
                <TrocaTela>    
                    <Button>Trocar de Tela</Button>
                </TrocaTela>

                <ContainerCriar>
                    <InputName 
                    value={this.state.inputName}
                    placeholder={"nome"}
                    onChange={this.onChangeInputName}
                    />

                    <InputMail 
                    value={this.state.inputMail}
                    placeholder={"email"}
                    onChange={this.onChangeInputMail}
                    />

                    <ButtonCriar onClick={this.createUser}>Criar Usuario</ButtonCriar>
                </ContainerCriar>

            </MainContainer>
        );

    }
}
export default App;
