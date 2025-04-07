const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect to database
db.connect()

// Configure Handlebars as template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}))
app.set('view engine', 'hbs')
app.set('views', 'src/resources/views')

// Middleware
app.use(express.static('public')) // static files
app.use(morgan('combined')) // HTTP Logger
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(express.json()) // Parse JSON bodies
app.use(methodOverride('_method')) // Override HTTP methods

// Route handler
route(app)

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
