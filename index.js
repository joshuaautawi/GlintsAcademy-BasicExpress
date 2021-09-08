
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const router = require('./routers/index')

dotenv.config()
const port = process.env.PORT || 3002
const env = process.env.NODE_ENV || 'development'

app.use('',router)




app.listen(port,()=>{console.log(`Server is started at ${Date()} in ${env} and listening on port ${port}`)})
