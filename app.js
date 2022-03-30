require('dotenv').config() //DOTENV
const express = require('express')// Express
const app = express()// Express
const connectDB = require('./db/connect') //Database

const notFoundMiddleware = require('./Middleware/not-found')// Middleware error
const errorMiddleware = require('./Middleware/error-handler')// Middleware error

//Middleware 
app.use(express.json())

// rootes
app.get('/', (req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products route</a>')
})

//errors
app.use(notFoundMiddleware)
app.use(errorMiddleware)

// Connect server & DB
const port = process.env.PORT

const start = async()=>{
    try {   
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server y DB corriendo en puerto ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
