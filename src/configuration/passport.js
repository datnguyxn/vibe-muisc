import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/user.model.js";
import UserException from "../exception/user.exception.js";
import bcrypt from "bcrypt";
import GoogleStrategy from "passport-google-oauth20";
import {generateRefreshToken, generateToken} from "../middleware/generate.token.js";
import Token from "../models/token.model.js";
import variables from "./variables.js";

const LOCALStrategy = LocalStrategy.Strategy
const GOOGLEStrategy = GoogleStrategy.Strategy

passport.use(new LOCALStrategy(
    {emailField: 'email', passwordField: 'password'},
    async (email, password, done) => {
        try {
            const user = await User.findOne({email: email});
            if (!user) {
                return done(null, false, {message: 'Incorrect email.'});
            } else {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    const jwtToken = {email: user.email, role: user.role, isLocked: user.isLocked, _id: user._id}
                    const token = generateToken(jwtToken);
                    const refreshToken = generateRefreshToken(jwtToken);
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Incorrect password.'});
                }
            }
        } catch (error) {
            return done(error);
        }
    }
))

passport.use(new GOOGLEStrategy({
        clientID: variables.GOOGLE_CLIENT_ID, // Your Credentials here.
        clientSecret: variables.GOOGLE_CLIENT_SECRET, // Your Credentials here.
        callbackURL: `${variables.URL + variables.PORT}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        try {
            const isExistingUser = await User.findOne({googleId: profile.id, services: "google"});
            if (isExistingUser) {
                await revokeAllUserTokens(isExistingUser);
                const jwtToken = { email: profile.emails[0].value, role: isExistingUser.role, isLocked: isExistingUser.isLocked, _id: isExistingUser._id }
                const token = generateToken(jwtToken);
                const refreshToken = generateRefreshToken(jwtToken);
                const newToken = new Token({
                    token: token,
                    userId: isExistingUser._id
                });
                await newToken.save();
                return done(null, isExistingUser);
            } else {
                console.log("hello2")
                const newUser = new User({
                    services: "google",
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    password: profile.id,
                    avatar: profile.photos[0].value,
                    configuration: {
                        favoriteSongs: [],
                        favoriteArtists: [],
                        favoriteAlbums: [],
                        favoritePlaylists: [],
                        recentlyPlayed: [],
                    }
                });
                await newUser.save();
                const token = generateToken(newUser);
                const refreshToken = generateRefreshToken(newUser);
                const newToken = new Token({
                    token: token,
                    userId: newUser._id
                });
                await newToken.save();
                done(null, newUser);
            }
        } catch (error) {
            console.log(error)
        }
    }
))


passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(async (data, done) => {
    try {
        const user = await User.findOne({_id: data._id});
        if (user._id) {
            done(null, user._id);
        }
    } catch (error) {
        done(error);
    }
})

async function revokeAllUserTokens(user) {
    const tokens = await Token.find({userId: user.id, revoked: false, expired: false})
    if (tokens.length === 0) return
    await Token.updateMany(
        {_id: {$in: tokens.map(t => t._id)}},
        {$set: {revoked: true, expired: true}}
    )
}
