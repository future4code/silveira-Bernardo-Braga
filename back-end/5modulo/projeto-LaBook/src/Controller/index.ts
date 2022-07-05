import dotenv from "dotenv";
import { application } from "express";
import { app } from "./app";
import UserController from "./UserController";

dotenv.config();

const userController = new UserController()

app.post('/user/signup', userController.Signup);
app.post('/user/Login', userController.Login);