const mongoose = require("mongoose")

const regSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})


const registerModel = mongoose.model("user", regSchema)

module.exports={
    registerModel
}