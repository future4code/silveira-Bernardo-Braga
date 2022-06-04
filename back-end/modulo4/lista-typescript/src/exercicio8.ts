    let dataNascimento:string =  process.argv[2] 
    let emissaoCarteira:string =  process.argv[3] 
    let dataAtual = new Date()
    

    function getYear (data:string) :number {
        let year :string ='' 
        for ( let i = 6 ; i < data.length  ; i++ ) {
            year += data[i]
        }
        return Number(year)
    }

    function renovada(  ) :boolean {
        const anoAtual = dataAtual.getFullYear()
        
        const anoNascimento = getYear(dataNascimento)
        const anoEmissao = getYear(emissaoCarteira)
        
        const idade = anoAtual - anoNascimento
        const idadeEmissao = anoAtual - anoEmissao


        

        if ( idade <= 20 ) {
            if (idadeEmissao >= 5 ) {
                return true
            }
            return false

            
        }
        if ( idade > 20 && idade <= 50 ) {
            if (idadeEmissao >= 10 ) {
                return true
            }
            return false
        }
        if ( idade > 50 ) {
            if (idadeEmissao >= 15 ){
                return true
            }
            return false
        }

       return false

    }





    console.log(renovada() )//typeof(dataAtual.getFullYear())

