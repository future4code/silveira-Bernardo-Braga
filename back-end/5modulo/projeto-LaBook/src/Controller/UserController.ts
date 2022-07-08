import { Request, Response } from "express";
import { UserBussiness } from "../Business/UserBusiness";
import { userLogin, userSignup } from "../Types/User";



export default class UserController {

    public async Signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const userSignup: userSignup = { name, email, password }

            const userBusiness = new UserBussiness()

            const token = await userBusiness.Signup(userSignup)

            res.status(200).send({ token })

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }

    public async Login(req: Request, res: Response) {

        try {
            const { email, password } = req.body

            const userLogin: userLogin = { email, password }

            const userBusiness = new UserBussiness()

            const token = await userBusiness.Login(userLogin)

            res.status(200).send({ token })

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }

    public async Friend(req: Request, res: Response) {

        try {
            const { authorization } = req.headers
            const { name } = req.body
            const userBusiness = new UserBussiness()

            await userBusiness.Friend(String(authorization), name)


            res.status(200).send('amizade iniciada')
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
}