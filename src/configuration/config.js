import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import multer from "multer";
import {fileURLToPath} from "url";
import flash from "connect-flash";
import session from "express-session";
import passport from "passport";

// import passport from "./passport.js";

dotenv.config();

const config = (app) => {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(passport.initialize());


    app.use(session({
        secret: process.env.JWT_ACCESS_TOKEN,
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
    }));

    app.use(passport.session());
    app.use(passport.authenticate('session'));
    app.use(flash())
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename).slice(0, -13)
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public')))
    app.set('views', path.join(__dirname, 'views'))

//     set favicon
    app.use('/favicon.ico', express.static('./src/public/favicon.ico'));

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './src/uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })

    const upload = multer({
        storage: storage,
        limit: {fileSize: 1000000000},
        fileFilter: function (req, file, cb) {
            cb(null, true);
        }
    })

    return upload;

}

export default config;