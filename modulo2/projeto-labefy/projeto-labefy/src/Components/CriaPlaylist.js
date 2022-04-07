    import React from 'react';
    import styled from 'styled-components';
   
   
    const InputNamePlaylist = styled.input`
        width: 170px;
        height: 10px;
    `
    const Button = styled.button`
    
    `
   
    export default class CriaPlaylist extends React.Component {

      
        render() {
            return(
                <>
                    <InputNamePlaylist
                        value={ this.props.nomePlaylist }
                        onChange={ this.props.onChangeNome }
                        placeholder={ "Nome da nova Playlist" }
                    />
                    <Button
                    onClick={ this.props.postCreatePlaylist }
                    >Adicionar PlayList
                    </Button>
                        
                    
                </>
            );
        }
    }





