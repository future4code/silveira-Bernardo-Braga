import { post } from './../Types/Post';
import { Request, Response } from "express";
import { postCreate } from "../Types/Post";
import { PostBussiness } from '../Business/PostBusiness';




export default class PostController {

    public async CreatePost(req: Request, res: Response) {

        try {
            const { photo, description } = req.body
            const { authorization } = req.headers

            const postCreate: postCreate = { photo, description }

            const postBS = new PostBussiness()
            const token = await postBS.Create(postCreate, String(authorization))

            res.status(200).send({ token })

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }

    }
    public async GetPostById(req: Request, res: Response) {
        try {

            const { authorization } = req.headers // o  authorization vai receber por Request o Token do post que o user quer para obter as informacoes do post

            const postBS = new PostBussiness()

            const infoPost = await postBS.GetPostById(String(authorization))
            res.status(200).send({ infoPost })


        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }

    }
}