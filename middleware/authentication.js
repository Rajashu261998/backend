const jwt=require("jsonwebtoken");
require("dotenv").config();

//middleware
const authentication=(req,res,next)=>{
    if(!req.headers.auth)
    {
        return res.send("Connect");
    }

    const token=req.headers.outh.split(" ")[1]
    jwt.verify(token,process.env.JWT_SECRET,function(errorr,decoded){
       
        if(errorr)
        {
            res.send("login again please")
        }
        else
        {
            req.body.userId=decoded.userId;
            next();
        }
    })
}


module.exports={
    authentication
}