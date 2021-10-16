//scope 
/* 
    const  (read only)
    var    old version  definir scope global
    let     new version local (o los deja englobados en ese scope) 
 */
//global
var leve = 1 ;
const life = 3

// function/local scope

//(params1,params2) ===> estamos decalrando variables dentro del scope fucntion/local 
function game(life){
    //const life = 1
    const perro = 0 
    var pepito = "pepito"
    //
    console.log("game",life) // <== 1
}


//console.log("que esta m!",life)
// ...
game(life)

//loop contable
for(var i = 0 ; i <= 10 ; i++){
    console.log("valor 1 dentro del for", i)
}

console.log("fuera del for??",i)

for(var i=0; i<=5;i++){
    console.log("for2", i)
}


console.log("fuera del for??",i)

//global
let name = "Jelena";

//local
if(true){
    //name = Jelena
    // estoy en el global o local? 
    // ah estoy en el local!!!

    let name = "Santiago"
    //name = "Santiago"
    console.log(`Hello ${name}`)
}

console.log(`hello ${name}`);

let a = 1
let b = 2 


if(true){
    console.log("varaible a",a)
   //( a + 2 =  3)
   let b = 6; 
   // b - 2 = 
}


//hosting


console.log(message)
var message = "Esto es un mensaje!"




let gato = "Chadow"
console.log(gato)

//console.log(dylan)

//try and catch()
//debugger
function ejemplo2(){
    try{
        nova = "perro"
        sdfghjklñlkjhgfdfghjkjhgfd
        //code 
        let sum = 2;
        sum = sum + 23456
        
        return sum 
    }catch(error){
        console.error("error",error)
    }
  

}
function ejemplo(){
    try{
        //code 
        let sum = 2;
        sum = sum + 23456
        return sum 
    }catch(error){
        //code error
        console.log("el error",error)
        return 0
    }
}



console.log("la funcion2",ejemplo2())
//......

console.log("la funcion1",ejemplo())
 /**
  * setTimeout(callback,delay)
  * callback = function(){//...code}
  * callback = ()=>{}
  * delay =  ms
  */

//Asynchronous
    setTimeout(()=>{
        console.log(1)
    },2000)

console.log(2)
console.log(3)


//synchronous
// ejecutar linea por linea

//Asynchronous
// tomar su tiempo 0.1s +

// Async y await (Asynchronous promise )


let  alerts= setTimeout(()=>{
    //....
    alert("Hola mundo")
},5000)


                            //id 
console.log("que es alerts",alerts)


clearTimeout(alerts)


//setInterval
let count = 1
let timerCount = setInterval(()=>{
    console.log("Hola")
    count++;
    if(count >= 6){
        clearTimeout(timerCount)
    }
},2000)

console.log("que es?",timerCount)
