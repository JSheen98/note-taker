// Declarations
const router = require('express').Router()

const apiRouter = require('./apiRoutes')
const htmlRouter = require('./htmlRoutes')

// Set up routes
router.use('/', htmlRouter)
router.use('/', apiRouter)

module.exports = router