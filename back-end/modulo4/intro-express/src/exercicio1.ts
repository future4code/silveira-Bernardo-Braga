import express,{Request,Response} from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());



app.get('/aqui', (request:Request,response:Response) => {
    response.status(201).send('Hello bernardo from Express')

})

app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003');
})