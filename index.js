const express = require("express")
const app = express()
var cors = require("cors")
const { connection } = require("./db");
const { registerRouter } = require("./routes/register.routes");
const { authentication } = require("./middleware/authentication");
const { postRouter } = require("./routes/post.rout");
require('dotenv').config();

app.use(express.json())

app.get("/", (req,res)=>{{
    res.send("ev 4")
}})
app.use("/users",registerRouter)
app.use(authentication)
app.use("/post", postRouter)


app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(error)
    }
})