import express, { Express } from "express";
import cors from "cors";
import postCreateUser from "./endpoints/post/postCreateUser";
import getUserById from "./endpoints/get/getUserById";
import getTaskById from "./endpoints/get/getTaskById";
import putEditUser from "./endpoints/put/putEditUser";
import postCreateTask from "./endpoints/post/postCreateTask";


const app: Express = express();
app.use(express.json());
app.use(cors());

// Para começar a explicar o nosso sistema vamos falar sobre os usuários.O cadastro deles deve ser simples, pedindo: um nome, um apelido(nickname) e um email

// As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte(o que criou a tarefa).

//  Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa - las. 

// Mais de um usuário pode ser diretamente responsável de mesma tarefa. 

// Os status das tarefas são 3: to do ("a fazer"), doing("fazendo") e done("feita").

// 1. Criar usuário

app.post('/user', postCreateUser)
app.get('/user/:id', getUserById)
app.post('/task', postCreateTask)
app.get('/task/:id', getTaskById)  // 
app.put('/user/edit/:id', putEditUser)





const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});