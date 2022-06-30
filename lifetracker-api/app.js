const express = require("express")
const app = express()
const morgan = require("morgan")
const {BadRequestError, NotFoundError} = require("./utils/errors")
// const storeRouter = require("./routes/store")
// app.use("/store", storeRouter);

app.use(morgan("tiny"))

app.use((req,res,next)=>{
    return next(new NotFoundError())
    })
    
    app.use((err,req,res,next)=>{  // generic error handler
      const status = err.status || 500
      const message = err.message
    
      return res.status(status).json({
      error:{message,status}
      })
    })
    
app.use(express.json())



app.get('/', (req, res) => {
    res.status(200).send({ping:"pong"})
  })



  module.exports=app // exporting app as default