import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album"
    }],

    playlistsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist"
    },
})

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;