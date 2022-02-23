//EXERCICIO DE ESCRITA DE CODIGO

/*

1) o codigo abaixo esta somando em uma variavel por meio do laco de repeticao for, sera impresso no console o numero 10

2) sera impresso os numeros da lista maiores que 18
sim podera ser usado , tendo que usar o length

3)

*
**
***
****

*/

// EXERCICIOS DE ESCRITA DE CODIGO

    function bichinhos(){
        let quant = Number(prompt('quantos bichos de pelucia vc tem em casa?'));
        var pelucias = [];
        if(quant>=1){
            let limite = 0;
            console.log("passou aqui")
            while(limite<= (quant-1)){


                pelucias[limite] = prompt('Agora me conte, qual o nome das suas pelucias??');
                limite++;
            }

        }else{
            console.log('Que pena! Voce pode adotar um pet');
        }
        console.log(pelucias);
        return pelucias;

    }

    function mostraNumero(array){
        for( let numero of array){
            console.log(numero);
        }        
    }

    function div10(array){
        //let controle;
        for( let numero of array){
            let mostra = numero / 10;
            console.log(mostra);
        }
    }
    
    function numeroPar(array){
        
        var pares = [];
        let indicePares = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 == 0){
                pares[indicePares] = array[i];
                indicePares++;
            }
        }
        console.log(pares)
        
        
    }

    function arrayStr(array){
        
        var str = [];
        let ele = "O elemento do index: ";
        let eh = " é o: ";

        for(let i = 0; i < array.length; i++){
            str[i] = ele + i + eh + array[i]+ '.\n';
        }
        console.log(str)
        return str;
    }
    function maiorMenor(array){
        let maior = array[0];
        let menor = array[0];


        //console.log('PASSOU AQUI');
        
        let i = 0;
        console.log('PASSOU AQUI');
        while (i < array.length){
            console.log('PASSOU AQUI');
            if(array[i] > maior){

                maior = array[i];

            }else if(array[i] < maior){

                if(array[i] < menor){

                    menor = array[i];
                }
            }


            i++;
        }
        console.log("O maior numero eh: "+maior+"\n o menor eh o: "+menor)
    }

    
    
    function recebeArray(array){
        
        mostraNumero(array)
        div10(array);
        numeroPar(array);
        arrayStr(array);
        maiorMenor(array);

    }

    var array = [80, 30, 130, 40, 60, 70, 120, 90, 110]
    recebeArray(array);















   //bichinhos();