// Declarations
const notes = require('express').Router()
const wildcard = require('express').Router()
const path = require('path')

// // TODO: GET /notes request should return notes.html
notes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
})

// // TODO: GET * (wildcard) request should return the index.html
// wildcard.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

module.exports = { notes, wildcard }