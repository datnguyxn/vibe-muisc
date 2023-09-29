import bcrypt from 'bcrypt';
import UserException from "../exception/user.exception.js";
import User from "../models/user.model.js";
import verifyToken from "../utils/verify.token.js";
import MailService from "./mail.service.js";
import {createCookie, createNewToken, revokeAllUserTokens} from "./token.service.js";

class AuthService {
    constructor(model) {
        this.model = model;
    }

    async register(data) {
        try {
            const user = await this.model.findOne({email: data.email});
            if (user) {
                throw new UserException("User already exists");
            } else {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(data.password, salt);
                const newUser = new User({
                    username: data.username,
                    email: data.email,
                    password: hash,
                    configuration: {
                        favoriteSongs: [],
                        favoriteArtists: [],
                        favoriteAlbums: [],
                        favoritePlaylists: [],
                        recentlyPlayed: [],
                    },
                });
                const savedUser = await newUser.save();
                const {token, refreshToken} = await createNewToken(savedUser)
                // await MailService.sendMail(data.email, token, 'verify_user.ejs')
                return {token, refreshToken};
            }
        } catch (error) {
            console.log(error)
            throw new UserException("User already exists");
        }

    }

    async authenticate(req, res) {
        try {
            const user = await User.findOne({email: req.body.email});
            if (!user) {
                throw new UserException("User does not exist", 400);
            } else {
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                if (!validPassword) {
                    throw new UserException("Invalid password", 400);
                } else {
                    await revokeAllUserTokens(user)
                    const {token, refreshToken} = await createNewToken(user)
                    res.setHeader('Authorization', 'Bearer ' + token)
                    createCookie(res, user, token)
                    return {token, refreshToken};
                }
            }
        } catch (error) {
            console.log(error)
            throw new UserException("User does not exist");
        }
    }

    async refreshToken(req, res) {


    }

    async verifyToken(data) {
        if (data !== verifyToken) {
            throw new UserException("Invalid token")
        }
    }

    async sendMailToUser(req) {
        const user = await User.findOne({'email': req.body.email});
        if (user != null) {
            const token = verifyToken
            console.log(token)

            await MailService.sendMail(req.body.email, token, 'verify_user.ejs')
        } else {
            throw new UserException("User does not exist")
        }
    }

    async resfreshToken(req, res) {

    }

    // async logout(req, res) {
    //     try {
    //         const token = req.body.token
    //
    //         createCookie(res, null, null)
    //         revokeAllUserTokens()
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
}



export default AuthService;