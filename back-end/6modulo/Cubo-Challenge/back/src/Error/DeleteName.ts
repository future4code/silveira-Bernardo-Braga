import { BaseError } from "./BaseError";

export class DeleteError extends BaseError {

    constructor(
        message: string
    ) {
        super(message, 500)
    }
}