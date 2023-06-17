const jwt = require("jsonwebtoken")

const authentication = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, 'styleSync',

    function(err,decoded){
        if(err){
            res.send(err)
        }
        if(decoded){
            next()
        }
    })


}



module.exports = { authentication }