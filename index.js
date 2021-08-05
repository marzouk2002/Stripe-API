require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.STR_PV)
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Server listennig on port: " + port)
})