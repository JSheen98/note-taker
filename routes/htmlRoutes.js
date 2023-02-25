// Declarations
const path = require('path')
const router = require('express').Router()

// // TODO: GET /notes request should return notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
})

// GET * (wildcard) request should return the index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router