const router = require("express").Router();
const axios = require("axios")
/* GET home page */
router.get("/", (req, res, next) => {

    console.log("los query params",req.query)
    //Object.keys convierte toda las llaves de un objeto y lo agrupa en un arreglo []
    //[] le aplicamos un .length
    if(Object.keys(req.query).length){
        const {title} = req.query
        let perro = "score"
        axios.get(`https://api.jikan.moe/v3/search/manga?q=${title}&page=1&order_by=${perro}`)
        .then(responseAxios=>{
            console.log("respuesta de la peticion", responseAxios.data)
            res.render("results",{results: responseAxios.data.results});
        })
        .catch(error=>{
            console.log("error")
            res.render("search");
        })

    }else{
        res.render("search");
    }
  
});




module.exports = router;