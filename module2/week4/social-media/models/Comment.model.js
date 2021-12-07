const {Schema,model} = require('mongoose');

const commentSchema = new Schema(
    {
        _author: {
            type:Schema.Types.ObjectId, ref:"User"
        },
        content:{
            type:String,
            maxlength: 280,
        },
        date:{
            type:Date,
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Comment',commentSchema);