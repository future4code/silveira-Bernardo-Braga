import { Response, Request } from 'express'
import { getIdTask, setIdTask } from '../../constants/constants'
import { formatDate } from '../../constants/functions'
import connection from '../../data/connection'

export default async function postCreateTask(req: Request, res: Response) {
    // recebe um body : {
    //     "title": "Criar banco dos alunos",
    //         "description": "Devemos criar o banco dos alunos para o módulo do backend",
    //             "limitDate": "04/05/2020",
    //                 "creatorUserId": "001"
    // }
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 400
            throw new Error('title, description, limitDate, creatorUserId não informado ')
        }
        // id VARCHAR(255) PRIMARY KEY,
        // title VARCHAR(255) NOT NULL,
        // description TEXT NOT NULL,
        // status VARCHAR(255) NOT NULL DEFAULT "to_do",
        // limit_date DATE NOT NULL,
        // creator_user_id varchar(255) NOT NULL,
        // FOREIGN KEY(creator_user_id) REFERENCES TodoListUser(id)

        setIdTask(1)

        formatDate(limitDate)
        const resposta = await connection("TodoListTask").insert({
            id: getIdTask(),
            title: title,
            description: description,
            limit_date: formatDate(limitDate),
            creator_user_id: Number(creatorUserId)
        })
        res.status(200).send(resposta)
    } catch (err: any) {
        res.status(400).send({ message: err.message || err.sqlMessage })
    }
}










// "insert into `TodoListTask` (`creator_user_id`, `description`, `id`, `limit_date`, `title`) values ('001', 'Devemos criar o banco dos alunos para o módulo do backend', 1, '04/05/2020', 'Criar banco dos alunos') - ER_TRUNCATED_WRONG_VALUE: Incorrect date value: '04/05/2020' for column 'limit_date' at row 1"