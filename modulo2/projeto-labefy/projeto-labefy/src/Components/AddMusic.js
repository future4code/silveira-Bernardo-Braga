    import React from 'react';
    import styled from 'styled-components';
    import axios from "axios";
    
    const MainContainer = styled.div`
    
    `
    const Button = styled.button`
    
    `
    const InputNameMusic = styled.input`
        width: 170px;
        height: 10px;
    `
    const InputNameArtist = styled.input`
        width: 170px;
        height: 10px;
    `
    const InputUrl = styled.input`
        width: 170px;
        height: 10px;
    `
    const InputZone = styled.div`
        display: flex;
    `
    
    
    export default class AddMusic extends React.Component {
        state = {
            music:'',
            artist:'',
            url:'',
        }
    
        onChangeMusic = (ev) => {
            this.setState({
                music: ev.target.value
            })
        }
        onChangeArtist = (ev) => {
            this.setState({
                artist: ev.target.value
            })
        }
    
        onChangeUrl = (ev) => {
            this.setState({
                url: ev.target.value
            })
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
        
                render(){
            console.log( this.props.Playlist )
            
            return(
                
                <MainContainer>
                    <Button onClick={() => this.props.MudaTela('principal')}>voltar para a principal</Button>
                    <InputZone>
                        <InputNameMusic
                            value={ this.state.music }
                            onChange={ this.onChangeMusic }
                            placeholder={ "Nome da musica para adicionar" }
                        />
                        <InputNameArtist
                            value={ this.state.artist }
                            onChange={ this.onChangeArtist }
                            placeholder={ "Nome do artista da musica" }
                        />
                        <InputUrl
                            value={ this.state.url }
                            onChange={ this.onChangeUrl }
                            placeholder={ "coloque a url da musica" }
                        />
                        <Button onClick={() => this. postAddTracktoPlayList( this.props.Playlist, this.state.music, this.state.artist, this.state.url  ) } >adicionar musica na playlist</Button>

                    </InputZone>
                    
                    
                    
                </MainContainer>
            )
            
        }
    
       
    }