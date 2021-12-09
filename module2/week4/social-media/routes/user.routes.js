const router = require("express").Router();
const User = require("../models/User.model");
/* GET create  user */
router.get("/createUser", (req, res, next) => {
  res.render("createUser")
});

router.post("/createUser",(req,res,next)=>{
        //req.body = {key:"value",key2:"value",profilePic:""}
  User.create(req.body)
  .then(newUser=>{
      res.redirect("/post")
  })
  .catch(error=>{
      console.log("error",error)
      res.send("Error")
  })

})

module.exports = router;
