
let dylan = {
    //key:"string"
     name:"Dylan",
       pet:"Nova",
       "Age": 28,
       status: "single",
       "like beer":true,
       books:null,
     couple:undefined,
       family:{
      dad:"Roberto",
      mom:"Ana"
     },
     hobbies:["BreakDance","games"],
       favoritFood:"Mixiotes"
 }
 
 //add key and value 
 //{}.key = "value"
 dylan.perro = "Thor" // no exite ?? lo que puedo hacer es agregarte la key "perro": Thor
 //{}["key"] = value 
 dylan["fitness"] = false 
 // copia todo y pegalo para objetos y arreglos 
 // reasignacion variable = {...variable, key:"value" } (... spread operator ) funciona con var y let
 dylan ={...dylan, nachosConQueso:false }
 //update funciona para actualizar a llaves que existen en el objeto
 dylan.books = ["the Witcher"]
 dylan["couple"] = true 
 dylan = { ...dylan, "Age":29 }
 //delete {}.key// delete {}["key"]
 delete dylan.couple;
 delete dylan ["Age"]
 
 
 
 
 let sergio = {
    //key:"string"
     name:"Sergio",
       pet:"Kenai",
       "Age": 25,
       status: "single",
       "like beer":true,
       books:true,
     couple:true,
       family:{
      dad:"Sergio",
      mom:"Claudia"
     },
     hobbies:["hiphop","games"],
       favoritFood:"Tacos"
 }
 
 let santiago = {
     name:"Santiago",
       pet:null,
       "Age": 28,
       "marital status": "single",
       "like beer":true,
       books:null,
     couple:'Andrea',
       family:{
      dad:"Bernardo",
      mom:"Anne",
      sister:'Anne'
     },
     hobbies:["spor","games"],
       favoritFood:"Mixiotes"
 }
 
 let kain = {
     name:undefined,
       pet:"Thor",
       "Age": 38,
       status: "Married",
       "like beer":true,
       books:["ciencia fixxion","historia","fantastico"],
     couple:"una bruja",
       family:{
       brothers:["Ivan","Diego"],
      mom:"Aurora"
     },
     hobbies:["Drink","Drinkx2","coding"],
       favoritFood:"Pizza"
 }
 
 
 let sarah = {
   name: 'Sarah',
   pet: null,
   "age": 28,
   status: "single",
   couple: true,
   "like beer": false,
   family: {
       dad:"Jean-Marc",
       mom: "Natacha",
       siblings: ['Sylvain', 'Roxane']
   },
   hobbies: ['food', 'music'],
   favoriteFoods: 'ramen',
 }
 
 
 
 
 
 
 let david = {
     name:"David",
       pet:undefined,
       "Age": 38,
       status: "Single",
       "like beer":true,
       books:"El planeta vacio",
     couple:true,
       family:{
      dad:"Vicente",
      mom:"Alejandra"
     },
     hobbies:["Scuba","Running","Tech"],
       favoritFood:"Pasta"
 }
 
 
 
 
 
 
 
 
 
 let daniel = {
    //key:"string"
     name:"Daniel",
       pet:"Kevin",
       "Age": 19,
       status: "single",
       "like beer":false,
       books: "Scailing Up",
     couple:undefined,
       family:{
      dad:"Salomon",
      mom:"Olga"
     },
     hobbies:["gym","reading"],
       favoritFood:"Pasta & Burgers"
 }
 
 
 
 
 
 let natali = {
   name: "Natali",
   pet: "Jax",
   "Age" : 30,
   status: "married",
   "like beer": false,
   books: null,
   couple: "Daniel",
   family: {
    dad: "Carlos",
    mom: "Maritza"
 },
     hobbies: ["Photography"],
   favoriteFood:"Hamburguesa"
 }
 
 
 
 let eva = {
   //key: "string"
   name: "Eva",
   pet: "Jodie",
   "Age": 28,
   status: "single",
   "like beer":true,
   books: null,
   couple: undefined,
   family: {
     dad: "Arturo",
     mom: "Marina",
   },
   hoobies: ["Video Games","Draw"],
   favouriteFood: "Mariscos"
 }
 
 
 let jelena = {
    //key:"string"
     name:"Jelena",
       pet:0,
       "Age": 36,
       status: "in a relationship",
       "like beer":true,
       books:15,
     couple: true,
       family:{
      dad:"Josip",
      mom:"Marija",
      sister: "Ana"
     },
     hobbies:["yoga","meditation"],
       favoriteFood:"pasta"
 }
 
 let oswaldo = {
   name: "Oswaldo",
   pet: "No tiene",
   "age": 28,
   status: "single",
   "like beer": true,
   books:null,
   couple: true,
   family: {
     dad: "Oswaldo",
     mom: "Mayte",
     },
   hobbies: ["playing guitar", "watching movies"],
   favoriteFood: "Hamburgers",
 }
                  //0.   1.   2 
 let newArray = ["perro",true,4567]
 
 console.log("acceder []", newArray[2] )
 
 //para acceder a un valor de un objeto
 // se puede utilizar ["key"] y . 
 
 console.log("acceder {}.", oswaldo.hobbies    )
 
 console.log("acceder{}[] ", jelena["favoriteFood"] )
 
 
 //no se puede hacer
 console.log("dylan {}[0] ", dylan[0])
 
 
 
 console.log("dylan {} ", dylan)
 //saber si existe una propiedad en el objeto
 //objectos key o propiedades,
 //cuando continen funciones => methods 
 console.log("existe?", "books" in dylan)
 
 
 //C.R.U.D
 // Create
 // Read 
 // Update
 // Delete
 
 let newObj = {}
 console.log("que llaves", Object.keys(dylan))
 console.log("que values", Object.values(dylan))
 //Object.keys( {} ) = []
 if(Object.keys(dylan).length ){
   console.log("el obj contine valores")
 }else{
     console.log("el obj NO contine valores")
 
 }
 
 //array iterar
               //no tiene nombre
               //function (params,params2){//code}
               // (params,params2)=>{ } // arrow function //EMACS
 //prulral.forEach((singular))
 //perros.           perro
 //.  0.      1.    2. 
 // ["perro",true,4567] 
               // "perro", 0, ,  ["perro",true,4567]
 newArray.forEach((item,index) => {
   console.log(item,index)
 } )
 
 for(let key in dylan){
                         // name
   console.log("que es Key?",key)
                       //dylan["status"]
   console.log("value:",dylan[key] )
 
 }
 
 const classRoom = {oldTeacher:"dylan"}
 
 
 //classRoom = {...classRoom, david:true} descartado para los const 
 console.log("classRoom1",classRoom)
 classRoom.phone = "5586812432"
 classRoom["teacher"] = "Nadia"
 
 delete classRoom.oldTeacher
 //{}
 //{key:value}
 
 console.log("classRoom",classRoom)
 
                 //0,1,2,3,4
 const classR = [ oswaldo,jelena,eva,david,sarah ]
 
 
 console.log("class",classR)
           //classR[0] = {} oswaldo
 console.log("OS",classR[0].family.dad )
 //console.log(classR[0]["family"].dad )
 
 console.log("Sa",classR[4].hobbies[1])
 console.log("Sa",classR[4].family)
 classR.push(daniel) //greamos al final un nuevo elemento
 
 console.log("class",classR)