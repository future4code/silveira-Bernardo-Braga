
// RESPOSTAS DE INTERPRETAÇÃO

/**
 * 1) sera impresso no console os numeros, 10 e posteriormente 10 e 5
 * 
 * 2) sera impresso no console os numeros, 10, 10 ,10
 * 
 * 3) p = horasTrabalhaDia
 *    t = recebePorDia
 *     
 * 
 */

// EXERCICIO DE ESCRITA DE CODIGO.

let nome = prompt("qual o seu nome?");
let idade = prompt("qual a sua idade?");
let idades = Number(idade);
console.log(typeof nome);
console.log(typeof idades);
console.log("Olá "+nome+" voce tem: "+idades);

let resposta1 = "SIM, o melhor programa que ja vi!!!!!";
let resposta2 = "NAO";
let resposta3 = "SIM";

console.log("voce esta gostando do programa? Resposta: "+ resposta1);
console.log(" voce esta vendo a traqueia do tubarão? Resposta: "+ resposta2);
console.log("voce gosta de agua? Resposta: "+ resposta3);




let a = 10
let b = 25
let c = 0 

c=a
a=b
b=c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// DESAFIO 

let one = prompt("digite o 1o numero")
let two = prompt("digite o 2o numero")

let primeiro = Number(one)
let segundo = Number(two)

let plus = primeiro + segundo
let multiple = primeiro * segundo

console.log("O primeiro número somado ao segundo número resulta em: "+ plus )
console.log("O primeiro número multiplicado pelo segundo número resulta em: "+ multiple)
