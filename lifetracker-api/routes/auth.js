const express = require("express")
const User = require("../models/user")
const router = express.Router()
// const user = require("../models/user")



router.get("/me",(req,res)=>{
    return res.status(200).json({ping:"pong"})

})



router.post("/login",async(req,res,next)=>{
try{
    console.log("works")
    console.log("request",req.body)
    const user = await User.login(req.body) // take the users email and password and attempting to authenticate them
    return res.status(200).json({user})

}catch(err){
    console.log("yo")
next(err)
}

})
module.exports = router

