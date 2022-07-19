import { UserBussiness } from './../Bussiness/UserBussiness';
import { signup } from './../endpoints/signup';
import { Request, Response } from 'express';
import { userLogin, userSignup } from '../types/user';


export class UserController {

    public async login(req: Request, res: Response) {

        try {

            const { email, password } = req.body

            const newUser: userLogin = { email, password }

            const userBussiness = new UserBussiness()

            const token = await userBussiness.login(newUser)

            res.status(200).send({ token })



        } catch (err: any) {
            res.status(400).send({ message: err.message || err.sqlMessage })
        }
    }

    public async signup(req: Request, res: Response) {

        try {
            const { name, email, password, role } = req.body

            const newUser: userSignup = { name, email, password, role }

            const userBussiness = new UserBussiness()

            const token = await userBussiness.signup(newUser)

            res.status(200).send({ token })

        } catch (err: any) {
            res.status(400).send({ message: err.message || err.sqlMessage })
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const userBussiness = new UserBussiness()

            const all = await userBussiness.getAll()

            res.status(200).send(all)

        } catch (err: any) {
            res.status(400).send({ message: err.message || err.sqlMessage })
        }
    }
}