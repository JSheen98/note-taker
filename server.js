// Declarations
const express = require('express')
const path = require('path')
const routes = require('./routes/router')

const PORT = process.env.PORT || 3001

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

// Get request for /
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Starts server listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})