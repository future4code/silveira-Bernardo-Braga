import { UserName } from './../Types/UserTypes';
import UserData from "../Data/UserData";
import { BaseError } from "../Error/BaseError";
import { InputError } from "../Error/InvalidInput";
import UserModel from "../Model/UserModel";
import { IdGenerator } from "../Services/IdGenerator";
import { User } from "../Types/UserTypes";
import { DeleteError } from '../Error/DeleteName';



export default class UserBusiness {

    public async PostParticipation(userType: User) {

        const { firstName, lastName, participation } = userType
        console.log(firstName, lastName, participation);
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

    public CalculateTotal(users: Array<UserModel>): number {

        let total = 0
        for (const participation of users) {
            console.log(participation.participation);
            total += participation.participation

        }
        return total

    }

    public CalculatePercentage(users: Array<UserModel>, total: number) {
        console.log(users);
        for (let i = 0; i < users.length; i++) {

            let percentage = 0

            const value = users[i].participation

            percentage = (value * 100) / total

            console.log(percentage);

            users[i].percent = percentage

        }

        return users

    }

    public async GetUserInfo() {

        const userDB = new UserData()
        const users = await userDB.GetUserInfo()
        console.log(typeof (users));

        const total = this.CalculateTotal(users)

        console.log(total);

        this.CalculatePercentage(users, total)

        return users



    }

    public async DeleteUser(userName: UserName) {

        const { id, firstName, lastName } = userName

        if (!firstName || !lastName || !id) {
            throw new DeleteError('erro, esta faltando alguma coisa no delete firstName, lastName')
        }

        const userDB = new UserData()
        console.log('===========');

        const user = await userDB.GetUserById(id)

        if (!user) {
            throw new DeleteError('usuario nao cadastrado')
        }

        await userDB.DeleteUserById(id)

        return



    }



}
