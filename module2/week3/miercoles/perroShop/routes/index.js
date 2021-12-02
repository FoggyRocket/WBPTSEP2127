const router = require("express").Router();
//importar el Modelo a utilizar
//rules : nombre const en UpperCase
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
/**
 *  C:R:U:D
 */

router.get("/createUser",(req,res,next)=>{
  res.render('createUser')
})

router.post('/createUser',(req,res,next)=>{
  //req.body = {username,password }
 
  //{username:"perro",password:"Nova"}
  /**
   * 1)
   * User.create({
   *  username:username,
   *  password:password
   * })
   * 2)
   * User.create({...req.body})
   * 3) 
   * User.create(req.body) req.body = {username,password }
   */

  console.log("req.body",req.body)
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
