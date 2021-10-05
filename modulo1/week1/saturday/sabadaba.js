

function MiPerro(name,params){
    //...code
    console.log("Mi perro se llama Nova")
    //return 
  }
  
  //ejecutar una funcion 
  
  MiPerro()
  
  function MyName(name){
    //return "My name is:" + name
  }
  
  MyName("Dylan")
  
  function countChelas(value){
  let count = 6
  
    if(value < 5){
       count += value
    }else{
      count -= value
    }
      
  
    //return count
    console.log("Estoy dentro de la funcion",count)
  
  }
  
  
  
  //Daniel
  function MiNombr1e (name, Daniel){
    return "My name is:" + name 
  }
  
  //ejecutar
  //MiNombr1e("Eva",343)
  
  function days (number){//inicia
  
    let count = 30;
    if(number <= 7){
      count -= number
    } else {
      count += number;
    }
    return count;
    
  }//termina
  //days(7);
  
  function suma(primerNumero, segundoNumero){
      return  primerNumero + segundoNumero
  }
  
  //suma(13 , 7)
  
    function sayHI(){
        let hi = "hola"
        console.log(hi)
    }
  //sayHI(1293210938)
   
   //keyword name (params) {//}
  function sayHola (name){
    console.log(`Hola mi nombre es ${name}`) //<---Moda
   
  }
  
  //sayHola("Nat")
  
    function programaLaFiesta(amigos, bebidas, musica){
      if(musica && amigos > 5 && bebidas > 2){
        console.log(`La fiesta puede iniciar`)
      return `La fiesta puede iniciar`
  
      }else if(!musica && amigos > 5){
        console.log(`No se puede iniciar fiesta por que `)
       return `No se puede iniciar fiesta por que `
      }
  
      return "No puedo hay COVID"
    }
    
  // programaLaFiesta(7, 10, false)
  
  // function nameFunction (params) {}
  function creartNewObj (name,lastName) {
    //...code
    // {key:value,....,keyN:value}
    let newCard = {
      name:name,
      last_name:lastName
    }
  
    return newCard
  }
  
  //ejecutar una funcion es colocar en nombre de dicha funcion y ponerle parentesis ()
  
  //creartNewObj("Oswaldo","Aviles")
  
  
  
  
  //Arrays
  
  // [] <- esto es un arreglo , listas, arrays, matrices ...
  // [] <--- array []
  const Perro = "Thor"
  let names = ["Jelena","David","Daniel", 25, false, {key:"value"} , [0,1,2], Perro,function perrito(){console.log("perritos")},undefined, null  ] 
  
  
  //0....n <--- 0 , 1,2 ,3 ...n 
  
  console.log("names?",names)
  
  console.log("quiero tal pos:", names[7] )
  console.log("es el undefined??",names[9])
  console.log("ejecutar funciones!!", names[8]() )
  
  console.log("traer valores de un objecto dentro de un array",names[5].key) //Lunes objectos!!
  console.log("array dentro de un array",names[6][1])//<-- dificil 
  
  
  let perros = [] //<--- vacio
  let gatos = ["Loki","Tyr","chadow"] // <--lleno osea contiene elementos 
  
  console.log("tiene valores",perros.length)
  console.log("tiene valores",gatos.length)
      //(perros.length >= 1)
      // 0 === false
      // 1 === true 
  if(gatos.length){
    console.log("El arreglo tiene valores")
  }else{
    console.log("No tiene nada ")
  }
  
  //Metodos para los arreglos 
  //unshift <-- lo coloca al inicio en la posicion 0 
  //push <-- entra al final de la final 
   //method === function // es que le pernece a un elemto 
   //array.method()
   perros.push("Nova")
   console.log("Perros",perros)
    perros.push("Jax")
    perros.push("Thor")
   console.log("Perros",perros)
   perros.unshift("Kevin")
    console.log("Perros",perros)
  
   //[].push(value) , //[].unshift(value)
  
  //esto solo funciona para []
  
  
  //quitar elementos
  //[].splice(pos,cuantos elemntos) remueve el que queremos
  
  //pop [].pop()
  
  perros.splice(1,1) //<-- lo usaremos en el videojuego
  
  console.log("Perros",perros)
  
  perros.pop()
  console.log("Perros",perros)
  
  
  //Random
  // Math.random()
  //Math.floor()
  
  let computerChoice= Math.floor(Math.random() *3  ) 
  
  console.log("random1",computerChoice)
  
  
  