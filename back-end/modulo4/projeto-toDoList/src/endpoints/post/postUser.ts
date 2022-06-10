import { Response, Request } from 'express'

export default async function postUser(req: Request, res: Response) {

    try {
        const { name, nickname, email } = req.body


        if (!name || !nickname || !email) {
            res.statusCode = 400
            throw new Error('name , nickname ou email nao informado ')
        }

        // fazer o banco de dados funcionar 

        res.status(200).send(name + " " + nickname + " " + email)
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}