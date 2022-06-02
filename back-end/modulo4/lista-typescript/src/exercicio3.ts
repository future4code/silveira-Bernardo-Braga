
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    name:string,
    launch:number,
    gender: GENERO,
    score?:number
}



function movieScore(nome1:string, ano:number, gender:GENERO, score?:number):Filme{
    const obj:Filme = {
            name:nome1,
            launch:ano,
            gender:gender,
            score:score
        } 
    return obj


}

console.log(movieScore('SAGA DO BERNARDO PROGRAMANDO',2020,GENERO.TERROR,1000));

















