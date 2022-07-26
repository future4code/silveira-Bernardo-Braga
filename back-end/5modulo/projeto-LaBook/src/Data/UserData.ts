import UserModel from "../Model/UserModel";
import { user } from "../Types/User";
import { connection } from "./Connection";

const USER_DB = 'Labook_users'

export class UserData {

    public async insertUser(user: UserModel) {
        console.log(user);
        try {

            await connection.insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
            }).into('Labook_users')

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }

    }
    public async selectUserByEmail(email: string) {
        try {
            const result = await connection('Labook_users').select("*").where({ email })

            const info: user = {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,

            }

            return info


        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }
    public async getIdByName(name: string) {
        try {
            const result = await connection('Labook_users').select("id").where({ name: name })



            return result


        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }

    public async MakeFriend(idEu: string, id_amigo: string) {
        try {
            await connection.insert({
                id_eu: idEu,
                id_amigo: id_amigo
            }).into('Amizade')
        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }



}