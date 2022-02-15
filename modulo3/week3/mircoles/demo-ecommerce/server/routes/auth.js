const router = require("express").Router();
const {signupProcess,loginProcess,logoutProcess} = require("../controllers/auth.controller")


// Require the User model in order to interact with the database
const User = require("../models/User.model");
const Session = require("../models/Session.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.post("/signup",signupProcess);

router.post("/login",loginProcess);

router.post("/logout",logoutProcess)



module.exports = router;
