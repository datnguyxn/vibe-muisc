import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    playlistName: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },

    thumbnail: {
        type: String,
        required: false
    },
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
    }
}, {timestamps: true})

const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;