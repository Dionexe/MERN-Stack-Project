// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI;