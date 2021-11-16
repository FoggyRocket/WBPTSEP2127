
//async / await 
//async function syntax
async function nova(){}

//arrow
const miPerro = async () => {}


const directions = [
    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
  ];

  function obtainDirections(step) {
    return new Promise ( (resolve, reject) => {
      // setTimeout(() => {
        console.log( directions[step] );

        if (!directions[step]) reject("Instructions not found.")
        else resolve(directions[step] );
      // }, 2000);

    })
  }

  function perro2(perro) {
    return new Promise ( (resolve, reject) => {
       setTimeout(() => {
        console.log("este es mi perro:",perro)
        if (!perro) reject("no hay perro")
        else resolve("todo ok ");
      }, 2000);

    })
  }

async function getCoffee(){
    try{
        // await perro2("Thor")
        // await obtainDirections(0)
        // await obtainDirections(1)
        // await obtainDirections(2)
        // await obtainDirections(3)
        // console.log("todo ok hermano!")
    }catch(error){
        // console.log("el error en getCoffee",error)
    }
}

getCoffee()

console.log(obtainDirections(0))
// obtainDirections(1)
// .then(res=>console.log("que es el res",res))
// .catch(error=> console.log("error",error))

async function getData(){
    try{
        const data = await obtainDirections(0)
        console.log("que es DATA:",data)
    
    }catch(error){
        console.log("error en getData",error)
    }
}
getData()



// {0:_123,1:" Head northwest on Bd Voltaire toward Rue Léon Frot",2:null}

//try && catch 


fetch("https://rickandmortyapi.com/api/character/1")
  .then((response) => { 
      console.log("response",response) f
    return response.json();
  })
  .then((jsonResponse) => {
      y
    console.log("Parsed response: ", jsonResponse);
  })
  .catch((error) => console.log("Something went wrong!", error));


  async function getCharacter(){
      try{
          const response = await fetch("https://rickandmortyapi.com/api/character/2")
          const responseJson = await  response.json()
          console.log("el personaje es:",responseJson)
      }catch(error){
          console.log("el erro en el getCharacter",error)
      }
  }

  getCharacter()