const router = require("express").Router();
//importar el Modelo a utilizar
//rules : nombre const en UpperCase
const User = require("../models/User.model")


/**
 *  C:R:U:D
 */

router.get("/createUser",(req,res,next)=>{
  res.render('createUser')
})

router.post('/createUser',(req,res,next)=>{
  const {username,password,...rest} =  req.body
  User.create({
    username,
    password
  })
  .then(newUser=>{
    console.log("el nuevo usuario",newUser)
    res.render("userSuccess",{data:newUser})
  })
  .catch(error=>{
    console.log("error",error)
    res.send("Error en el create")
  })
})

router.get("/list-user",(req,res,next)=>{
  
  User.find()
  .then(users=>{
    console.log("el nuevo usuario",users)
    res.render("list-user",{data:users})
  })
  .catch(error=>{
    console.log("error",error)
    res.send("Error en el create")
  })



})



module.exports = router;