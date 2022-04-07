    import React from 'react';
    import styled from 'styled-components';
    import axios from 'axios';
    import CriaPlaylist from "./Components/CriaPlaylist";
    
    // modulo2/projeto-labefy/projeto-labefy
    
    const MainContainer = styled.div`
        background: pink;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        align-items: center;
    `
    const NameProjeto = styled.h1`
    
    `
    export default class App extends React.Component {
        // header = {
        //     headers:
        // }
        
        state = {
            name:""
        }
    
        postCreatePlaylist = async () => {
            try{
                console.log("deu certo");
            
                const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
                const body = {
                    name: this.state.name
                }
                const header = {
                    headers:
                        {
                            Authorization: "bernardo-braga-silveira"
                        }
                }
                const response = await axios.post(url,body,header)
            }
            
            catch(error){
                console.log("deu erro");
                console.log(error)
            }
        }
    
        onChangeNome = (event) => {
            console.log(event.target.value);
            this.setState({
                name: event.target.value
            });
        }
        
        

        render (){
            return (
             
                <MainContainer>
                    <NameProjeto>Bernardo Labefy</NameProjeto>
                  
                    <CriaPlaylist
                        nomePlaylist={this.state.name}
                        onChangeNome={this.onChangeNome}
                        postCreatePlaylist={this.postCreatePlaylist}
                    />
                </MainContainer>
             
            );
        }
    }
   
