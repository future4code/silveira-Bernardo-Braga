/*
EXERCICIOS DE INTERPRETAÇÃ0 DE CODIGO

1) O codigo pede ao usuario digitar um numero e depois testa se ele é divisivel por 2, ou pode ser tambem se ele é par ou impar imprimindo no if os pares, e no else os impares

2) o codigo a cima serve para mostrar o preco da fruta digitada pelo usuario, sendo impresso no console Opreco da fruta Maca é R$ 2.25

O preço da fruta  Pêra  é  R$ 5

3)      a primeira linha do codigo esta declarando uma variavel e pedindo para o usuario um numero e o que o usuario digitar ele esta mudano para numero

se digitar 10 no console vai aparecer Esse número passou no teste

se digitar  -10 no console vai aparecer  index.js:24 Uncaught ReferenceError: mensagem is not defined

sim havera um erro pois no escopo do if nao tem retorno e quando a gente cria uma variavel em um escopo ele nao vai ser passada para o escopo pai dando o erro se voce chamar a mensagem no escopo de fora

*/


// EXERCICIOS DE ESCRITA DE CODIGO

    function checkDrive(){
        let pergunta = prompt("Digite a sua idade");
        let age = Number(pergunta);
        if(age>=18){
            console.log("Voce pode dirigir");
            return;
        }else{
            console.log("Voce nao pode dirigir");
            return;            
        }
    }

    //checkDrive();

    function checkTurno(){
        let pergunta = prompt("Digite o seui turno\n  M (matutino) ou V (Vespertino) ou N (Noturno) ");
        let turno = pergunta.toUpperCase();
        if(turno == "M"){
            console.log("Bom Dia!");
        }else if(turno == "V"){
            console.log("Boa Tarde");
        }else if(turno == "N"){
            console.log("Boa Noite");
        }
        return;  //todos os if e else convergem a esse return;
    }

    //checkTurno();

  function checkTurnoSwitch(){
        let pergunta = prompt("Digite o seui turno\n  M (matutino) ou V (Vespertino) ou N (Noturno) ");
        let turno = pergunta.toUpperCase();
        switch (turno){
            case "M":
                console.log("Bom Dia!");
                break;
            case "V":
                console.log("Boa Tarde");
                break;
            case "N":
                console.log("Boa Noite");
                break;
        }
        return;  //todos os if e else convergem a esse return;
    }

    //checkTurnoSwitch()

    function cinemaCompania(){
        let pergunta = prompt("Qual o genero de filme que vao assistir");
        let pergunta2 = prompt("qual o preco do ingresso");
        let genero = pergunta.toLowerCase();
        let preco = Number(pergunta2);
        if(genero =="fantasia" && preco<=14){
            let lanche = prompt("qual lanchinho vai comprar para ver o filme?")
            console.log(`Bom Filme! \n Aproveite o seu ${lanche}`);
            return;
        }else{
            console.log("Escolha Outro Filme :(")
            return;
        }
    }
    //cinemaCompania();
    
    function valor198(ingresso){
        return ingresso = 1980;
    }
    function valor132(ingresso){
        return ingresso = 1320;
    }
    function valor88(ingresso){
        return ingresso = 880;
    }
    function valor66(ingresso){
        return ingresso = 660;
    }
    function valor55(ingresso){
        return ingresso = 550;
    }
    function valor44(ingresso){
        return ingresso = 440;
    }
    function valor33(ingresso){
        return ingresso = 330;
    }
    function valor22(ingresso){
        return ingresso = 220;
    }
    function valor17(ingresso){
        return ingresso = 170;
    }

    function etapaSF(categoria, ingresso){
        if(categoria == 1){
            return valor132(ingresso);
        }else if(categoria == 2){
            return valor88(ingresso);
        }else if(categoria == 3){
            return valor55(ingresso);
        }else{
            return valor22(ingresso)
        }
    }
     function etapaDT(categoria, ingresso){
        if(categoria == 1){
            return valor66(ingresso);
        }else if(categoria == 2){
            return valor44(ingresso);
        }else if(categoria == 3){
            return valor33(ingresso);
        }else{
            return valor17(ingresso)
        }
    }

     function etapaFL(categoria, ingresso){
        if(categoria == 1){
            return valor198(ingresso);
        }else if(categoria == 2){
            return valor132(ingresso);
        }else if(categoria == 3){
            return valor88(ingresso);
        }else{
            return valor33(ingresso)
        }
    }



    function ingresso(){
        let nome = prompt("digite seu nome");
        let tipo = prompt("Tipo de jogo: Nacional ou Internacional");
        let etapa = prompt("etapa do campeonato: semi-final, decisão de terceiro lugar ou final")
        let categoria = Number(prompt("Categoria: pode ser as opções 1, 2, 3 ou 4"));
        let quantidade = prompt("Quantidade de ingressos");

        let valorIngresso

        if (etapa == "semi-final"){
            valorIngresso = etapaSF(categoria, valorIngresso);
        }else if(etapa == "decisão de terceiro lugar"){
            valorIngresso = etapaDT(categoria, valorIngresso);
        }else if(etapa == "final"){
           valorIngresso = etapaFL(categoria, valorIngresso);
        }
        console.log(' --- DADOS DA COMPRA --- \n')
        console.log(`Nome do cliente: ${nome}\n`)
        console.log(`Tipo dpo jogo: ${tipo}\n`)
        console.log(`Etapa do Jogo: ${etapa}\n`)
        console.log(`Categoria ${categoria}\n`)
        console.log(`Quantidade ${quantidade}\n`)


        console.log('Valor do ingresso'+valorIngresso)

        
        if(tipo == "nacional"){
            let total = valorIngresso * quantidade;
            console.log('valor total' + total);
            return;
        }else if(tipo == "internacional"){
            let total = (valorIngresso * quantidade) / 4.1;
            console.log('valor total' + total);
            return;
        }

        


    }

    ingresso();






















