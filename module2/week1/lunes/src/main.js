


function func2(){
    console.log("goodbye!")
}

function func1(){
    console.log("hi")
}



func1(); // 1
func2(); // 2

//Callbacks
//func1( func2 ) // <--- good
//func1 (func2()) //<---- bad


function perro(prams){
 prams()
}


function killThemAll(){
    console.log("Perritos para todos")
}


perro(killThemAll)
perro(func2)

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
  ];

  function getDirections(step, callback, errorCallback) {
    // setTimeout(() => {
      console.log( directions[step] );

      if (!directions[step]) errorCallback("Instructions not found.");
      else callback();
    // }, 2000);
  }

getDirections(0, ()=>{
    getDirections(1,()=>{})
})

//                        0,1,2,3
function obtainDirections(step){
    return new Promise((resolve, reject)=>{
        console.log( directions[step] ) //<---  directions[1] =  ↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue

        if(!directions[step]) reject("Instructions not found.")
        else resolve()
    })
}

//una promesa siempre tiene un Then & Catch (es lo ultimo que se va a ejecutar en una promesa)

// obtainDirections() //1
// .then( ()=> obtainDirections(1) )
// .then( ()=> obtainDirections(2) )
// .then( ()=> obtainDirections(3) )
// .then( ()=> console.log("todo ok ") )
// .catch((error)=> console.log("Este es el error:",error)) //error


// let age = 18;
// const myPromise = new Promise((resolve, reject)=>{
//     if(age >= 21){
//         resolve("Puedes beber")
//     }else{
//         reject("aun eres un bebe!")
//     }
// })



// console.log(myPromise)


// console.log(1) // 1
// console.log(2) // 2 
// console.log(3) // 3 
// console.log(4) // 4


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("foo"), 10000);
  });
   
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1337), 2000);
  });
   
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve( { name: "Bob" } ), 4000);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve( "perdon" ), 1000);
  });
   
   
  Promise.all( [p1, p2, p3,p4] )
    .then((values) => console.log("values", values))
    .catch(erro=> console.log("error",erro))

// ///
//     obtainDirections(1).then(()=>console.log("function")).catch(errror=>console.log(errror))
//     obtainDirections(1).then(()=>console.log("function")).catch(errror=>console.log(errror))
//     obtainDirections(1).then(()=>console.log("function")).catch(errror=>console.log(errror))
//     obtainDirections(1).then(()=>console.log("function")).catch(errror=>console.log(errror))


//     Promise.all( [obtainDirections(1),obtainDirections(1),obtainDirections(1),obtainDirections(1)])
//     .then(()=>console.log("function")).catch(errror=>console.log(errror))