const router = require("express").Router();
const User = require("../models/User.model")
const bcryptjs = require("bcryptjs") //<==== muy muy importante
router.get("/createUser", (req, res, next) => {
    res.render("auth/signup");
});

router.post("/createUser", async(req, res, next) => {
    //destructuring
    const {email, username, password, ...rest} = req.body
    try{
        //1)
        const salt = bcryptjs.genSaltSync(10)
        const newPassword = bcryptjs.hashSync(password,salt)

        const user = await User.create({email, username, password: newPassword })

        res.redirect(`/profile/${user._id}`)

    }catch(error){
        console.log("error:",error)
        res.send("El error!!!")
    }

})

router.get("/profile/:id", (req, res, next) => {

    User.findById(req.params.id)
    .then(user=>{
        console.log("user",user)
        res.render("profile",{user})
    })
    .catch(error=>{
        console.log("error:",error)
        res.send("El error!!!")
    })
})


module.exports = router;
