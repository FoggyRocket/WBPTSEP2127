//import el archo calc

const  sum = require("../src/calc");


describe("The function sum() used in the Calculator", ()=>{
    it('Should be a function',()=>{
        expect(typeof sum).toBe('function')
    })
    //it ... n
     it('should return 0 for an empty array', () => {
        expect(sum([])).toBe(0);
     });
     //it
})