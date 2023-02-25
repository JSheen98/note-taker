// Declarations
const router = require('express').Router()

const { notes, wildcard } = require('./htmlRoutes')
const apiRouter = require('./apiRoutes')

// Set up routes
router.use('/', notes)
router.use('/', wildcard)
// app.use('/apiRoutes', apiRouter)

module.exports = router