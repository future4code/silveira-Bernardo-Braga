import { Response, Request } from 'express'
import connection from '../../data/connection'
import { getIdUser, setIdUser } from '../../constants/constants'

export default async function postCreateUser(req: Request, res: Response) {

    try {
        const { name, nickname, email } = req.body


        if (!name || !nickname || !email) {
            res.statusCode = 400
            throw new Error('name , nickname ou email não informado ')
        }

        // fazer o banco de dados funcionar 
        // 	    id VARCHAR(255) PRIMARY KEY,
        //      name VARCHAR(255) NOT NULL,
        //      nickname VARCHAR(255) UNIQUE NOT NULL,
        //      email VARCHAR(255) UNIQUE NOT NULL
        setIdUser(1);
        console.log(typeof (getIdUser()));

        const resposta = await connection("TodoListUser").insert({
            id: getIdUser(),
            name: name,
            nickname: nickname,
            email: email
        })

        res.status(200).send(resposta)
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}