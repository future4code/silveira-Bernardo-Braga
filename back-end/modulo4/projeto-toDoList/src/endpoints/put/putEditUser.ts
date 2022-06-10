import { Response, Request } from 'express'

export default async function getUserById(req: Request, res: Response) {

    try {
        const id = Number(req.params.id)

        res.status(200).send('to vivo')
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}