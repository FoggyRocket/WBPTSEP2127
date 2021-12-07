const {Schema,model } = require("mongoose");

const postSchema = new Schema({
    _author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        maxlength:280
    },
    _comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
},{timestamps:true})


module.exports = model("Post",postSchema)