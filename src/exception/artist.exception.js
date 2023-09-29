class ArtistException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'ArtistException';
        this.statusCode = statusCode;
    }
}

export default ArtistException;