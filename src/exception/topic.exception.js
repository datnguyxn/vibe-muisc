class TopicException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'TopicException';
        this.statusCode = statusCode;
    }
}
export default TopicException;