
enum SETOR {
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro"
}

type Pessoa = {
    nome:string,
    salario:number,
    setor:SETOR,
    presencial:boolean
}

function trabalhaMkt (arr:Array<Pessoa>) :Array<Pessoa>{
    let a:Array<Pessoa>=[]
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i].setor === SETOR.MARKETING) {
            a.push(arr[i])
        }
    }
    
    return a
}

console.log(trabalhaMkt([
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]))













