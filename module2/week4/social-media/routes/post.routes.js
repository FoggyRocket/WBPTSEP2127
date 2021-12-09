const router = require("express").Router();
const Post = require("../models/Post.model");

/* READ  */
//http://localhost:3000/post
router.get("/",(req,res)=>{
    Post.find()
    .then(posts=>{
        res.render("dashboard",{ posts })
    })
    .catch(error=>{
        console.log("error",error)
        res.send("Error")
    })
})

/* GET create  post */
router.get("/createPost", (req, res, next) => {
  res.render("createPost")
});

router.post("/createPost",(req,res,next)=>{
        //req.body = {key:"value",key2:"value"}
    const {content,_author} = req.body

    Post.create({content,_author})
    .then(newPost=>{
        res.redirect("/post")
    })
    .catch(error=>{
        console.log("error",error)
        res.send("Error")
    })

})


router.get("/detailPost/:id",(req,res,next)=>{
    Post.findById(req.params.id)
    .populate("_author", "name last_name email username")
    .populate({
        path:'_comments',
        populate:{
            path:'_author',
            model:'User'
        }
    })
    .then(post=>{
        console.log("post sin pop",post)
        res.render("detailPost",{post})
    })
    .catch(error=>{
        console.log("error",error)
        res.send("Error")
    })
})

module.exports = router;
