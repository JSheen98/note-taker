// Declarations
const express = require('express')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// Starts server listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})