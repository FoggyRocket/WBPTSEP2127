//importar el archivo greeting.js
const greeting  =  require('../src/greeting');


describe('The function greeting',()=>{//anonima 1
    it('Should greet all Ironhackers',()=>{ //anonima 2
        expect( greeting() ).toEqual('Hello Ironhackers!');
    });//end anonima 2
}); //end anonima 1