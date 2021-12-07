const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true //-> Ideally, should be unique, but its up to you
    },
    password: String,
    email:{
      type:String,
      unique:[true,"Este email ya fue tomado"] //<=== colando un mensaje custom de error
    },
    name:{
      type:String,
      maxlength:10,
      minlength:2
    },
    last_name:{
      type:String,
      maxlength:15,
      minlength:2
    },
    phone:{
      type:Number,
    },
    profileImage:{
      type:String,
      default:"https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
