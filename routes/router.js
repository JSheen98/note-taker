// Declarations
const router = require('express').Router()

const apiRouter = require('./apiRoutes')
const htmlRouter = require('./htmlRoutes')

// Set up routes
router.use('/api', apiRouter)
router.use('/', htmlRouter)


module.exports = router