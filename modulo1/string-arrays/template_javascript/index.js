/*
    exercicio de interpretacao de codigo
    1) console 1 = indefinido
    console2 = null
    console 3 = 11
    console4 = 3
    console 5 = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console6 = 9

    2) SUBI NUM ONIBUS EM MIRROCOS , 27
 */

    // EXERCICIO DE ESCRITA DE CODIGO

    // 1) 

    const emailUsuario = prompt(' digite o seu e mail ')
    const nomeUsuario = prompt (' digite o seu nome: ')
    console.log(` O e-mail do usuario ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}!`)

    //2)

    let comidaFav = ["\nboi","\nsalada nao","\npixe","\nleite","\nfrango"]
    console.log(`  minhas comidas favoritas sao: ${comidaFav}`);
    let trocaComida = prompt('digite uma comida que voce goste')
    comidaFav[1] = "\n"+trocaComida
    console.log(`depois da troca: ${comidaFav}`);
    
    // 3)

    let listaDeTarefas = ["","",""]
    listaDeTarefas[0] = prompt('digite uma tarefa que vc precise realizar no dia')
    listaDeTarefas[1] = prompt('digite outra tarefa que vc precise realizar no antes de morrer!!!!!!')
    listaDeTarefas[2] = prompt('digite outra, outra tarefa que vc necessite muito realizar nesse dia maravilhoso de quarta-feira')
    
    console.log(`atividades digitadas:  ${listaDeTarefas}`);
    let indice = Number(prompt('digite um numero que voce ja fez \n Ps.: Nao eh no banheiro: \n SOMENTE NUMERO DE 0 ATE 2'))
    listaDeTarefas.splice(indice,1)
    console.log(`lista de tarefas ficou assim:  ${listaDeTarefas}`);

// desafio

// 1)

    let fraseAleatoria = prompt(' digite uma frase aleatoria ')
    let fraseSeparada = fraseAleatoria.split(' ')
    console.log(`frase separada em array ${fraseSeparada}`);
    
// 2)

    let arrayDado = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    let indicePalavra = arrayDado.indexOf("Abacaxi")
    console.log(` O indice da palavra Abacaxi eh:  ${indicePalavra} e o temanho do array eh: ${arrayDado}`);
    console.log(` O indice da palavra Abacaxi eh:  ${indicePalavra} e o temanho do array eh: ${arrayDado.length}`);
    









