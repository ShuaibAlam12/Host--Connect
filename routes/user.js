const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//Signup by router.route structure
router
    .route("/signup")
    .get( userController.renderSignupform)
    .post( asyncWrap(userController.userSignup));

//Login by router.route
router
.route("/login")
.get( userController.renderLoginform)
.post( savedRedirectUrl, passport.authenticate('local',
    {
        failureRedirect: "/login",
        failureFlash: true
    }), userController.userLogin,
);

//Logout Users
router.get("/logout", userController.userLogout);


module.exports = router;




//Normal structure when we dont use router.route
// //get user
// router.get("/signup", userController.renderSignupform);

// //signUp user
// router.post("/signup", asyncWrap(userController.userSignup));


// //Login
// router.get("/login", userController.renderLoginform);

// router.post("/login", savedRedirectUrl, passport.authenticate('local',
//     {
//         failureRedirect: "/login",
//         failureFlash: true
//     }), userController.userLogin,
// );

