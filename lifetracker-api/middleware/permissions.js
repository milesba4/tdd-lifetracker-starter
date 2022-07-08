const Nutrition = require("../models/nutrition")
const User = require("../models/user")
const { BadRequestError, ForbiddenError } = require("../utils/errors")


const  authedUserOwnsNutrition = async(req,res,next)=>{
    try {
        const { email } = res.locals.user
        const { id } = req.params
        const user = await User.fetchUserByEmail(email)
        const nutrition = await Nutrition.fetchNutritionById(id)
        
        if (nutrition.user_id !== user.id){
            throw new ForbiddenError("Forbiddem")
          }
          res.locals.nutrition = nutrition
          return next()
      
    }catch(err){
        return next(err)
    } 
}


module.exports = {
    authedUserOwnsNutrition,
  }