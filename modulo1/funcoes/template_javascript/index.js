/*
exercicios de unterpretacao de codigo

1)
    a)
        sera inpresso no console1 = 10,console2 = 50
    b)
        nao apareceria nada no console, ja que o programa nao tinha nenhum comando para aparecer no console

2)
    a)
        a funcao ela compara se tem uma determinada palavra no texto passado por parametro 
    b)
        i) true, ii) true, iii) true

    */
    // EXERCICIOS DE ESCRITA DE CODIGO
    // 1)
    
    function recebeMens(){
        console.log(' Sou o Bernardo, tenho 20 anos, moro em Florianopolis-SC');
    }

    function outraFrase(name, age, adress, work){
        console.log(`My name is ${name}, I hava ${age} y, living in ${adress} and I work with: ${work}.`);
    }

    recebeMens()
    outraFrase("bernardo", 20, "Island of magic", "developer")
    
    function soma(a,b){
        return a + b;
    }
    
    function maior(a,b){
        return a >= b;
    }
    
    function isPar(a){
        return (a % 2) === 0 
    }
    
    function str(frase){
        console.log(`tamanho da frase eh de: ${frase.length}`)
        console.log(`frase em maiusculo ${frase.toUpperCase()}`)
    }
    
    console.log(soma(20,60));
    console.log(maior(2,1))
    console.log(isPar(3));
    str(prompt('digite uma frase:'))
    
//3)


    function soma(a,b){
        return a + b;
    }

    function subtracao(a,b){
        return a - b;
    }    
    
    function multiplicacao(a,b){
        return a * b;
    }    

    function divisao(a,b){
        return a / b;
    }

    let uno = Number(prompt('digite um numero'))
    let segun = Number(prompt('digite outro numero'))
    console.log(`Numeros inseridos:  ${uno} e ${segun} \nSoma:  ${soma(uno,segun)} \nDiferenca:  ${subtracao(uno,segun)} \nMultiplocacao: ${multiplicacao(uno,segun)} \nDivisao: ${divisao(uno,segun)}`);
    
    




