/* 
        EXERCICIO DE INTERPRETAÇÃO DE CODIGO
    1)
        console1 = "Matheus Nachtergaele"
        console2 = 3
        console3 = canal: "Globo", horario: "14h"

    2)
        a)
            nome: 'Juca', idade: 3, raca: 'SRD
            nome: 'Juba', idade: 3, raca: 'SRD'
            nome: 'Jubo', idade: 3, raca: 'SRD'}

        b) 
            a sintaxe dos tres pontinhos ela, adiciona tudo o que tem antes, no nome especificado


    3)
        a)
            false, undefined

        b) no false, porque foi especificado no objeto na qual a funcao acessou que era falso, e no undefined, pe nao tem a propriedade altura no objeto pessoa

 */

    //EXERCICIO DE ESCRITA DE CODIGO

    // const pessoa = {
    //     name:"Bernardo",
    //     nickname: ["ber"," be", " braga"]
    // }

    // const pessoa2 = {
    //     name: pessoa.name,
    //     nickname: ["ber"," be", " brga"]
    // }
    // function funcao(obj){
    //     console.log("Eu sou, " + obj.name + ", mas pode me chamar de: "+ obj.nickname);


    // }

    // funcao(pessoa)
    // funcao(pessoa2)

    // const bernardo = {
    //     nome: "bernardo",
    //     age: 20,
    //     work:"developer"
    // }

    // const outraPessos = {
    //     nome: "maria",
    //     age: 18,
    //     work:"software engineer"
    // }
    
    // function temTudo(obj){
    //     var array = [obj.name,obj.name.length(),obj.age,obj.work,obj.work.length()];
    //     // array[0] = obj.name;
    //     // array[1] = obj.name.length;
    //     // array[2] = obj.age;
    //     // array[3] = obj.work;
    //     // array[4] = obj.work.length();
    //     return array;
    // }
    // temTudo(bernardo)
    // temTudo(outraPessos)
    // console.log();
    // console.log();


    var carrinho = ["0","1","2"];
    
    const maca = {
        nome: "Maca",
        disponibilidade: true
    }

    const pera = {
        nome: "Pera",
        disponibilidade: true
    }    
    const abacaxi = {
        nome: "Abacaxi",
        disponibilidade: true
    }

    function colocaCarrinho(fruta){
        carrinho = push(fruta)
    }

    colocaCarrinho(maca);
    colocaCarrinho(pera);
    colocaCarrinho(abacaxi);



