// const authorise=(userType)=>{
//     return(req,res,next)=>{
//         if(removeEventListener.includes(req.cookies.role)){
//             next();
//         }else{
//             res.status(403).json({ok:false,msg:"you are authorised"})
//         }
//     }


// }

// module.exports={
//     authorise
// }


// Google Authentication code

const googleAuthentication = async (req, res) => {

    // Successful authentication, redirect home.

    // console.log(req.user)

    const user = req.user

    // let token = jwt.sign({ UserID: user._id}, process.env.SecretKey, { expiresIn: "24h" })

    // const frontendURL = `https://qr-insight-craft.netlify.app/`

    const frontendURL = "http://127.0.0.1:5500/Frontend/index.html"

    res.send(`
                <a href="${frontendURL}?userID=${user._id}" id="myid" style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #222222; margin: 0; padding: 0; overflow: scroll;">
                    <img style="width:100%;" src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" alt="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif">
                </a>
                <script>
                    let a = document.getElementById('myid')
                    setTimeout(()=>{
                        a.click()
                    },2000)
                    console.log(a)
                </script>
        `)

}


module.exports = {
    googleAuthentication
}