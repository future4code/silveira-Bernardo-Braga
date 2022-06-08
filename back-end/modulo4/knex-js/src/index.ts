
import express, { Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());

import { Request, Response } from "express"
import { connection } from "./endpoints/connection";

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

const searchByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`)

    return result

}

const updateActor = async (id: string, salary: number): Promise<any> => {
    const result = await connection("Actor")
        .update({
            salary: salary
        })
        .where("id", id)

}

const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average").where({ gender });
    return result[0].average;
}

const deleteById = async (id: string): Promise<any> => {
    const result = await connection("Actor")
        .delete().where("id", id)
}

const contByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender ="${gender}"`)
    const count = result[0][0].count;
    return count;
}



// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//     console.log(await getActorById("001"))
// })()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        const actor = await getActorById(id);
        res.status(200).send(actor)
    } catch (err) {
        console.log(err)
        res.status(400).send({
            message: err,
        })
    }
});

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await contByGender(req.query.gender as string);
        res.status(200).send({
            quantity: count,
        });
    } catch (erro) {
        res.status(400).send({
            message: erro,
        });
    }
});

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
})