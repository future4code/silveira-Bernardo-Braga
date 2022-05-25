console.log('bernardo braga');
// ==========================  1  =======================
function checaTriangulo(a:number,b:number,c:number):string{
    if(a !== b && b !== c){return'Escaleno';}
    else if (a === b && b === c){return'Equilatero'}
    else {return'isoceles'}
    
}
console.log(checaTriangulo(5,3,4));
console.log(checaTriangulo(5,3,3));
console.log(checaTriangulo(3,3,3));
// ==========================  2   =====================

function imprimeTresCoresFavoritas (  ) :void  {
   let cor1:string = process.argv[2]
   let cor2:string = process.argv[3]
   let cor3:string = process.argv[4]
   console.log([cor1, cor2, cor3])
}
console.log('-----------------------');
imprimeTresCoresFavoritas()
console.log('-----------------------');

// ==========================  3   =====================

function checaAnoBissexto(ano:number):boolean {
   const cond1:boolean = ano % 400 === 0
   const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
   return cond1 || cond2
}
console.log(checaAnoBissexto(2012))

// ==========================  4   =====================



function comparaDoisNumeros(num1:number, num2:number):number {
  let maiorNumero:number;
  let menorNumero:number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca 
}
console.log(comparaDoisNumeros(900,400)); 

// ==========================  5   =====================

function checaRenovacaoRG():boolean {

   const anoAtual:number = Number(process.argv[5])
   const anoNascimento:number = Number(process.argv[6])
   const anoEmissao:number = Number(process.argv[7])

   const idade:number = anoAtual - anoNascimento
   const tempoCarteira:number = anoAtual - anoEmissao

   const cond1:boolean = idade <= 20 && tempoCarteira >= 5
   const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
   const cond3:boolean = idade > 50 && tempoCarteira >= 15

   return (cond1 || cond2 || cond3)
}

console.log("=========");
console.log(checaRenovacaoRG())
console.log("=========");

// ==========================  desafio   =====================

function converteDNAemRNA(dna:string):string{

//         "entrada:    ATT GCT GCG CAT TAA CGA CGC GTA"
//                      UAA CGA CGC GUA AUU GCU GCG CAU
// "saida esperada :    UAA CGA CGC GUA AUU GCU GCG CAU"
let res:string = '';
   for(let i:number = 0; i < dna.length; i++){
        if (dna[i] ==='A') {res += 'U';} 
        else if(dna[i] === "T"){res += "A";}
        else if(dna[i] === "G"){res += "C";}
        else if(dna[i] === "C"){res += "G";}
        
        else{res += dna[i];};
   };
    return res;
   

}
console.log(converteDNAemRNA("ATT GCT GCG CAT TAA CGA CGC GTA"));


// ==========================  desafio   =====================

function inverter (s:string):string{
    
    return s.split('').reverse().join('')

}
const ber:string = inverter('bernardo')

console.log(ber);