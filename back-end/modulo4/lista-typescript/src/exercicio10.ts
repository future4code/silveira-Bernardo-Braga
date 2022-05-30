


// O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX.

const ELEVEN = 11

function noSpecial(cpf:string):string {
    let cpfSemEspecial = ''
    for (let i = 0; i < cpf.length  ; i++) {
        
        if (i != 3 && i != 7 && i != 11 ){
            cpfSemEspecial += cpf[i]
        }
    
    }
    return cpfSemEspecial
}

function verificaDV(str :string, dvNumber:number):boolean {
    let index = dvNumber + 1
    let soma = 0

    for (let i = dvNumber; i >= 0 ; i--) {
        soma += index * Number(str[i])
        index--
    }

    const resto = soma % (dvNumber + 1)

    let calcDV = ELEVEN - resto
    
    if (calcDV >= 10) {
        calcDV = 0

    }

    if (calcDV === Number(str[dvNumber])) {
        return true
    }


    return false
}


function validaCPF (str:string) :boolean{
    let cpf = noSpecial(str)

    let dv1 = verificaDV(cpf,9)
    let dv2 = verificaDV(cpf,10)

    if (dv1 == dv2) {
        return true
    }

    return false
}



const cpf = '006'
console.log(validaCPF(cpf));














