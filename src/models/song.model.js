import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    artistNames: {
        type: String,
        required: true,
    },
    artistIds:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
    }],
    genreIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
        required: true,
    }],
}, {timestamps: true})

const Song = mongoose.model('Song', songSchema);

export default Song;