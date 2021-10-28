const canvas = document.getElementById("canvas") // <canvas>
//quiero el contexto
const ctx = canvas.getContext("2d");
/**
 * Todo las variables globales que necesitemos se declaran 
 * al inicio de nuestro documento
 *  frames, requestID, arrayImages, defaultValues
 */

let requestID;
let frames = 0;

// Estamos recordando cosas de la clase pasada!!!
// 1.- add image 
// const demo1 = new Image()
// demo1.src = "https://bit.ly/2L7yH3f"

// demo1.onload = ()=>{
//     //al contexto le decimos que dibuje nuestra imagen
//             //drawImage(img,x,y,width,height)
//     ctx.drawImage(demo1, 100,100,100,120)
// }

class Mario{
    //Metodos y propiedades
    //Metodos son las funciones a realizar
    //propiedades sus atributos o caracteristicas
    constructor(x,y,w,h){
        //position
        this.x = x;
        this.y = y;

        this.width = w;
        this.height = h;
        //images
        this.images1 = new Image();
        this.images1.src= "https://bit.ly/2L7yH3f"

        this.images2 = new Image();
        this.images2.src = "https://art.pixilart.com/33b1bbc23398be7.png"

        this.image = this.images1
    }
//   metodos

    draw(){

        if(frames % 10 === 0){
            //if ternario  (condicion) "?" (result true) ":"  (reult false)
            this.image = this.image === this.images1 ? this.images2 : this.images1;
            /* 
                if(this.image === this.images1){
                    this.image= this.images2
                }else{
                    this.image= this.images1
                }
            */
            

        }

                //(img,x,y,w,h)
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
            //{...}
    collision(item){
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

}

//otra clase Background

class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png";
    }
    //Metodo
    draw(){
        this.x --;
        if(this.x < -canvas.width) this.x = 0
        //primera imagen 
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        //segunda imagen
        ctx.drawImage(
            this.image,
            this.x + this.width, // coloca la imagen seguido de la primera
            this.y,
            this.width,
            this.height
        )
    }

    gameOver(){
        ctx.font="80px Arial"
        ctx.fillText("Te moriste!! u.u ",150,150)
    }
}

//el enemigo
class Enemy{
    constructor(y,w){
        this.x = canvas.width;
        this.y = y;
        this.width =w;
        this.height = 80;
        //imagen
        this.image = new Image();
        this.image.src = "https://image.pngaaa.com/893/380893-middle.png";
    }

    draw(){
        if(frames % 10 ===0 ) this.x -= 5;

        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

}

//llamaos la clase para poder usarla
const mario = new Mario(100,286,50,50)
const fondito = new Background();
//const enemy = new Enemy();

//dibujar a mario 
//mario.draw()

// declarar los arreglos donde donde voy almacenar
// 2 funciones 1.- para generar enemigos y otra para dibujar enemigos

let enemies = []

function generateEnemies(){
    // en que intervalos de tiempo quiero que se generen los enemigos
    if(frames % 100 == 0 || frames % 60 === 0 || frames % 170 === 0){
        
        let y = Math.floor(Math.random() * (400 - 10) + 10)
        let w = Math.floor(Math.random() * (80 - 30) + 30)

        const enemy = new Enemy(y,w)

        enemies.push(enemy)
        //enemies = [...enemies, enemy ]
    }
}

function drawEnemies(){

    enemies.forEach((enemy,index_enemy)=>{
        enemy.draw()

        if(mario.collision(enemy)){
            console.log("Me esta tocando!!! aiuda!")
            endGame()
        }

        if(enemy.x + enemy.width <= 0){
            enemies.splice(index_enemy,1)
        }

    })
}

//
function update(){
    frames++;
    //Limpiamos el canvas es muy importante para que no se sobre ponga
    // las anteriores capaz
            //x,y,w,h
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    fondito.draw()
    mario.draw()
    //enemy.draw()
    
    // esto es temporal
        // if(mario.collision(enemy)){
        //     console.log("Me esta tocando!!! aiuda!")
        //     endGame()
        // }
    generateEnemies()
    drawEnemies()

    if(requestID){
        requestID = requestAnimationFrame(update)
    }
    

}
 
function startGame(){
    requestID = requestAnimationFrame(update)
}

function endGame(){
    fondito.gameOver();
    requestID = undefined
}

startGame()

// mover al mario!!!

addEventListener("keydown",(event)=>{
    //izq
    if(event.keyCode === 65 ){
        mario.x -= 20;
    }

    //dere
    if(event.keyCode === 68){
        mario.x += 20;
    }

    //salto
    if(event.keyCode === 32){
        mario.y -= 60;
    }
})