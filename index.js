// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const MONGO_URI = process.env.MONGO_URI;

//CONFIG
const PORT = process.env.PORT;


//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

//MIDDLEWARE

//ROUTES
app.get('/', (req, res) => {
    res.send('WORK PLEASE')
});