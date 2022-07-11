const express = require("express")
const User = require("../models/user")
const router = express.Router()
// const user = require("../models/user")
const {createUserJwt} = require("../utils/tokens")
const security = require("../middleware/security")



router.get("/me", security.verifyAuthUser, async(req,res, next)=>{
    try{
    const {email} = res.locals.user
    console.log("res:", res.locals)
    const user = await User.fetchUserByEmail(email)
    const publicUser = await User.makePublicUser(user)
    console.log("pub user=", publicUser)
    return res.status(200).json({user: publicUser})
    }catch(err){
       
    next(err)
}})



router.post("/login",async(req,res,next)=>{
try{
    console.log("works")
    console.log("request",req.body)
    const user = await User.login(req.body) // take the users email and password and attempting to authenticate them
    const token = createUserJwt(user)
    return res.status(200).json({user, token})

}catch(err){
    console.log("error1 =", err)
next(err)
}

})
router.post("/register", async(req,res,next)=>{
    try{
        console.log("req body=",req.body)
        const user = await User.register({...req.body, isAdmin:false})
        const token = createUserJwt(user)
        return res.status(200).json({user, token})
        }catch(err){
        console.log("hello")
        console.log(err)
        next(err)
        }
})

module.exports = router

