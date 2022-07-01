const express = require("express")
const { NotFoundError} = require("./utils/errors")
const authRoutes = require("./routes/auth")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
app.use(cors())

app.use(morgan("tiny"))
app.use(express.json())

    // app.use((req,res,next)=>{
    //     return next(new NotFoundError())
    //     })
    
    app.use((err,req,res,next)=>{  // generic error handler
      const status = err.status || 500
      const message = err.message
    
      return res.status(status).json({
      error:{message,status}
      })
    })


app.use("/auth", authRoutes)



app.get('/', (req, res) => {
    res.status(200).send({ping:"pong"})
  })


  // afterAll(() => {
  //   await db.end()
  // })
  module.exports=app // exporting app as default