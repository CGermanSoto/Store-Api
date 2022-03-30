require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('En construcción')
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Conectado en puerto ${PORT}`)
})