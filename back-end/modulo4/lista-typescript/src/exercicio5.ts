


type Pessoas = {
    name:string,
    email:string,
    role:string
}


function retAdmin (arr:Array<Pessoas>) :Array<string>{
    let a:Array<string>=[]
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i].role === 'admin') {
            a.push(arr[i].email)
        }
    }
    
    return a
}

console.log(retAdmin([
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] ))
