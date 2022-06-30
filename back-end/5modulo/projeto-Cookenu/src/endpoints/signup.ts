import { Authenticator } from './../services/token';
import { UserDataBase } from './../data/UserDataBase';
import { IdGenerator } from './../services/generateId';
import { Response, Request } from 'express';
import { authenticationData } from '../types';

export async function signup(req: Request, res: Response) {

    try {
        const { name, email, password, role } = req.body;
        console.log("passou aqui3");
        if (!name || !email || !password || !role) {
            console.log("passou aqui");
            throw new Error(' insira completo: name, email, password ')
        }
        console.log("passou aqui 2");
        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        const a: authenticationData = { id: id, role: role } // o que 'e o role ????
        // role é o tipo de user podendo ser amin ou norma

        const t = new Authenticator();
        const token = t.generateToken(a)
        console.log('================');
        console.log(token);
        console.log(id);
        console.log('================');
        const userDB = new UserDataBase()

        userDB.createUser(id, name, email, password, token, role)




        res.status(200).send('user criado')
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }

}