import { UserData } from "../Data/UserData";
import UserModel from "../Model/UserModel";
import { generateToken, getTokenData } from "../Services/Autenticator";
import { compare, hash } from "../Services/HashManager";
import { generateId } from "../Services/IdGenerator";
import { user, userLogin, userSignup } from "../Types/User";



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

    public async Login(user: userLogin) {
        const { email, password } = user

        if (!email || !password) {
            throw new Error('email ou senha no login nao esta definido')
        }
        const dataBase = new UserData()

        const resultDB: user = await dataBase.selectUserByEmail(email)

        console.log(user.password);
        console.log(password);

        if (!resultDB) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }
        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (passwordIsCorrect) {
            throw new Error("senha incorreta")
        }
        const token: string = generateToken({
            id: resultDB.id,
        })

        return token

    }
    public async Friend(token: string, name: string) {
        if (!token || !name) {
            throw new Error('token nao enviado')
        }
        const idEu = getTokenData(token)

        const dataBase = new UserData()
        const id_amigo = await dataBase.getIdByName(name)
        console.log('=================');
        console.log(idEu.id);
        console.log('=================');
        console.log(id_amigo[0].id);
        console.log('=================');

        await dataBase.MakeFriend(idEu.id, id_amigo[0].id)





    }




}