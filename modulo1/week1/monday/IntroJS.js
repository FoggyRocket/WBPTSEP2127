
//Aqui nadamas es un saludo! 

/* Muchas gracias por todo el trabajo realizado,
y sin fin de cosas etc...*/
console.log("Mi primer Hola mundo")


// comment line
/**
 * block comment
 */

//Variables

var perro1; // si le puedo cambiar su valor
let perro2; // este igual le puedo cambiar su valor
const perro3 = 0; //read only  

//

let perro_2 = [ "dyla","28"] ; //array
let $perro2 = { name:"dylan" } ; // object 
let dylanTorres; 
let gato1, gato2, gato3; 

// undefined 


console.log("que es perro1",perro1)

perro1 = "Firulais"

console.log("que es perro1 otra vez:",perro1)
 
console.log("typeof????", typeof perro_2, typeof $perro2)


//part 2

let oso1 = true // boolean true o false 
let oso2 = 342340238740.000 // (number) int o float
let oso3 = null // no tiene nada
let oso4, oso5 = undefined //
let oso6 = "Hola mundo" // String
let oso7= 'Hola mundo 2' // String
let oso8= `Hola mundo 3`; // String

let oso9 =  Symbol() ; //symbol 

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);


console.log(2 ** 5 ) //expo
console.log(7 % 3) //0 -  1

let myAge = 28;

myAge += 1;
console.log(myAge);


console.log(`Mi cumpleaños es octubre y cumplo ${myAge}`)

console.log("Mi cumpleaños es octubre y cumplo", myAge)

console.log("Mi cumpleaños es octubre y cumplo " + myAge)
            //0123
const name = "Santiago Mi cumpleaños es octubre y cumplo"
const name2 = "Oswaldo"

console.log("name:",name.length)
console.log("name2:",name2.length)


console.log("que letra es",name.charAt(3))


console.log(name.includes("mi"))

console.log("X", name.toLowerCase().includes("MI".toLowerCase()) )