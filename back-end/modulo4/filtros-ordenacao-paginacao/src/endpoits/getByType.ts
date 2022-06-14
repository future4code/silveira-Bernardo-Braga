import { Request, Response } from 'express';



export const getByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type;

        const users = await selectAllUsers()


    } catch (error) {

    }
}

