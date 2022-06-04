import express,{application, Request,Response} from 'express'
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


type Post = {
    id:number,
    title:string,
    body:object,
    userId:number
}

/***
 * acho melhor criar fora , pois fica mais organizado
 */
const posts:Array<Post> = [
    {
        id : 1,
        title : 'titulo1 ',
        body : {name:'bernardo'},
        userId : 1,
    },{
        id : 2,
        title : 'titulo2 ',
        body : {name:'bernardo'},
        userId : 2,
    },{
        id : 3,
        title : 'titulo3 ',
        body : {name:'bernardo'},
        userId : 3,
    },
]

app.get('/exercicio4/oi', (request:Request,response:Response) => {
    response.status(201).send(users)

})

app.get('/exercicio4/io', (request:Request,response:Response) => {
    response.status(201).send(posts)

})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
})


application.get(`/exercicio4/:id`, (req:Request,res:Response) => {
    const userId = Number(req.params.id)

    const filtroList = posts.filter((posts:Post) => {return posts.userId === userId})
    res.status(200).send(filtroList)
})