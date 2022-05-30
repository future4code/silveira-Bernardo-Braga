import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

type Usuario = {
    id:number,
    name:string,
    phone:string,
    email:string,
    website:string
}


const users:Array<Usuario> = [
    {
        id : 1,
        name : 'bernardo',
        phone : '48 999346334',
        email : 'bernardo.sbraga@yahoo.com',
        website : 'BernardoBraga.com.br'
    
    },{
        id : 2,
        name : 'miro',
        phone : '48 988887777',
        email : 'miro1234@miro.com',
        website : 'miroRodrigo.com'
    
    },{
        id : 3,
        name : 'kelly',
        phone : '48 966665555',
        email : 'kelly45678@kelly.com',
        website : 'kellyfernandes.com'
    
    },
]



app.get('/exercicio3', (request,response) => {
    response.send('Hello bernardo from Express')

})