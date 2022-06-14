

let minhaString:string = '8';
// a variavel nao aceita o valor numero, a nao ser que seja uma string
 
let meuNumero:number|string = ""
meuNumero=0 // com o | na declaracao da variavel ela aceita os dois tipos

enum Rainbow {
    AZUL ='AZUL',
    ROXO = 'ROXO',
    AMARELO = 'AMARELO'
}

type Pessoa = {
    nome:string, idade:number , corFavorita:Rainbow
}
const pessoa1: Pessoa= {
    nome: "bnardop",
    idade: 20,
    corFavorita: Rainbow.AMARELO
}
const pessoa2: Pessoa= {
    nome: "bvewrnop",
    idade: 207,
    corFavorita: Rainbow.AZUL
}
const pessoa3: Pessoa= {
    nome: "bop",
    idade: 287,
    corFavorita: Rainbow.ROXO
}










