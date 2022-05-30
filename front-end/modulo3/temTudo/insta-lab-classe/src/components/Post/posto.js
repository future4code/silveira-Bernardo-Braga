import React, { useState } from 'react'


const Post = (props) => {

    const [curtido, setCurtido] = useState(false)
	/*
        Dentro do array, primeiro, vem a variável curtido, que vai guardar
	    o valor do estado inicial. Depois, em segundo, vem a função que será 
	    usada para mudar o valor de curtido, quando quisermos. Ela equivale à
	    função this.setState para a propriedade curtido do estado. 
	    Além disso, o valor que é passado dentro do Hook useState (false) 
	    representa o valor do Estado Inicial. 
    */
    const [numeroCurtidas, setNumeroCurtidas] = useState(0)
    const [comentando, setComentando] = useState(false)
    const [numeroComentarios, setNnumeroComentarios] = useState(0)
    const [comentarios, setComentarios] = useState([])
    
    
    
  onClickCurtida = () => {
    
    // verifica se, no estado, cutido é true ou false
    if (curtido) {
        setCurtido(!curtido)
        setNumeroCurtidas(!numeroCurtidas - 1)
    } else {
        setCurtido(!curtido)
        setNumeroCurtidas(!numeroCurtidas + 1)        
    }
  }

      const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  return  <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
}