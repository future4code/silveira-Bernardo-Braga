//exercicios de interpretacao
/**
 * 1) console.log("a. ", resultado) resultado = false
 * console.log("b. ", resultado) resultado = false
 * console.log("c. ", resultado) resultadop = true
 * console.log("d. ", typeof resultado) resultado = boolean
 * 
 * 2) sera inpresso no console a inforamcao do primeiro numero mais a do segundo
 * ja que a funcao prompt ela retorna String e nao int
 * 
 * 3)let primeiroNumero = prompt("Digite um numero!")
 *   let segundoNumero = prompt("Digite outro numero!")
 *   const soma = Number(primeiroNumero)  + Number(segundoNumero)
 *   console.log(soma)
 */

// exercicio de escrita de codigo

let idadePessoa = prompt('Digite a sua idade: ')
let idadeAmigo = prompt('Digite a idade do seu amigo')
let idaPess = Number(idadePessoa)
let idaAmi = Number(idadeAmigo)
let comparacao = idaPess > idaAmi
console.log("Sua idade é maior do que a do seu melhor amigo?"+ comparacao )
let diferenca = idaPess - idaAmi
console.log('diferenca de idade: '+ diferenca)

let numberPar = prompt('Digite um numero par: ')
let resto = Number(numberPar) % 2
console.log('resto da divisao por 2 eh: ' + resto)// se digitar numero par o resto é 0, e se for impar o resto é 1

let idade = prompt('digite a sua idade em anos')
let idadeAnos = Number(idade)
let idadeMes = idadeAnos * 12
let idadeDia = idadeMes * 24
let idadeHoras = idadeDia * 24
console.log('A idade do usuário em meses '+idadeMes)
console.log('A idade do usuário em dias '+idadeDia)
console.log('A idade do usuário em horas '+idadeHoras)


let numer = prompt('digite 1 numero')
let numero = prompt('digite outro numero')
let algarism = Number(numer)
let algarismo = Number(numero)
let res1 = algarism>algarismo
console.log('O primeiro numero é maior que o segundo?'+res1)
let res2 = algarism === algarismo
console.log('O primeiro numero é igual ao segundo?'+res2)
let res3 = algarism % algarismo
console.log('O primeiro numero é divisível pelo segundo?'+res3)
let res4 = algarismo % algarism
console.log('O segundo numero é divisível pelo primeiro?'+res4)
