const express = require('express');
const router = express.Router();
const Characters = require('../models/character')

//SHOW DETAIL ROUTE
router.get('/', (req,res) => {
    Characters.find().then((character) =>{
        res.json(character);
    });
});
