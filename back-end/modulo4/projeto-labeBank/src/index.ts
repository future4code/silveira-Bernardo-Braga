import express, { Express, request, Request, Response } from 'express'
import cors from 'cors'
import { generateNewId, getAge, getBalance, verifyByBirthDay, verifyByCPF, verifyByName } from './functions/functions';
import { Users } from './data/consts';
import { Extract } from './data/types';
import e from 'express';

const app: Express = express();

app.use(express.json());
app.use(cors());


app.post('/user', (req: Request, res: Response) => {
    try {

        // console.table(req.body)
        const { name, cpf, birthDay } = req.body


        if (verifyByCPF(cpf, Users) > -1) {
            throw new Error('erro no cpf do post user, cpf ja existente');
        }



        const id = generateNewId(Users)
        const age = getAge(birthDay)
        const balance = 0
        const statement: Array<Extract> = []

        const newClient = {
            id,
            name,
            cpf,
            birthDay,
            age,
            balance,
            statement
        }

        Users.push(newClient)


        res.status(201).send(Users)//'usuario criado com sucesso, obrigado por abrir conta no nosso banco :) '


    } catch (err) {
        res.status(400).send('deu erro no post user')
    }
})



app.post('/add', (req: Request, res: Response) => {
    try {

        const { name, cpf, value } = req.body

        const position = verifyByCPF(cpf, Users)

        if (position === 1) { throw new Error }

        const date = new Date

        const obj = {
            id: generateNewId(Users[position].statement),
            value: Number(value),
            date: String(date.getDate),
            description: 'adicionando saldo'
        }


        Users[position].statement.push(obj)

        console.log(Users[position].statement)

        const balance = getBalance(Users[position].statement)

        Users[position].balance = balance


        res.status(200).send(` balanco enviado ${balance}`)


    } catch (err) {
        res.status(400).send('deu erro no pos /add')
    }
})

app.get('/balance/:cpf', (req: Request, res: Response) => {

    try {

        const cpf = req.params.cpf
        // const name = req.query.name

        console.log("================================");

        console.log(cpf);
        const position = verifyByCPF(cpf, Users)

        console.log(position);

        if (position === -1) { throw new Error }

        console.table(Users[position])
        // if (verifyByName(name, Users) === true) { throw new Error }

        const balance = getBalance(Users[position].statement)

        const date = new Date

        Users[position].statement = [
            {
                id: 1,
                value: balance,
                date: String(date.getFullYear),
                description: ' valor somado '
            }
        ]

        console.log(Users[position])

        console.log("================================");

        res.status(200).send(Users[position].statement[0])


    } catch (err) {

        res.status(400).send('deu erro no get /balance/:cpf')

    }

})


const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});



// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors