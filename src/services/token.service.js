import {generateRefreshToken, generateToken} from "../middleware/generate.token.js";
import Token from "../models/token.model.js";
import TokenException from "../exception/token.exception.js";

async function createNewToken(user) {
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    const newToken = new Token({
        token: token,
        userId: user._id
    });
    await newToken.save();
    return {token, refreshToken};
}

async function revokeAllUserTokens(user) {
    const tokens = await Token.find({userId: user.id, revoked: false, expired: false})
    if (tokens.length === 0) return
    await Token.updateMany(
        {_id: {$in: tokens.map(t => t._id)}},
        {$set: {revoked: true, expired: true}}
    )
}

async function getUserIdByToken(token) {
    const validToken = Token.findOne({token: token, revoked: false, expired: false})
    if (!validToken) throw new TokenException("Token is not valid", 404)
    return validToken.userId
}

function createCookie(res, user, token) {
    // create cookie
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
        secure: false,
        sameSite: "strict"
    });

    res.cookie('role', user.role, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
        secure: false,
        sameSite: "strict"
    });
}

export {createNewToken, revokeAllUserTokens, createCookie,getUserIdByToken}