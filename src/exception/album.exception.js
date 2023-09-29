class AlbumException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'AlbumException';
        this.statusCode = statusCode;
    }
}

export default AlbumException;