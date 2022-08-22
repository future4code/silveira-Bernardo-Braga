import dotenv from "dotenv";
import { app } from "./app";
import UserController from "./Controller/UserController";

dotenv.config();

const userController = new UserController()


app.post('/user', userController.PostParticipation)

app.get('/user', userController.GetUserInfo)

app.delete('/user:id', userController.DeleteUser)



