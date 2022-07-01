const {BadRequestError,UnauthorizedError} = require("../utils/errors")
const bcrypt = require("bcrypt")
const db = require("../db")
const{BCRYPT_WORK_FACTOR} = require("../config")
class User {
    static async makePublicUser(user){
        return {
            id:user.id,
            email:user.email,
            first_name:user.first_name,
            last_name:user.last_name,
            created_at:user.created_at
        }
        }
        static async login(credentials){
        
            const requiredFeilds = ["username","email", "password", "first_name", "last_name","created_at"]
            requiredFeilds.forEach(field=>{
                if(!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body`)
                }
            })
        
            const user = await User.fetchUserByEmail(credentials.email)
        
            if(user){
                const isValid = await bcrypt.compare(credentials.password,user.password)
                if(isValid){
                    return User.makePublicUser(user)
                }
            }
            
        throw new UnauthorizedError("Invalid credentials")
        }
        
        static async register(credentials){
        console.log("cred=", credentials)
        // user should submit email, password
        // if any of these feilds are missing, throw an error
        const requiredFeilds = ["username","email", "password", "first_name", "last_name","created_at"]
        requiredFeilds.forEach(field=>{
            if(!credentials.hasOwnProperty(field)){
            throw new BadRequestError(`Missing ${field} in request body`)
            }
        })
        
        if(credentials.email.indexOf("@")<=0){
            throw new BadRequestError("Invalid email")
        }
        console.log("check",credentials)
        console.log("username=", credentials.username)
        // Make sure user doesnt already exist in the system 
        // if one does, throw an error
        console.log("em",credentials.email)
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if(existingUser){
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }
    

        const existingUsername = await User.fetchUserByUsername(credentials.username)
        console.log("exist=",existingUsername)
        if(existingUsername){
            throw new BadRequestError(`Duplicate username: ${credentials.username}`)
        }
        
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        //take the user's password, and hash it 
        // take the user's email and lowercase it 
        
        const lowercasedEmail = credentials.email.toLowerCase()
        //create a new user in the database with the email and password
        
        
        const result = await db.query(
        `INSERT INTO users(
            email,
            username,
            password,
            first_name,
            last_name,
            created_at
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, email, username, first_name, last_name, created_at;
        `,[lowercasedEmail,credentials.username, hashedPassword, credentials.first_name, credentials.last_name,credentials.created_at])
        
        //return user
        console.log("result =", result)
        const user = result.rows[0]
        console.log("user=", user)
        return User.makePublicUser(user)
        }
        static async fetchUserByEmail(email){
            if(!email){
                throw new BadRequestError("No email provided")
            }
        
            const query = `SELECT * FROM users WHERE email = $1`
        
            const result = await db.query(query, [email.toLowerCase()])
        
            const user = result.rows[0]
        
            return user
        
        }

        static async fetchUserByUsername(username){
            if(!username){
                throw new BadRequestError("No username provided")
            }
        
            const query = `SELECT * FROM users WHERE username = $1`
        
            const result = await db.query(query, [username.toLowerCase()])
        
            const userName = result.rows[0]
        
            return userName
        
        }
        }

module.exports = User
