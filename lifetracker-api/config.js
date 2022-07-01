require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT): 3001
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "test"
const IS_TESTING = process.env.NODE_ENV == "test" ? true : false

require("dotenv").config()
require("colors")


function getDatabaseUri(){
const dbUser = process.env.DATABASE_USER || "postgres"
const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS): "postgres" // ask about password
const dbHost = process.env.DATABASE_HOST || "localhost"
const dbPort = process.env.DATABASE_PORT || 5432

if(IS_TESTING){
const dbName = process.env.DATABASE_NAME || "lifetracker"
}else{
dbName = process.env.DATABASE_TEST_NAME || "lifetracker_test"
}

// if the DATABASE_URL environment variable exists, use that
//else create the dbconnection string ourselves
return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}







const BCRYPT_WORK_FACTOR = 13 
console.log("Vaccine Hub Config:".red)
console.log("PORT:".blue,PORT)
console.log("Database URI:".blue, getDatabaseUri())
console.log("------".yellow)

module.exports = {
PORT,
getDatabaseUri,
BCRYPT_WORK_FACTOR,
IS_TESTING

}