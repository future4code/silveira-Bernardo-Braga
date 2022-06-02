

let palavra = process.argv[2]


function faltorial (word:string):number {
    const size = word.length

    if(size === 0 || size === 1){return 1}
    
    else if ( size >= 2 ){
        let fat:number = 1
        for (let i = 1; i <=  size ; i++) {
            fat = fat * i
        }

        
        return fat
    }else{
        console.log('deu erro');
        return 0
    }
    

}

console.log(faltorial(palavra));










