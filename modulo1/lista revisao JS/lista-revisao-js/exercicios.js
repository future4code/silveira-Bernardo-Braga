    // ATENÇÃO!!!
    //    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
    //    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


    // EXERCÍCIO 01
    function retornaTamanhoArray(array) {
        return array.length;
    }

    // EXERCÍCIO 02
    function retornaArrayInvertido(array) {

        for( let left=0, right=array.length-1 ; left<right ; right--, left++ ){
            let temporary = array[left];
            array[left] = array[right];
            array[right] = temporary;
        }
        return array;
    }

    // EXERCÍCIO 03
    function retornaArrayOrdenado(array) {
        let position = array.length;
        for ( let left=0 ; left<(position-1) ; left++ ){
            for ( let right=(position-1) ; left<right ; right-- ){
                if (array[left]>array[right]){
                    let openPosition = array[left];
                    array[left] = array[right];
                    array[right] = openPosition;
                }
            }
        }
        return array;
    }

    // EXERCÍCIO 04
    function retornaNumerosPares(array) {
        var pares = []
        for (let numero of array){
            if (numero % 2 == 0) {
                pares.push(numero)
            }
        }
        return pares;
    }

    // EXERCÍCIO 05
    function retornaNumerosParesElevadosADois(array) {
        var quadrado = []
        for (let numero of array){
            if (numero % 2 == 0) {
                quadrado.push(numero*numero)
            }
        }
        return quadrado;
    }

    // EXERCÍCIO 06
    function retornaMaiorNumero(array) {
        let bigger = 0;
        //console.log('PASSOU AQUI 1');
        for (let i=0 ; i <= array.length ; i++) {
            //console.log('PASSOU AQUI 2');
            if ( bigger < array[i] ){
                //console.log('PASSOU AQUI 3');
                bigger = array[i];
            }
        }
        return bigger;
    }
    // var array = [2,4,3,1,6,4,7,45]
    // retornaMaiorNumero(array)

    // EXERCÍCIO 07
    function retornaObjetoEntreDoisNumeros(num1, num2) {
        const saida = {
            maiorNumero: 0,
            maiorDivisivelPorMenor: false,
            diferenca: 0
        }
        if (num1 <= num2){
            saida.maiorNumero = num2;
            saida.diferenca = num2-num1
            if ( num2%num1 == 0){
                saida.maiorDivisivelPorMenor = true;
            }

        }else if(num1 > num2){
            saida.maiorNumero = num1;
            saida.diferenca = num1-num2
            if ( num1%num2 == 0){
                saida.maiorDivisivelPorMenor = true;
            }
        }
        return saida;
    }

    // EXERCÍCIO 08
    function retornaNPrimeirosPares(n) {
        var par = [];
        for ( let i=0  ; i<n ; i++ ){
            par.push(i*2)
        }
        return par;
    }

    // EXERCÍCIO 09
    function classificaTriangulo(ladoA, ladoB, ladoC) {
        if (ladoA === ladoB && ladoB == ladoC){
            return "Equilátero";
        }else if (ladoA === ladoB && ladoB != ladoC && ladoA == ladoC){
            return "Isósceles";
        }else if(ladoA != ladoB && ladoB != ladoC && ladoA !=  ladoC){
            return "Escaleno";
        }
    }

    // EXERCÍCIO 10
    function retornaSegundoMaiorESegundoMenor(array) {
        let maior = 0;
        let segMaior = 0;
        let segMenor = array[0];
        let menor = array[0];
        //let controle = 0;
        for ( let i=0 ; i<=(array.length-1) ; i++ ) {
            //console.log('PASSOU AQUI');
            if(array[i] > maior) {
                maior = array[i];
            }
        }
        for ( let i=0 ; i<=(array.length-1) ; i++ ){
            if(array[i] > segMaior) {
                if (maior > segMaior  ){
                    segMaior = array[i];
                }
                //console.log('PASSOU AQUI if');
               
            }
        }
        for ( let i=0 ; i<=(array.length-1) ; i++ ) {
            if(array[i] > menor) {
                menor = array[i];
            }
        }
        for ( let i=0 ; i<=(array.length-1) ; i++ ){
            if(array[i] > segMenor) {
                if(menor < segMenor){
                    segMenor = array[i];
                }
            }
        }
        console.log(`${segMenor},${segMaior}`);
    }

    // EXERCÍCIO 11
    function retornaChamadaDeFilme(filme) {
        return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`

    }

    // EXERCÍCIO 12
    function retornaPessoaAnonimizada(pessoa) {
        const person = {
            ...pessoa,
            nome: "ANÔNIMO"
        }
        return person;
    }

    // EXERCÍCIO 13A
    function retornaPessoasAutorizadas(pessoas) {
    
    }

    // EXERCÍCIO 13B
    function retornaPessoasNaoAutorizadas(pessoas) {
    
    }

    // EXERCÍCIO 14
    function retornaContasComSaldoAtualizado(contas) {

    }

    // EXERCÍCIO 15A
    function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
    }

    // EXERCÍCIO 15B
    function retornaArrayOrdenadoPorData(consultas) {
    
    }