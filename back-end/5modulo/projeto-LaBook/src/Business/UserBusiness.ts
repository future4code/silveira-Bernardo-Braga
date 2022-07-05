import { UserData } from "../Data/UserData";
import UserModel from "../Model/UserModel";
import { generateToken } from "../Services/Autenticator";
import { hash } from "../Services/HashManager";
import { generateId } from "../Services/IdGenerator";
import { userSignup } from "../Types/User";



export class UserBussiness {

    public async Signup(user: userSignup) {
        const { name, email, password } = user

        if (!name || !email || !password) {
            throw new Error("name, email, password nao definidos");
        }

        const senhaCryp = await hash(password)

        console.log(senhaCryp);

        const id = generateId()

        const userModel = new UserModel(id, name, email, senhaCryp)

        const userData = new UserData();
        console.log('===================================');
        await userData.insertUser(userModel)
        console.log('===================================');
        const token: string = generateToken({ id })

        console.log({ token });

        return token





    }
}