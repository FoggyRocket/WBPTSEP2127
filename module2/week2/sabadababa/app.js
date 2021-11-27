const express = require("express");
const hbs = require ("hbs");
const  bodyParser =  require('body-parser')

//init  express

const app = express()

//configuramos las views y hbs

app.set('views', __dirname + '/views');
app.set("view engine", "hbs");

app.use( bodyParser.urlencoded( {extended:true} ) )


//ruta
//verb("/direction",arrowFunction())
app.get("/",(req, res, next )=>{
    console.log("el req",req)
})


//query!!!  ? 
app.get("/perritos",(req,res,next)=>{

    console.log("Query",req.query)

    /**
     * {
     * key:value
     * ...
     * }
     */

})

//params



app.get("/login",(req,res,next)=>{
    res.render('login')
})
// sin middelware
// app.post("/login",(req,res,next)=>{
//     console.log("el body",req.body)
//     res.send("Texto validado")


//     /*req.body = {
//         email:"dylan@ironhack"
//         password:"Nova182$"
//     }
//     */
// });

//con middelware
app.post("/login", validatePassword  ,  (req,res,next)=>{
    console.log("el body",req.body)
    res.send("Texto validado")


    /*req.body = {
        email:"dylan@ironhack"
        password:"Nova182$"
    }
    */
});


function validatePassword(req,res,next){
    const {password} = req.body
    console.log(req.body)
    if(password != "Nova182$"){
        res.send("Password Erroneo")
    }else{
        next()
    }
}

//rutas con params mandarlas al final de documento
app.get("/name/:cat",(req,res,next)=>{
    console.log("tengo params??",req.params)
})

//poner a funcionar el server

app.listen(3000,()=>{
    console.log("Estoy corriendo chido")
})