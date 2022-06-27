import { Request, Response } from 'express';
import { connection } from '../data/connection';



export const getByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type;

        const users = await (await connection('aula49_exercicio')).sort({ id: 1 })
        res.status(200).send(users)

    } catch (error) {

    }
}

