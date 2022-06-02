

type Produto = {
    nome :string,
    quantidade: number,
    valorUnitario: number
}

type Produtos = {
    nome :string,
    quantidade: number,
    valorUnitario: string
}


function ajustaPreco (produto:Array<Produto>) :Array<Produtos> {

    let estoque :Array<Produtos> = []

    for (let i = 0; i < produto.length ; i++) {
        const valorAjustado: string = "R$ " + produto[i].valorUnitario.toFixed(2).replace('.',',')
        
        const a:Produtos = { nome:produto[i].nome, quantidade:produto[i].quantidade, valorUnitario:valorAjustado }
        estoque.push(a)
    
    }


    return estoque
}


console.log(ajustaPreco([
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]))




