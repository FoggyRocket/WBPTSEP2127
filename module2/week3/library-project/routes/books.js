const router = require("express").Router();
//importar los modelos que se vayan a requerir
const Book = require("../models/Book.model")
/* CRUD*/
//https://libros.com/book

//Get obtener info
//READ
router.get("/", (req, res, next) => {

    //find() traer todos los documentos de una collection sin excepción
    //find({params}) traer todos los documentos que cumplan con los params
    //filter!!!
    Book.find()
    .then(books => {
        console.log("el listado?",books)
        // { books:[....]}
        res.render("list-book",{books})
    })
    .catch(error=>{
        console.log("eerror",error)
        res.send("Error")

    })
});
//CREATE
router.get("/createBook",(req,res,next)=>{
    res.render("createBook")
});

router.post("/createBook",(req,res,next)=>{
   const {title, description,author,rating,_owner,...rest} = req.body

   Book.create({title,description,author,rating,_owner})
   .then(book=> {
        res.redirect('/book')
   })
   .catch(error=>{
    console.log("eerror",error)
    res.send("Error")

    })
});
//Read 
router.get("/updateBook/:id",(req,res,next)=>{
    const { id } = req.params
    Book.findById(id)
    .then(book=> {
        console.log("book",book)
        res.render("updateBook",{book})
    })
    .catch(error=>{
        console.log("eerror",error)
        res.send("Error")
    })
})
router.post("/updateBook/:id",(req,res,next)=>{
    //req.params = {id:21345465768876352cfds}
    const { id } = req.params
    const { title, description, author, rating, ...rest} =  req.body
         //findByIdAndUpdate(id,{body},{new:true})
         console.log("el rest",rest)
    Book.findByIdAndUpdate(id,{ title,description,author,rating},{new:true})
    .then(book=> {
       
        res.redirect('/book')
    })
    .catch(error=>{
        console.log("eerror",error)
        res.send("Error")
    })
})

//get Detail  one book

router.get("/getDetail/:id",(req,res)=>{
    const { id } = req.params
    Book.findById(id)
    //populate nos sirrive para saber que contine el  id 
    //.populate("_owner",) // traer todo lo del modelo de user

    //con dos parametros en el populate le decimos al valor _owner trae los elementos
    // y con el segundo valor solo le decimos que es lo que necesitamos
    .populate("_owner","username")
    //.populate("_owner _perro")  // dos populate
    .then(book=>{
        console.log("book",book)
        res.send("el libro")
    })
    .catch(error=>{
        console.log("eerror",error)
        res.send("Error")
    })
    
})


router.get("/deleteBook/:id",(req,res,next)=>{
    const { id } = req.params
    Book.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("/book")
    })
    .catch(error=>{
        console.log("error",error)
        res.redirect("/book")
    })
})







module.exports = router;
