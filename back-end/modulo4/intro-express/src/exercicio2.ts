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
app.get('/exercicio2', (request,response) => {
    response.send('Hello bernardo from Express')

})