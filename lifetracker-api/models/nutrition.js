const db = require("../db")
const {BadRequestError,UnauthorizedError, NotFoundError} = require("../utils/errors")




class Nutrition {

    static async createNutrition({nutrition, user}){
        const requiredFeilds = ["name","category", "calories", "image_url"]
                    requiredFeilds.forEach(field=>{
            if(!credentials.hasOwnProperty(field)){
            throw new BadRequestError(`Missing ${field} in request body`)
            }




            const result = await db.query(
                `INSERT INTO nutrition(
                    name,
                    category,
                    calories,
                    quantity,
                    image_url,
                    user_id
                    )
                    VALUES ($1, $2, $3::Integer, $4::Integer, $5, (SELECT id FROM users WHERE email = $6))
                    RETURNING id, name, category, calories,quantity, image_url, user_id, created_at;
                `,[nutrition.name, nutrition.category, nutrition.calories, nutrition.quantity, nutrition.image_url, user.email])

                return result.rows[0]
        })
}

static async fetchNutritionById({id}){

if(!id){
throw new NotFoundError(`id not found`)
}else{

    const result = await db.query(
    `SELECT * FROM nutrition
    WHERE id = $1;`,[id]
    )
    return result.rows[0]
}

}

static async listNutritionForUser(user) {

    if (!user) {
        throw new BadRequestError(`No user provided`)
    }

    const results = await db.query(`SELECT * FROM nutrition WHERE user_id = $1`, [user.user_id])

    return results.rows
}

}

module.exports = Nutrition