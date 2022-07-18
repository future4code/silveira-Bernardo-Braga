import UserData from "../Data/UserData";
import { BaseError } from "../Error/BaseError";
import { InputError } from "../Error/invalidInput";
import UserModel from "../Model/UserModel";
import { IdGenerator } from "../Services/IdGenerator";
import { User } from "../Types/UserTypes";



export default class UserBusiness {

    public async PostParticipation(userType: User) {

        const { firstName, lastName, participation } = userType

        if (!firstName || !lastName || !participation) {
            throw new InputError('algo esta faltando em firstName, lastName, participation')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generateId()


        const porcent = 0 // por enquanto a porcentagem fica em 0 para todo mundo , e depois vai ser validado por uma funcao a porcentagem de todos

        const userModel = new UserModel(id, firstName, lastName, participation, porcent)

        const userDB = new UserData()

        await userDB.PostParticipation(userModel)

        return


    }

    public async GetUserInfo() {

        const userDB = new UserData()
        const users = await userDB.GetUserInfo()

        return users



    }



}
