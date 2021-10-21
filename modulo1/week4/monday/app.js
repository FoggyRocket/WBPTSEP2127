/**
 * dylanObj ={
 *  name:"dylan", //propiedades
 *  lastName:"Torres" //propiedades
 *  //
 *  comer: (type)=>{
 *      console.log("te puedes comer:",type)
 *      return `Te puedes comer algo como ${type}`
 *  }
 * }
 *  dylanObj.name // <= dylan
 *  dylanObj.comer("pizza") //<= Te puedes comer algo como Perro 
 * 
 *  dylanObj.pet = "Nova" ???? 
 *  //{
 *  name:"dylan", //propiedades
 *  lastName:"Torres" //propiedades
 *  //
 *  comer: (type)=>{
 *      console.log("te puedes comer:",type)
 *      return `Te puedes comer algo como ${type}`
 *  },
 *  pet: "Nova"
 * }
 * 
 */


const input = document.getElementById("count") //<= 1 element 
// <input ...>


console.log("que es todo esto???",input)

console.log("existe?",document.getElementById("perro")) //si no existe la etiqueta regresa un null

//no se modifica, puede ser cualquier cosa, es unicamente lectura
const perrito = {/*...*/} // Objecto

//esto no se puede hacer
//perrito.values = "String" // reasignacion 

perrito.values = "String"  

//querySelector

const qButton = document.querySelector("button")

console.log("qButton?",qButton)


const qButtons = document.querySelectorAll("button")

console.log("qButtons",qButtons)

//qButtons = [button,button#fake]
 //qButtons.forEach(function(){})

 //map,filter,forEach (()=>{})
qButtons.forEach((item,index)=>{

    console.log(item,index)
})


const dylanObj = {
    name:"dylan"
}

console.log("Obj",dylanObj)

dylanObj.pet = "Nova"

console.log("add New Key:value",dylanObj)



//input 
//qButton // <button >perro</button>

/**
 *  qButton = {
 *      name:"...",
 *      with:"...",
 *      type:"...",
 *      onclick:null
 * }
 * 
 *  qButton.onclick = "perrro"
 */

//reasignar una funcionalidad a qbutton.onclick

const btn = document.querySelector("button")
//const input = document.getElementById("count") //<input>
btn.onclick =  () => {
    console.log("value en Input", input.value)
}
// () => {}
btn.onmouseenter = () => {
        console.log("El mouse esta arriba de mi")
}

// Ejemplo pesado!!!

const container = document.getElementById("cart")

//killElement

function killElement(event){
    //div.target.parentNode.remove()
    event.target.parentNode.remove()
}

//fuction addCart

function addItem(){
    const price = input.value;

    //aqui vamos a crear una nueva etiqueta con esta sintaxis

    const div = document.createElement("div");
    const button = document.createElement("button")

    //createElement sirve para crear una nueva etique
    //modificar texto con el innerText!!
    //innerText add text
    //innerHtml add any
    button.innerText = "Matame!!!";
                //(item) => killElement(item)
                //button.onclick = ()=>killElement("perro")
    button.onclick = killElement;

    //modificar HTML innerHTML
    div.innerHTML = ` 
    <div class="item">
        <div>Product name</div>
        <div class="price">${price}</div>
    </div>
    `
    //agregar el boton!!!
    div.appendChild(button)
    //agregamos a nuestro contenedor dinamico
    container.appendChild(div)
}


//qButton
//btn
btn.onclick = addItem;
