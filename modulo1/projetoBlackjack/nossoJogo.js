/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   function iniciaJogo(pessoa, computador){
      for(let i = 1; i <= 4; i++){
         const carta = comprarCarta(); // Sorteia uma carta. 
         if( pessoa.qnt <= 1 ){
            //console.log('PASSOU AQUI1');
            pessoa.carta.push(carta.texto)  // = ;
            pessoa.valor += carta.valor;
            pessoa.qnt +=1
         }else{
            //console.log('PASSOU AQUI2');
            computador.carta.push(carta.texto)  // = carta.texto;
            computador.valor += carta.valor;
            computador.qnt +=1
         }
      }
   }

   function showCard(obj){
      var mostra = []
      for( let i = 0; i <= (obj.qnt-1); i++){
         mostra[i] = obj.carta[i];
         //console.log('PASSOU AQUI4');
         // console.log(mostra);
      }
      //console.log('PASSOU AQUI5');
      return `${mostra}`;
   }

   function mostraCarta(pessoa,computador){
      /*MOISTRAR NO FORMATO A SEGUIR
      "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
      "Computador - cartas: Q♣️ 10♣️  - pontuação 20
      */
         // console.log('PASSOU AQUI3');
      console.log(`Usuário - cartas: ${showCard(pessoa)} - pontuacao: ${pessoa.valor}`)
      console.log(`computador - cartas: ${showCard(computador)} - pontuacao: ${computador.valor}`)
   }

   function mostraCampeao(pessoa,computador){
      if(pessoa.valor > computador.valor){
         console.log("O usuário ganhou!")
         return;
      }else if(pessoa.valor < computador.valor){
         console.log("O computador ganhou!")
         return;
      }else{
         console.log("deu empate");
         return;
      }
   }

   function main() {
      console.log('----------> Boas vindas ao jogo Blackjack!! <---------- ');
      if(confirm('Quer iniciar uma nova rodada??')){
         const pessoa = {
            nome: 'Pessoa',
            carta: [],
            valor:  0,
            qnt: 0
         }
         const computador = {
            nome: 'Computador',
            carta: [],
            valor: 0,
            qnt: 0 
         }
         iniciaJogo(pessoa,computador);
         mostraCarta(pessoa,computador);
         mostraCampeao(pessoa,computador);
      }else{
         console.log('O jogo acabou!')
      }
      return;
   }

   main();