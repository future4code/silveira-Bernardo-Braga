import { user } from './../types/user';

import { connection } from "../connection";


export class UserData {

    public async insertUser(user: user) {
        await connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }).into('User_Arq')
    }

    public async selectUserByEmail(email: string) {
        try {
            const result = await connection('User_Arq').select("*").where({ email })

            console.log(result);

            const info: user = {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role
            }

            return info

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }
    public async getAll() {
        const result = await connection('User_Arq')
        return result
    }
}
