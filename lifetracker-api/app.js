const express = require("express")
const { NotFoundError} = require("./utils/errors")
const authRoutes = require("./routes/auth")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
app.use(cors())
const security = require("./middleware/security")



//parse incoming request bodies with JSON payload
app.use(express.json())

// log request info 
app.use(morgan("tiny"))

//for every request check if a token exists in auth header
  // if it does attach decoded user to res.locals
app.use(security.extractUserFromJwt)



app.use("/auth", authRoutes)

//test GET request
app.get("/",(req, res, next) => {
    res.status(200).json({"ping":"pong"})
})

//Handle 404 errors
app.use((req, res, next) => {
    next(new NotFoundError())
})

// generic error handler
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: { message, status },
    })
})

module.exports = app