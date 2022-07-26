import dotenv from "dotenv";
import { application } from "express";
import { app } from "./app";
import PostController from "./PostController";
import UserController from "./UserController";

dotenv.config();


// rotas do User
const userController = new UserController()

app.post('/user/signup', userController.Signup);
app.post('/user/Login', userController.Login);

// DESAFIO

app.post('/user/friends', userController.Friend)

// rotas do post

const postController = new PostController()
app.post('/post/create', postController.CreatePost);
app.get('/post', postController.GetPostById)


