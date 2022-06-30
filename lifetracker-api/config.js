require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT): 3001
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "test"
const IS_TESTING = process.env.NODE_ENV == "test" ? true : false








module.exports = {
    PORT, 
    IS_TESTING
}