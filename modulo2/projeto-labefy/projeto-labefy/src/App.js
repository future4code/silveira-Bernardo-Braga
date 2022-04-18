    import React from 'react';
    import styled from 'styled-components';
    import axios from 'axios';
    import CriaPlaylist from "./Components/CriaPlaylist";
    import MostraPlaylist from "./Components/MostraPlaylist";
    import AddMusic from "./Components/AddMusic";
    
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

        
        state = {
            name:"",
            playlist: [ ],
            sizeList: 0,
            telaAtual:'primaria'
        }
    
        componentDidMount() {
            this.getAllPlaylist();
        }
    
        mudaTela = (nometela, ) => {
            console.log('a tela vai mudar para: '+ nometela);
            this.setState({
                telaAtual: nometela
            })
        }
    

        // escolherTela = () => {
        //     switch (this.state.telaAtual) {
        //         case 'primaria':
        //             return
        //         case 'addMusic':
        //             return <AddMusic/>;
        //         default:
        //             return <MostraPlaylist/>;
        //
        //     }
        // }
        //
        // mudaTela = (nometela) => {
        //     this.setState({
        //         telaAtual: nometela
        //     })
        // }
        
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
                console.log(response.data.result.list);

                this.setState({
                    playlist: response.data.result.list,
                    sizeList: response.data.result.quantity
                    
                })
                // console.log("deu certo getAllPlaylist")
    
            }catch(error){
                console.log('deu erro getAllPlaylist');
                console.log(error);
                
            }
        }
        postAddTracktoPlayList = async(idPlalist, name, artist, url1) => {
            /*
            requisicao que adiciona musica na playlist
             */
            try{
                const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
                const header = {
                    headers:{
                        Authorization: "bernardo-braga-silveira"
                    }}
                const body = {body: {
                        "name": name,
                        "artist": artist,
                        "url": url1
                    }}
                const pathParam = {playlistId: {
                        playlistId: idPlalist
                    }}
                console.log('passou aqui')
                const response = await axios.post(url,body,header,pathParam) // sempre os parametros serao (url,body, header)
                console.log("passou no postAddTracktoPlayList")
                console.log(response)
            }catch(err){
                console.log(" deu erro no postAddTracktoPlayList")
                console.log(err)
            }
        }
        getPlaylistTracks = async(nomePlaylist) => {
            try{
                const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
    
                const header = {
                    headers:{
                        Authorization: "bernardo-braga-silveira"
                    }}
                const query = {
                    name:{
                        name: nomePlaylist
                    }
                }
                
                console.log('passou aqui getPlaylistTracks')
                
                const response = await axios.post(url, header, query)
                console.log(response);
                
                
            }catch(err){
                console.log(" deu erro getPlaylistTracks")
                console.log(err);
            }
        }
        
        onChangeNome = (event) => {
            // console.log(event.target.value);
            this.setState({
                name: event.target.value
            });
        }
/*
    Falta para o trabalho a parte de adicionar musicar para a playlist , a parte de trocar de tela, para o usuario colocar a musica,
    a parte de excluir uma musica , a parte de excluir uma playlist , e a parte de o usuario escutar a musica
    
 */
        escolherTela = () => {
            // console.log('passou aqui')
            switch (this.state.telaAtual) {
            
                case 'addMusic':
                    // console.log('passou aqui case')
                    return <AddMusic
                        MudaTela={this.mudaTela}
                        Playlist={ this.state.playlist.id }
                        AddMusicaPlaylist={ this.postAddTracktoPlayList }
                    />;
                    
                default:
                    // console.log('passou aqui default')
                    return(
                        <MainContainer>
                            <NameProjeto>Bernardo Labefy</NameProjeto>
                        
                            <CriaPlaylist
                                nomePlaylist={this.state.name}
                                onChangeNome={this.onChangeNome}
                                postCreatePlaylist={this.postCreatePlaylist}
                            />
                            <MostraPlaylist
                                Playlist={ this.state.playlist }
                                MudaTela={this.mudaTela}
                                // TelaAtual={this.state.TelaAtual}
                            />
                        </MainContainer>
                    );
            
            }
        }
        
        render (){
            // console.log("=========state=============")
            // console.log(this.state.playlist);
            

            // const listaPlalist = this.state.playlist.map((playlist) => {
            //     return <div key={ this.state.playlist.id }> { playlist.name } </div>
            // })

            return (
                <>
                    { this.escolherTela() }
                </>
                
                // <MainContainer>
                //     <NameProjeto>Bernardo Labefy</NameProjeto>
                //
                //     <CriaPlaylist
                //         nomePlaylist={this.state.name}
                //         onChangeNome={this.onChangeNome}
                //         postCreatePlaylist={this.postCreatePlaylist}
                //     />
                //     <MostraPlaylist
                //         Playlist={ this.state.playlist }
                //         MudaTela={this.mudaTela}
                //         // TelaAtual={this.state.TelaAtual}
                //     />
                // </MainContainer>
                //
            );
        }
    }
   
