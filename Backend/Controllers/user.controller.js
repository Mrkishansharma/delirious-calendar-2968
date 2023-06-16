const authorise=(role)=>{
    return(req,res,next)=>{
        if(removeEventListener.includes(req.cookies.role)){
            next();
        }else{
            res.status(403).json({ok:false,msg:"you are authorised"})
        }
    }


}

module.exports={
    authorise
}