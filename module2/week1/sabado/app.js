//imporamos a express
const express = require('express');


//vamos a crear nuestro server todo gracias a express
const app = express();

//usando archivos estacitos (Public)
//no se hace ../public/images 
//forma correcta images/perro.png

app.use(express.static('public'))

//creando nuestra primera ruta
          //request, response, next
app.get('/',(req,res,next)=>{ // "/"" siempre es el home 
    console.log("que es el req=>",req)
    res.send('<h1>Hola Express</h1>') // <== mandamos solo texto
})

app.get("/about",(req,res,next)=>{
    res.send(`
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>About</title>
                <link rel="stylesheet" href="/stylesheets/styles.css" />
            </head>
            <body>
                <h1>Sexiest Man Alive</h1>
                <p>Autor:Dylan</p>
                <img src="/images/sexy.jpeg" width="200" height="300" />
            </body>
        </html>
    `)
});

//otra ruta
app.get("/sexy",(req,res,next)=>{
    // _ _ dirname
    res.sendFile(__dirname + '/views/sexiest-page.html') //<= mandando un archivo html
})


app.listen(3000,()=>{
    console.log("Estoy corriendo en el puerto 3000")
})


