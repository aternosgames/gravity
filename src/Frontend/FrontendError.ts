/**
 * Various validator error types
 */
export class FrontendError extends Error {
    public code: number = 500;

    /**
     * @param message
     * @param code error code, based on http status codes
     */
    constructor(message?: string, code?: number) {
        super(message);
        if (code) {
            this.code = code;
        }
    }

}

export class ModelNotFoundError extends FrontendError {
    public code: number = 400;
}

export class RequiredIdNotFoundError extends FrontendError {
    public code: number = 400;
}

export class NotFoundError extends FrontendError {
    public code: number = 404;
}