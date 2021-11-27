const {Schema,model} = require("mongoose")

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true
    },
    avatarUrl:{
        type:String,
        default :"https://avatars.githubusercontent.com/u/29002976?v=4"
    }
},{timestamps:true})


module.exports = model('User',userSchema)