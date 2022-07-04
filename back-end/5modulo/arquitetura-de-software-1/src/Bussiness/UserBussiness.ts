import { compare, hash } from './../services/hashManager';
import { generateId } from './../services/idGenerator';
import { user, userLogin, userSignup } from "../types/user";
import { UserData } from '../data/UserData';
import { generateToken } from '../services/authenticator';


export class UserBussiness {

    public async login(user: userLogin) {
        const { email, password } = user

        if (!email || !password) {
            throw new Error('email ou senha no login nao esta definido')
        }
        const dataBase = new UserData()
        const resultDB: user = await dataBase.selectUserByEmail(email)

        if (!resultDB) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = generateToken({
            id: resultDB.id,
            role: resultDB.role
        })

        return token

    }
    public async signup(user: userSignup) {
        const { name, email, password, role } = user

        if (!name || !email || !password || !role) {
            throw new Error('name, email, password ou role , nao informado ')
        }

        const id: string = generateId()

        const cypherPassword = await hash(password);
        console.log('==========');
        console.log(password);
        console.log(cypherPassword);
        console.log('==========');

        const userFinal: user = { id, name, email, password: cypherPassword, role }

        const dataBase = new UserData()

        dataBase.insertUser(userFinal)

        const token: string = generateToken({
            id,
            role: role
        })

        return token


    }

    public async getAll() {
        const dataBase = new UserData()

        const resposta = await dataBase.getAll()
        return resposta
    }

}