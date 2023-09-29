import express from "express";
import ApiAuthController from "../controllers/api/api.auth.controller.js";
import validation  from "../validator/validation.route.js";
import {body} from "express-validator";
import passport from "passport";
import '../configuration/passport.js';

const router = express.Router();

// router.post
router.post('/register', ApiAuthController.register.bind(ApiAuthController))
router.post('/authenticate',
    body('email').exists().notEmpty().isEmail().normalizeEmail(),
    body('password')
    .exists()
    .isAlphanumeric()
    .notEmpty()
    .isLength({ min: 6, max: 20 }),
    validation, ApiAuthController.authenticate.bind(ApiAuthController))
// router.post('/logout', AuthController.logout)
// router.post('/send_mail', AuthController.sendMail)
export default router;