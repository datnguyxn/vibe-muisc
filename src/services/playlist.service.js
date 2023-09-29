import Playlist from "../models/playlist.model.js";

class PlaylistService {
    async get(data) {
        const playlist = await Playlist.findOne({ where: data });
        return playlist;
    }

    async getAll() {
        const playlists = await Playlist.find();
        return playlists;
    }
}

export default new PlaylistService();