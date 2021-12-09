const router = require("express").Router();
const Comment = require("../models/Comment.model");
const Post =  require("../models/Post.model");

/* GET create  post */
router.get("/createComment/:id", (req, res, next) => {
  res.render("createComment",{id:req.params.id})
});

router.post("/createComment/:id", async (req,res,next)=>{
    try{
        const {_author, content, date} = req.body;
        const {id} = req.params; //este id le pertenece al post!
                //comment ={_id:"asdasdasd123123",_v:0,_author:"2123",content:"Muerte a Dylan"}            
        const comment = await Comment.create({_author, content, date}) // por si voy a ocupar el nuevo documento
                                                //findByIdAndUpdate(_id,{content:"bla bla"},{new:true})
        const newPost =  await Post.findByIdAndUpdate(id,{ $push:{_comments:comment._id } })
        //await Comment.create({_author, content, date}) // solo queremos esperar a que se cree o termine una accion
        res.redirect("/post")

    }catch(error){
        console.log("error",error)
        res.send("Error")
    }
})
/**
 Comment.create({_author, content, date})
 .then(comment=>{
     Post.findByIdAndUpdate(id,{ $push:{_comments:comment._id } })
        .then(newPost=>{... .then(data=>{}).catch(erro=>console.log())})
        .catch
 })
 .cathc()

 */

module.exports = router;
