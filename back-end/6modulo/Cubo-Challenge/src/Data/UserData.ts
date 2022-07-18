import UserModel from "../Model/UserModel";
import { connection } from "./Connection";

/**
 * USER_CUBO(
        id varchar(255) PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(150) NOT NULL,
        participation INT NOT NULL
    );
 */

const TABLE = 'USER_CUBO'

export default class UserData {
    public async PostParticipation(user: UserModel) {
        // fazer a conexão com o banco de dados
        try {
            await connection(TABLE).insert({
                id: user.getId(),
                first_name: user.getFirstName(),
                last_name: user.getLastName(),
                participation: user.getParticipation()

            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async GetUserInfo() {
        try {
            const result = await connection(TABLE)

            return result

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}