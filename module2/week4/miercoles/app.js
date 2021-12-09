//importar  bcryptjs
const  bcryptjs = require("bcryptjs");

const saltRound = 10;

const plainPassword = "HelloWorld";
const plainPassword2 = "helloWorld";


const salt = bcryptjs.genSaltSync(saltRound);

console.log(`salt ${salt}`);


const hash1 = bcryptjs.hashSync(plainPassword,salt)
const hash2 = bcryptjs.hashSync(plainPassword2,salt)

const verifyPass1 = bcryptjs.compareSync(plainPassword,hash1);
const verifyPass2 = bcryptjs.compareSync("holaSoyPedro",hash2);



console.log(`hash1 ${hash1}`);
console.log(`hash2 ${hash2}`);
console.log(`-----------------------------------------------`);
console.log(`LA contraseña1 es correcta?: ${verifyPass1}`);
console.log(`LA contraseña2 es correcta?: ${verifyPass2}`);