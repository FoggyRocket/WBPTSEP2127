const mongoose = require("mongoose")
//import models
const Cat = require('./models/Cat.models')
const User = require('./models/User')
//conection 
                //127.0.0.1
mongoose.connect('mongodb://localhost/demoMongoose')
.then( x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) )
.catch( err=>console.error('Error connecting to mongo', err) )


//create model

// const Cat = mongoose.model("Cat",{ name: String})
// const Dog = mongoose.model("Cat",{ name: String})
// const Bird = mongoose.model("Cat",{ name: String})


//Creating an instance

const kitty = new Cat({ name: "Bola de nieve VII" })



//guarda mi Kitty en la base de datos!!!


// kitty.save()
// .then(newCat => console.log("quee rayos es?:",newCat))
// .catch(err=> console.log("el erro es!!!:",err))

// Cat.find({name:"Mishi"})
// .then(cat => console.log("el gato?",cat))
// .catch(err=> console.log("El error",err))

Cat.find()
.then(cat => console.log("el gato?",cat))
.catch(err=> console.log("El error",err))