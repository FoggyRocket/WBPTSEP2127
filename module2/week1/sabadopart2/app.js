//que se necesita primero? 
const express = require("express");

//inicializamos nuestra app
const app = express()

//crea un path absoluto para nuestras views
app.set("views",__dirname + "/views")
app.set("view engine","hbs")

//las rutas   //request,response,next
app.get('/',(req,res,next)=>{
    //previo
    //res.send("Todo chido")
    //res.sendFile(__dirname + "/views/index.hbs")
    //Nuevo
    let data = {
        name : "dylan",
        age: 29,
        pet:"<h1>Nova</h1>",
        havePet: true,
        friends:[
           {
            name : "David",
            age: 29,
           } ,
           {
            name : "Nat",
            age: 29,
           } ,
           {
            name : "Luis",
            age: 29,
           } 
        ]
    }

    res.render("index",data)
})



//poner a trabajar nuestro server en el puerto 3000
app.listen(3000,()=>{
    console.log("Ya estoy corriendo! :D ")
})