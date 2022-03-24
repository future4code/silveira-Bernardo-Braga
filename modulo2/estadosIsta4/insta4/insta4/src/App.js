import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'berbraga1',
        fotoUsuario:'https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg',
        fotoPost: 'https://i.pinimg.com/736x/ff/07/a1/ff07a1371248f1ed19dc336887a3e4a3.jpg'
      },

      {
        nomeUsuario: 'miro',
        fotoUsuario: 'https://images.unsplash.com/photo-1606946887361-78feb162a525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90b3xlbnwwfHwwfHw%3D&w=1000&q=80',
        fotoPost: 'https://http2.mlstatic.com/D_NQ_NP_824095-MLB25736683552_072017-O.jpg'
      }
    ],
    valorInputNome:"",
    valorInputFtUsuario:"",
    valorInputFtPost:""
    
  }



  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });

  };

  onChangeInputFtUsuario = (event) => {
    this.setState({ valorInputFtUsuario: event.target.value});

  };

  onChangeInputFtPost = (event) => {
    this.setState({ valorInputFtPost: event.target.value });

  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFtUsuario,
      fotoPost: this.state.valorInputFtPost
    };
    const novoPosts = [...this.state.pessoas, novoPost];

    this.setState({
      pessoas: novoPosts,
      valorInputNome:"",
      valorInputFtUsuario:"",
      valorInputFtPost:""
    })

    
  }

  render() {

    const listaPost = this.state.pessoas.map((pessoa) => {
       return (
        <Post 
        nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario}
        fotoPost={pessoa.fotoPost}
        />
      );
    });
    

    return (
      <MainContainer>
        <div>
          <input 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"nomeUsuario"}
          />
          <input 
          value={this.state.valorInputFtUsuario}
          onChange={this.onChangeInputFtUsuario}
          placeholder={"fotoUsuario"}
          />
          <input
          value={this.state.valorInputFtPost}
          onChange={this.onChangeInputFtPost}
          placeholder={"fotoPost"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        <p>{listaPost}</p>
      </MainContainer>
    );
  }
}

export default App;
