
//boolean

/**
 *  true 
 *  false
 * 
 *  1  // true
 *  0 //  false 
 */

 let kain = 28;
 let dylan = 18;
 //solo mayores de 21años
 
 if(kain >= 21 &&  !(dylan >= 21)){
   //...code
   console.log("Pueden pasar")
 }else{
     console.log("Lo siento morros no pueden pasar ")
 
 }
 
 
 let newArray = []
 
 if( !newArray.length ){
   console.log("mi Arreglo esta vacio")
   //si mi arreglo esta vacio quiero hacer mas cosas
 
 }else{
   console.log("mi arreglo esta lleno ya no puedo continuar")
 }
 
 let name; // undefined 
 name = 3000;
 
 let cant = null; 
 
 // no podemos modificar el texto
 let perro = "nova"
 console.log("antes;",perro.toUpperCase())
 //perro[0] = n
 perro[0] = "N"
 
 console.log("despues",perro)
 //perro = "nova" (1)
 // perro = ''
 // perro = "Nova"
 
 perro = "Nova"
 
 console.log("despues x2:",perro)
 
 let wallet = 12
 let elote = 25
 // (SI) tengo mas de 25 pesos compro mi elote! 
 if(wallet >= elote){
   console.log("Dylan come su elote")
 }else{
   console.log("Dylan llora porque no le alcanza (T-T) ")
 }
 
 /**
  *  if(condition) 4*4 
  *  //|| or
  *  if (condition) console.log(4 * 4);
 *.  else console.log(5 - 5);
 *  //||or
     //Ternario ? (if) :(else)
 *  (condition) ? console.log("esto es verdad") : console.log("esto es falso") ;
 */
 
 //Switch
 
 /**
  * los Chinos
  * 1.- Tacos de Canasta
  * 2.- Pizza
  * 3.- Bisquet 
  * 4.- Cerveza
 */
 
 let key = "perro"
 //lo podemos usar cuando sabemos el numero de elementos
 switch(key){
   case 1:
     console.log("Te comes unos tacos de Canasta")
   break; // break despues de cada caso 
   case 2:
     console.log("Te comes una Pizza")
   break;
   case 3:
     console.log("Te comes un Bisquet")
   break;
   case 4:
     console.log("Te tomas una cerveza")
   break;
   case "david":
   case "David":
       console.log("David Paga la cuenta!!!")
   break;
   // siempre un default buena practica
   default:
     console.log("No me molestes aun sigo viendo")
   break;
 }
 
 //loops
 let i = 0;
  //Este codigo trabajar mientras la condicion no se cumpla
 while (i <= 100) {
   //code 
   //console.log(i);
   i++; // this is the same as i = i + 1
 }
 
 do {
   // block of code to be executed
  // console.log(i)
   i++
 } while (i <= 200);
 
 
 //los for los podemos usar cuando sabemos la cantidad a iterar
 
    //varaible(acumulador) ; condition ; aumentar el acumulador
 for(let x = 0; x <= 10 ; x += 5){
   // x = 0 ; 1
   console.log("cuanto vale x:",x)
   //x = x + 1
 }
 
 // []  array
 // {}  object 
 
 const letters = "Sandoval";
 
 for(let letter of letters){
   console.log(letter)
   
 }
 
 
 /*los for in es usado mas en Objectos para poder saber cuales son sus llaves y tambien para obtener los valores de dichas llaves
 */
 // { key:value,, keyN:value}
 let newObject = {
   name:"Dylan",
   age: 28,
   pet: "Nova",
   nickname: "Foggyrocket",
   food: "Mixiote",
   deudas : true
 }
 
 for(let llave in  newObject){
                                         // name.      //"Dylan"
   if(newObject[ llave ] === true && llave === "deudas" ){
     continue 
   }
 
   console.log("las llaves de mi objecto:",llave, ":", newObject[ llave ])
 
   
 }
 
 //el return / break nos sirve para romper un loop en un momento especifico
 // tenemos igual el continue para saltarnos un valor de la itereacion
 
 
 //return  && break 