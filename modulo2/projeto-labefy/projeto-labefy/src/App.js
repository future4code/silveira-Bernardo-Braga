    import React from 'react';
    import styled from 'styled-components';
    import axios from 'axios';
    import CriaPlaylist from "./Components/CriaPlaylist";
    import MostraPlaylist from "./Components/MostraPlaylist";
    
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
            name:"",
            playlist: [ ],
            sizeList: 0
        }
    
        componentDidMount() {
            this.getAllPlaylist();
        }
        
        
        postCreatePlaylist = async () => {
            try{
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
                const response = await axios.post(url,body,header) // sempre os parametros serao (url,body, header)
                console.log("deu certo");
                console.log(response);
                this.setState({name: ""})
                this.getAllPlaylist();
            }
            catch(error){
                console.log("deu erro");
                console.log(error)
            }
        }
        getAllPlaylist = async () => {
            try{
                const header = {
                    headers:
                        {
                            Authorization: "bernardo-braga-silveira"
                        }
                }
                const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
                const response = await axios.get(url,header)
                
                // console.log("deu certo getAllPlaylist")
                // console.log(response.data.result.list);

                this.setState({
                    playlist: response.data.result.list,
                    sizeList: response.data.result.list.length,
                })
                
    
            }catch(error){
                console.log('deu erro getAllPlaylist');
                console.log(error);
                
            }
        }
        
        onChangeNome = (event) => {
            // console.log(event.target.value);
            this.setState({
                name: event.target.value
            });
        }
        
        

        render (){
            console.log("=========state=============")
            console.log(this.state.playlist);
            

            const listaPlalist = this.state.playlist.map((playlist) => {
                return <div key={ this.state.playlist.id }> { playlist.name } </div>
            })

            return (
             
                <MainContainer>
                    <NameProjeto>Bernardo Labefy</NameProjeto>
                  
                    <CriaPlaylist
                        nomePlaylist={this.state.name}
                        onChangeNome={this.onChangeNome}
                        postCreatePlaylist={this.postCreatePlaylist}
                    />
                    <MostraPlaylist
                        Playlist={ this.state.playlist }
                    />
                </MainContainer>
             
            );
        }
    }
   
