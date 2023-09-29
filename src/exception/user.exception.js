class UserException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'UserException';
        this.statusCode = statusCode;
    }
}
export default UserException;