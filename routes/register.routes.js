const express = require("express")
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")

const {registerModel} = require("../models/regstr.model")

const registerRouter = express.Router()

registerRouter.post("/register",async (req,res)=>{
    const {name,email,gender,password}=req.body
    try{
    bcrypt.hash(password, 8, async (err, hash)=>{
    const user=new registerModel({name,email,password:hash,gender})
    await user.save()
    res.send("Registered")
    });
    }catch(err){
    res.send("Error in registering the user")
    console.log(err)
    }
    })

    registerRouter.post("/login",async (req,res)=>{
        const {email,password}=req.body
        try{
            const user=await registerModel.find({email})
            if(user.length>0){
            bcrypt.compare(password, user[0].password, function(err, result) {
            if(result){
            const token = jwt.sign({ course: 'backend' }, 'masai');
            res.send({"msg":"Login Successfull","token":token})
            } else {res.send("Wrong Credntials")}
            });
            } else {
            res.send("Wrong Credntials")
            }
            } catch(err){
            res.send("Something went wrong")
            console.log(err)
            }
        })
            
        module.exports={
            registerRouter
        }