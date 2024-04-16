// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI;
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

// Controllers & Routes
app.use('/characters', require('./controllers/character_controller'))

app.get('/', (req, res) => {
    res.send('Home')
});

app.get('*', (req, res) => {
    res.send('Error404')
})
