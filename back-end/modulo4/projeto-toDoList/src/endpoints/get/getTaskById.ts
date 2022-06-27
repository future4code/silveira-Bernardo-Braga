import { Response, Request } from 'express'
import connection from '../../data/connection'

export default async function getTaskById(req: Request, res: Response) {
    //recebe um params id


    // devolve um body {
    //     "taskId": "001",
    //         "title": "Criar banco dos alunos",
    //             "description": "Devemos criar o banco dos alunos para o módulo do backend",
    //                 "limitDate": "04/05/2020",
    //                     "status": "to_do",
    //                         "creatorUserId": "001",
    //                             "creatorUserNickname": "astrodev"
    // }
    try {
        const idParams = Number(req.params.id)

        const resposta = await connection("TodoListTask").where({ id: idParams })

        res.status(200).send(resposta)
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}