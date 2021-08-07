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

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/charge', (req, res) => {
    const { stripeEmail, stripeToken } = req.body
    const amount = 2500

    stripe.customers.create({
        email: stripeEmail,
        source: stripeToken
    })
    .then(customer => {
        stripe.charges.create({
            amount,
            description: 'Purchase a EBook',
            currency: 'usd',
            customer: customer.id
        })
    })
    .then(charge => res.render('success'))

})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Server listennig on port: " + port)
})