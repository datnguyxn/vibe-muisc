class TokenException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'TokenException';
        this.statusCode = statusCode;
    }
}

export default TokenException;