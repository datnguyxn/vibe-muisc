import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    releaseAt: {
        type: String,
        required: false
    },
    sortDescription: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    albumData: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
    }],
});

const Album = mongoose.model("Album", albumSchema);

export default Album;