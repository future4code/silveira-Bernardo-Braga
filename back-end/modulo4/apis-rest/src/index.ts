import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data/data";

const app = express();

app.use(express.json());
app.use(cors());

function verificaType(type: string): boolean {
    //retorna false caso nao tenha o tipo

    if (type === 'id' || type === 'name' || type === 'email' || type === 'type' || type === 'age') {
        console.log('type ppassou aqui true');
        return true
    }
    console.log('type passou aqui false');
    return false

}

//======================= aquiii ======================

app.get('/users/:type', (req: Request, res: Response) => {
    // se isNumber for false nao precia converter o value para Number, se for true precisara
    const type = req.params.type;
    const valueStr = req.query.str
    const valueNun = req.query.num
    let value: any
    // let valueConvertido: any = Number(value)



    try {
        if (!verificaType(type)) { throw new Error('type errado') }
        // console.log();
        // if (valueNun ===)

        console.log('==========');

        console.log(valueNun);
        console.log(valueStr);
        console.log(typeof (valueNun));
        // console.log(valueConvertido);

        if (!valueNun === false) {
            // console.log('passou if');
            value = Number(valueNun)
            // valueConvertido = value
        } else {
            console.log('passou else');
            value = valueStr
            // valueConvertido = Number(value)
        }
        console.log(typeof (value));

        console.log('==========');



        let use = users.filter((user) => {
            return user[type] === value
        })

        res.send(use)
    } catch (err) {
        res.status(401).send('type errado')

    }
})


//======================= aquiii ======================

app.get('/users', (req: Request, res: Response) => {
    // devemos usar o metodo GET pois ele pega(get) as informacoes
    // eu indicaria como sendo do metodo POST
    try {

        if (!users) { throw new Error('deu erro , usuarios nao existem') }

        res.status(200).send(users)

    } catch (error) {
        res.status(400).send(error)
    }
})


app.get('/users/:valueName', (req: Request, res: Response) => {
    try {
        const value = req.params.valueName;

        let use = users.filter((user) => {
            return user.name === value
        })

        res.status(200).send(use)
    } catch (err) {
        res.status(400).send('deu erro nesse get')
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
