import { BaseError } from "./BaseError";

export class PostPizza extends BaseError {

    constructor(
        message: string
    ) {
        super(message, 500)
    }
} 