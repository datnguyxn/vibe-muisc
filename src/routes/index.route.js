import express from "express";
import passport from "passport";
const router = express.Router();
import '../configuration/passport.js';

router.get("/", (req, res) => {
        res.send("<button><a href='/auth'>Login With Google</a></button>")
});

// Auth
router.get('/auth' , passport.authenticate('google', { scope:
        [ 'profile', 'email' ]
}));

// Auth Callback
router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/callback/success',
        failureRedirect: '/auth/google/callback/failure'
    }));

// Success
router.get('/auth/google/callback/success' , (req , res) => {
    console.log(req.user)
    if(!req.user)
        res.redirect('/auth/google/callback/failure');
    res.send("Welcome " + req.user.email);
});

// failure
router.get('/auth/google/callback/failure' , (req , res) => {
    res.send("Error");
})

export default router;