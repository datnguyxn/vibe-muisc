import {body} from "express-validator";

const authenticate = () => {
    body('email').exists().notEmpty().isEmail().normalizeEmail()
    body('password')
        .exists()
        .isAlphanumeric()
        .notEmpty()
        .isLength({ min: 6, max: 20 })
}

const register = () => {
    body('email').exists().notEmpty().isEmail().normalizeEmail()
    body('password')
        .exists()
        .isAlphanumeric()
        .notEmpty()
        .isLength({ min: 6, max: 20 })
    body('name').exists().notEmpty().isString()
}

export { authenticate, register }