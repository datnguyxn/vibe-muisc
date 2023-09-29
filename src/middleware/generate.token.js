import jwt from 'jsonwebtoken';
import {variables} from '../configuration/index.js'

const generateToken = (user) => {
    return jwt.sign({
            id: user._id,
            email: user.email,
        },
        variables.JWT_ACCESS_SECRET,
        {expiresIn: variables.JWT_ACCESS_EXPIRES_IN});
}

const generateRefreshToken = (user) => {
    return jwt.sign({
            id: user._id,
            email: user.email,
        },
        variables.JWT_REFRESH_SECRET,
        {expiresIn: variables.JWT_ACCESS_EXPIRES_IN});
}

export {generateToken, generateRefreshToken};
