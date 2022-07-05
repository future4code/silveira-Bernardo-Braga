import UserModel from "../Model/UserModel";
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




}