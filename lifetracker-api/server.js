express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("colors")

app = express()



app.use(cors())

const PORT = process.env.PORT || 3001
//parse incoming request bodies with JSON payload
app.use(express.json())

// log request info 
app.use(morgan("tiny"))

app.use((err,req,res,next)=>{  // generic error handler
    const status = err.status || 500
    const message = err.message
  
    return res.status(status).json({
    error:{message,status}
    })
  })

  //setting up port 
app.listen(PORT, () => {
    console.log(`🧨 Server listening on port ` + PORT)
  })