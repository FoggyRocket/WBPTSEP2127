//importar
const {Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title:{
        type:String,
        //unique:true,
        //required:true,
        //default:"EL libro de Dylan"
    },
    description:String,
    author:String,
    rating:{
        type:Number,
        //max:10,
        //min:0.1
    },
    // referencia de 1 a 1
    _owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

    /** varios propietarios 
     *   _owner:
     * [ 
        { 
            type:Schema.Types.ObjectId,
            ref:"User"
        } 
        ]
     */


},{timestamps:true});


//exportamos

module.exports = model("Book",bookSchema)