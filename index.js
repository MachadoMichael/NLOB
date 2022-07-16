const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

// app.use('/', express.static(path.join(__dirname, 'client/build')))


app.listen(PORT, ()=>{
    console.log('Welcome')
})