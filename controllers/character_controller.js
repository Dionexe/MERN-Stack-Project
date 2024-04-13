const express = require('express');
const router = express.Router();
const Characters = require('../models/character')
import { Search } from './models/character.js';

//SHOW DETAIL ROUTE
router.get('/', (req,res) => {
    Characters.find().then((character) =>{
        res.json(character);
    });
});

//INDEX ROUTE 
router.get('/:name', (req, res) => {
    Characters.findOne
});

module.exports = router;
