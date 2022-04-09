    import React from "react";
    import styled from 'styled-components';
    import axios from "axios";
    import AddMusic from "./AddMusic";


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
        // state = {
        //     telaAtual: 'primaria'
        // }
    
        // mudaTela = (nometela) => {
        //     console.log('a tela vai mudar para: '+ nometela);
        //     this.setState({
        //         telaAtual: nometela
        //     })
        // }
        
        // escolherTela = () => {
        //     console.log('passou aqui')
        //     switch (this.state.telaAtual) {
        //
        //         case 'addMusic':
        //             console.log('passou aqui')
        //             return <AddMusic/>;
        //         default:
        //             return <MostraPlaylist/>;
        //
        //     }
        // }
        
        
        render() {
            // const  escolherTela = () => {
            //     // console.log('passou aqui')
            //     switch (this.state.telaAtual) {
            //
            //         case 'addMusic':
            //             console.log('passou aqui')
            //             return <AddMusic/>;
            //         default:
            //             console.log('passou aqui')
            //             return <AddMusic/>;
            //
            //     }
            // }
            
            const listaPlalist = this.props.Playlist.map((playlist) => {

                return(
                    <NamePlaylist key={ playlist.id }>
                        { playlist.name }
                        
                        <Button
                            id={playlist.id}
                            onClick={ () => this.props.MudaTela('addMusic') }
                            placeholder={" Adicionar Musica a Playlist"}
                        >
                            Adicionar Musica a Playlist
                        </Button>
                            
                    </NamePlaylist>
                )
            })
            
            return(
                <MainContainer>
                    <Lista>
                        { listaPlalist }
                    </Lista>
                    {/*<div>*/}
                    {/*    { escolherTela()}*/}
                    {/*</div>*/}
                   
                    
                </MainContainer>
            );
        }
        
    }