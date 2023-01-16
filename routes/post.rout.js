const express = require("express")

const {postModel} = require("../models/post.model")

const postRouter = express.Router()

require("dotenv").config()

postRouter.post("/posts", async (req,res)=>{
    const payload=req.body
    const new_post=new postModel(payload)
    await new_post.save()
    res.send({"msg":"post Created"})
    })

postRouter.patch("/update/:id", async(req,res)=>{
    const payload = req.body
    const id = req.params.id
    try{
        await postModel.findByIdAndUpdate({"_id":id},payload)
        res.send("updated")
    }
    catch(err){
        res.send({"msg":"something wrong"})
    }
})

postRouter.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id
    try{
        await postModel.findByIdAndDelete({"_id":id})
        res.send("Deleted")
    }
    catch(err){
        res.send({"msg":"error"})
    }
})
    


module.exports={
    postRouter
}