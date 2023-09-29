import User from '../models/user.model.js';
import Token from "./token.model.js";
import Artist from "./artist.model.js";
import Playlist from "./playlist.model.js";
import Song from "./song.model.js";
import Album from "./album.model.js";
import Topic from "./topic.model.js";

export default {
    user: User,
    token: Token,
    artist: Artist,
    playlist: Playlist,
    song: Song,
    album: Album,
    topic: Topic,
}
