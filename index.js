require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./database/dbConnection')

const menuServer = express()

menuServer.use(cors())
menuServer.use(express.json())
menuServer.use(router)

const PORT = 3000 || process.env.PORT

menuServer.listen(PORT,()=>{
    console.log(`menuServer started at port ${PORT} and waiting for client request!!!`);
})

menuServer.get('/',(req,res)=>{
    res.status(200).send(`menuServer started at port and waiting for client request!!`)
})