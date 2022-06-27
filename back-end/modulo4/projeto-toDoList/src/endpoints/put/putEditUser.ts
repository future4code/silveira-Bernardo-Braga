import { Response, Request } from 'express'
import connection from '../../data/connection'

export default async function putEditUser(req: Request, res: Response) {

    try {
        const id = Number(req.params.id)
        const { name, nickname } = req.body

        if (id === NaN || !name || !nickname) {
            res.statusCode = 400
            throw new Error('favor informar um number no id,ou informar o name e o nickname')
        }

        const resposta = await connection("TodoListUser").update({
            name: name,
            nickname: nickname
        }).where({ id: id })
        res.status(200).send(resposta)
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}