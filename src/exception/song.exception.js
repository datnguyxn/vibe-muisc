class SongException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'SongException';
        this.statusCode = statusCode;
    }
}

export default SongException;