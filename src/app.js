const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const api = require('./routes/api')
const { goods } = require('./routes/auth/auth.controller')
const app = express()

app.use(cors({
    origin:true,
    credentials:true,
    optionsSuccessStatus:200
}))

app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(path.join(__dirname,"..","public")))
app.use('/sklad',api)

app.get('/1',async(req,res)=>{
   goods()
//    getProducts()
//    getAllProducts()
})

app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","index.html"))
})

module.exports = app
