import { Request, Response } from "express";
import { UserBussiness } from "../Business/UserBusiness";
import { userSignup } from "../Types/User";



export default class UserController {

    public async Signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const userSignup: userSignup = { name, email, password }

            const userBusiness = new UserBussiness()

            const token = await userBusiness.Signup(userSignup)



            res.status(200).send({ token })

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }

    public async Login(req: Request, res: Response) {

        try {

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }
}