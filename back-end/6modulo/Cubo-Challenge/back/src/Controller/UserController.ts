import { UserName } from './../Types/UserTypes';
import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import UserModel from "../Model/UserModel";
import { User } from "../Types/UserTypes";


export default class UserController {

    public async PostParticipation(req: Request, res: Response) {

        try {

            const { firstName, lastName, participation } = req.body

            const userType: User = {
                firstName,
                lastName,
                participation: participation
            }

            const userBusiness = new UserBusiness()

            await userBusiness.PostParticipation(userType)


            res.status(200).send('usuario criado com sucesso')
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })

        }
    }
    public async GetUserInfo(req: Request, res: Response) {
        try {

            const userBusiness = new UserBusiness()

            const userInfo = await userBusiness.GetUserInfo()

            res.status(200).send({ userInfo })

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })

        }
    }
    public async DeleteUser(req: Request, res: Response) {

        try {

            const { id, firstName, lastName } = req.body

            const userName: UserName = {
                firstName,
                lastName,
                id
            }
            const userBusiness = new UserBusiness()

            await userBusiness.DeleteUser(userName)

            res.status(200).send('deletado com sucesso')

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })

        }
    }
}