    import React from "react";
    import styled from 'styled-components';
    import axios from "axios";


    const MainContainer = styled.div`
    
    
    `
    
    const Lista= styled.ol`
    
    `
    
    const NamePlaylist = styled.li`
    
    
    `
    const Button = styled.button`
    
    `
    /*
  
     */
    export default class MostraPlaylist extends React.Component {
    
        postAddTracktoPlayList = async() => {
            
            try{
                const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
                const header = {
                    headers:
                        {
                            Authorization: "bernardo-braga-silveira"
                        }
                }
                
                const body = {
                    body: {
                        "name": "string",
                        "artist": "string",
                        "url": "string"
                    }
                }
                
                const pathParam = {
                    playlistId: {
                        playlistId: this.props.Playlist.id
                    }
                }
    
                const response = await axios.post(url,body,header,pathParam) // sempre os parametros serao (url,body, header)
                
                console.log("passou no postAddTracktoPlayList")
                console.log(response)
            }catch(err){
                console.log(" deu erro no postAddTracktoPlayList")
                console.log(err)
            }
            
        }
        
        
        render() {
            const listaPlalist = this.props.Playlist.map((playlist) => {

                return(
                    <NamePlaylist
                        key={ playlist.id }
                    >
                        { playlist.name }
                        <Button
                            id={playlist.id}
                            onClick={ this.postAddTracktoPlayList }
                            placeholder={" Adicionar Musica a Playlist"}
                        >Adicionar Musica a Playlist</Button>
                            
                    </NamePlaylist>
                )
            })
            
            return(
                <MainContainer>
                    <Lista>
                        { listaPlalist }
                        
                    </Lista>
                   
                    
                </MainContainer>
            );
        }
        
    }