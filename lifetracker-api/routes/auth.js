const express = require("express")
const User = require("../models/user")
const router = express.Router()
// const user = require("../models/user")



router.get("/me",(req,res)=>{
    return res.status(200).json({ping:"pong"})

})



module.exports = router

