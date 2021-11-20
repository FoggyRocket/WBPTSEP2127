const chalk = require('chalk');
//const dylan =  require("dylan")
//todo lo que importemos va de la linea 1 hacia bajo


// console.log( chalk.blue('Hello world!') );

// console.log(chalk.green("Hola mundo!"))

// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

//.gitignore


//1.- 

const http = require('http')

//Demo server
// const server = http.createServer( (request,response)=>{
//     response.write('Hello, ya eres un pro!');
//     response.end()
// } )

const server = http.createServer((request,response)=>{
    console.log(chalk.green(`Someone has requested ${request.url}`))

    if(request.url === '/'){
        response.write("Estan en el Home hermoso")
        response.end()
    }else if(request.url === "/about"){
        response.write("Me encanta las enchiladas pero muy picosas")
        response.end()
    }else if(request.url === '/nova'){
        response.write("<h1>Hola soy Nova</h1>")
    }else{
        response.statusCode = 404
        response.write("Sorry bro! x( ")
        response.end()
    }

})


console.log(chalk.green("server is running"))
server.listen(3000)