const mongoose = require("mongoose")


//conection 
                //127.0.0.1
mongoose.connect('mongodb://localhost/demoMongoose',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) )
.catch( err=>console.error('Error connecting to mongo', err) )


//create model

const Cat = mongoose.model("Cat",{ name: String})

//Creating an instance