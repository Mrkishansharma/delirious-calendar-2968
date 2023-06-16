const jwt=require("jsonwebtoken")

const authentication=(req,res,next)=>{
    jwt.verify(req.cookies.token, 'token',
    function(err,decoded){
        if(err){
            request.send(err)
        }
        if(decoded){
            next()
        }
    })
}



module.exports={authentication}