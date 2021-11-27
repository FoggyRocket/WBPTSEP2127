
//mongoose.model 
//mongoose.schema
//old
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//destructing
//new
const {Schema,model} = require('mongoose');

//Crear mi Schema

const catSchema = new Schema({
    name:String,
    color:String,
    age:Number,
    isAlive:Boolean
})

//exportamos el documento es muy muy importante!!!!
// const Cat = mongoose.model('Cat', catSchema);
// module.exports = Cat;

module.exports = model('Cat',catSchema)
