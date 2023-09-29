class PlaylistException extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "PlaylistException";
        this.statusCode = statusCode;
    }
}
export default PlaylistException;