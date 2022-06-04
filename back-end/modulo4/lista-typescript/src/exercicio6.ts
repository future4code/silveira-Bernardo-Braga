
type Client = {
    cliente:string,
    saldoTotal:number,
    debitos:Array<number>
}


function calculaSaldo (clientes:Array<Client>) :Array<Client> {

    let maisEndividados:Array<Client> = []

    for (let i = 0 ; i < clientes.length ; i++) {
        
        let contaDebito:number = 0

        for (let j = 0 ; j < clientes[i].debitos.length ; j++) {
            contaDebito += clientes[i].debitos[j]
        }
        let saldo:number = clientes[i].saldoTotal - contaDebito
        
        if ( saldo < 0 ) {
            cliente[i].saldoTotal = saldo
            cliente[i].debitos =[]
            maisEndividados.push(clientes[i])
        }
    } 

    return maisEndividados

}




const cliente = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
console.log(calculaSaldo(cliente))









