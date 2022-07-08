import PostModel from "../Model/PostModel";
import { post } from "../Types/Post";
import { connection } from "./Connection";

export class PostData {


    public async insertPost(post: PostModel) {
        try {

            await connection.insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                created_at: post.getCreatedAt(),
                author_id: post.getAuthorId(),
            }).into('Labook_posts')

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }

    }

    public async getPostById(idPost: string) {
        try {

            const result = await connection('Labook_posts').select("*").where({ id: idPost })

            console.log(idPost);


            const info: post = {

                photo: result[0].photo,
                description: result[0].description,
                type: result[0].type,
                createdAt: result[0].created_at,
                authorId: result[0].author_id,

            }

            return info

        } catch (err: any) {
            throw new Error(err.message || err.sqlMessage)
        }
    }
}