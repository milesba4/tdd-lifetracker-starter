const express = require("express")
const router = express.Router()
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")

router.get("/", async function (req, res, next) {
    console.log("yo")
    try{ 
        const {user} = res.locals
        console.log("res =", res)
        const foods = await Nutrition.listNutritionForUser(user)
        console.log("foods:",foods)
        return res.status(200).json({ foods })
    } catch (error) {
        console.log("yo")
        next(error)
    }
})

router.post("/", security.verifyAuthUser, async function (req, res, next) {
    console.log("yoo")
    try {
        console.log("yo1")
        // console.log(req.body)
        // console.log("resl=", res.locals)
        // console.log("reslu=", res.locals.user)
        const {user} = res.locals
        console.log("user.=", user)
        console.log("reqbod", req.body)
        const food = await Nutrition.createNutrition({user, nutrition:req.body})
        return res.status(200).json({food })
    } catch (error) {
        console.log("yo2")
        next(error)
    }
})

router.get("/:id", security.verifyAuthUser, permissions.authedUserOwnsNutrition, async function (req, res, next) {
   
    try {
        const id = Number(req.params.id)
        console.log("id=:",id)
        const food = await Nutrition.fetchNutritionById(id)
        console.log("food:",food)
        return res.status(201).json({ food })
    } catch (error) {
        console.log("id=:",id)
        next(error)
    }
})


module.exports = router