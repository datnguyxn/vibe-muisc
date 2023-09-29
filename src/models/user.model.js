import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
        unique: true,
    },
    avatar: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: true,
        default: "user",
    },
    configuration: {
        type: Object,
        required: true,
        privatePlaylists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Playlist",
        }],
        favoriteSongs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
        }],
        favoriteArtists: [{
           type: mongoose.Schema.Types.ObjectId,
              ref: "Artist",
        }],
        favoriteAlbums: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Album",
        }],
        favoritePlaylists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Playlist",
        }],
        recentlyPlayed: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
        }],
    },
    services: {
        type: String,
        enum: ["google", "local"],
        default: "local",
    },
    googleId: {
        type: String,
        required: false,
    }

}, {timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;
