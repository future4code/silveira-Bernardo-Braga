
export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type post = {

    photo: string
    description: string
    type: POST_TYPES
    createdAt: Date
    authorId: string
}

export type postCreate = {
    photo: string
    description: string

}