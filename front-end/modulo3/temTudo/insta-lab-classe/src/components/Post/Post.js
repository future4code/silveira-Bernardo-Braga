import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeComentario from '../../img/comment_icon.svg'


const Post = (props) => {/*
        Dentro do array, primeiro, vem a variável curtido, que vai guardar
	    o valor do estado inicial. Depois, em segundo, vem a função que será 
	    usada para mudar o valor de curtido, quando quisermos. Ela equivale à
	    função this.setState para a propriedade curtido do estado. 
	    Além disso, o valor que é passado dentro do Hook useState (false) 
	    representa o valor do Estado Inicial. 
    */
  
    const [curtido, setCurtido] = useState(false)
    const [numeroCurtidas, setNumeroCurtidas] = useState(0)
    const [comentando, setComentando] = useState(false)
    const [numeroComentarios, setNumeroComentarios] = useState(0)
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
  // método chamado quando o ícone de comentário é clicado. O método apenas muda o valor de 
  // comentando no estado, de true para false ou de false para true.
  onClickComentario = () => {

      setComentando(!comentando )
    }
  

  // recebe como parâmetro um comentário, que vem do componente SecaoComentario. Com esse parâmetro, o método
  // o inclui na lista de comentários do estado, com a desestruturacao e o this.setState. 
  enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    
      setComentarios (listaDeComentarios),
      setComentando (false),
      setNumeroComentarios (numeroComentarios + 1)
    
  }

  
    // De acordo com a propriedade curtido do estado, o valor muda entre  iconeCoracaoPreto e o iconeCoracaoBranco, 
    // que estão sendo importados nas linhas 7 e 8, respectivamente. 
    const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

    // expressão condicional que, de acordo com o valor de comentando no estado, renderiza o componente
    // SecaoComentario ou o CommentContainer. Esta expressão está sendo chamada no JSX na linha 104
    const caixaDeComentario = comentando ? (
      // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
      <SecaoComentario enviarComentario={enviarComentario}/>
    ) : (
      // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
      // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
      comentarios.map(comentario => {
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })
    )

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  
}

export default Post