export interface IError {
    message: string
    field?: string
}

export abstract class CustomError extends Error {
    abstract statusCode: number

    protected constructor(message: string) {
        super(message)

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): Array<IError>
}
