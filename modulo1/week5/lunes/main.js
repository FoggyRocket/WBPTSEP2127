//getElementsByClassName => [<>,]
//querySelector() => <>
//getElementById("#") => <>
//querySelectorAll() => [<>,]
                       //getElementById("#id")
const canvas = document.getElementById("canvas")

 //contexto para poder dibujar, insertar todo lo que quiera!!
const ctx = canvas.getContext("2d");

ctx.fillStyle = "salmon"
        //x,y,width,height
ctx.fillRect(20,100,100,100)// nos crea un nuevo trazo border y color de relleno 
ctx.clearRect(45,125,50,50)// sin border, sin color de relleno
ctx.strokeRect(57,138,25,25)// nos crea un nuevo trazo solo con border sin color de relleno

// draw path
ctx.beginPath(); //esto nada mas inidica el inicio de mi trazo 
//Linea recta x
ctx.moveTo(50,50);
ctx.lineTo(250,50);
ctx.stroke();
//end linea recta x
//linea recta y
ctx.moveTo(250,50)
ctx.lineTo(250,120)
ctx.stroke()
//end linea recta y

ctx.closePath();//ya no quiero dibujar cierra el trazo


// arc 

ctx.beginPath();

//ctx.arc(x,y,radius,startAngle,endAngl)
ctx.arc(220,170,65,0,Math.PI * 2);
//ctx.lineWidth = 20;
//ctx.strokeStyle= "peru";
//ctx.stroke()
ctx.fillStyle = "red";
ctx.fill()

ctx.closePath();


//ctx.clearRect(0,0,canvas.width,canvas.height) <= limpiar todo


// add text

ctx.fillStyle = "green";
ctx.font= "30px Arial";
        //(text,x,y,maxWidth)
ctx.fillText("Este es el texto todo chido!!!",50,45,250)



//insertar una imagen!!!!

//invocar una clase llamda image para poder agregar esta!

const img = new Image()

img.src = "https://avatars.githubusercontent.com/u/29002976?v=4"

img.onload = () => {

    ctx.globalAlpha = 0.5
            //(img,x,y,w,h)
     ctx.drawImage(img,0,0,canvas.width,canvas.height)
}


//new character

const character = new Image();

character.src= "https://i.pinimg.com/originals/8e/bb/02/8ebb021259d8d541aeec28347dd47025.png"

character.onload = function (){
    //vamos a dibujar mi imagen
            //(image,x,y,w,h)
    ctx.globalAlpha = 1.0
    ctx.drawImage(character, 240,200,50,90)
}