import { POST_TYPES } from "../Types/Post";

export default class PostModel {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: string,
        private authorId: string,
    ) { }

    public getId() { return this.id; }
    public getPhoto() { return this.photo; }
    public getDescription() { return this.description; }
    public getType() { return this.type; }
    public getCreatedAt() { return this.createdAt; }
    public getAuthorId() { return this.authorId; }
}