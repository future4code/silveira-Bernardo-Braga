import { Response, Request } from 'express'
import connection from '../../data/connection'

export default async function getUserById(req: Request, res: Response) {

    try {
        const id = Number(req.params.id)

        if (id === NaN) {
            res.statusCode = 400
            throw new Error('favor informar um number no id')
        }

        // fazer um select para encontrar o id correspondente no banco de dados ,
        const resposta = await connection("TodoListUser").where({ id: Number(req.params.id) })

        res.status(200).send(resposta)
        // res.status(200).send('to vivo')
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}