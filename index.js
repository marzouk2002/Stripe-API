require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.STR_PV)
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

// handlebars middlewar
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// static files
app.use(express.static(`${__dirname}/public`))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Server listennig on port: " + port)
})