const express = require('express')
const hbs = require('express-handlebars')

const app = express()

// Middleware
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send("Server is working")
})



module.exports = app
