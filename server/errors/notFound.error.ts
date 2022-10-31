import { CustomError } from './custom.error'

export class NotFoundError extends CustomError {
    statusCode = 404

    constructor(public message: string) {
        super(message)
    }

    serializeErrors = () => {
        return [{ message: this.message }]
    }
}
