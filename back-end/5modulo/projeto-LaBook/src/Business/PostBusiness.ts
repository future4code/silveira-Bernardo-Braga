import { PostData } from "../Data/PostData";
import PostModel from "../Model/PostModel";
import { generateToken, getTokenData } from "../Services/Autenticator";
import { generateId } from "../Services/IdGenerator";
import { postCreate, POST_TYPES } from "../Types/Post";



export class PostBussiness {

    public async Create(post: postCreate, authorization: string) {

        const { photo, description } = post


        if (!photo || !description || !authorization) {
            throw new Error('photo, description, author_id, authorization , algum elemento nao especificado')
        }
        const id = generateId()

        console.log(authorization);
        const tokenInfo = getTokenData(authorization)
        console.log(tokenInfo.id);

        const IdUser = tokenInfo.id

        const dt = new Date()
        const ano = dt.getFullYear()
        const mes = dt.getMonth()
        const dia = dt.getDay()
        const hora = dt.getUTCHours()
        const minutos = dt.getMinutes()
        const segundos = dt.getSeconds()

        const timestamp = `${ano}-${mes}-${dia} ${hora}:${minutos}:${segundos}`

        console.log(timestamp);

        const postModel = new PostModel(id, photo, description, POST_TYPES.NORMAL, timestamp, IdUser)
        const postDB = new PostData()
        await postDB.insertPost(postModel)
        const token: string = generateToken({ id })

        console.log({ token });

        return token
    }

    public async GetPostById(authorization: string) {

        if (!authorization) {
            throw new Error('authorization nao informado')
        }

        const tokenInfo = getTokenData(authorization)
        const idPost = tokenInfo.id

        const postDB = new PostData()
        const postInfo = await postDB.getPostById(idPost)

        return postInfo


    }
}