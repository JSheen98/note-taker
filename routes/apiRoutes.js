const apiNotes = require('express').Router()
const db = require('../db/db.json')
const uuid = require('uuid')
const fs = require('fs')
const dbParsed = JSON.parse(fs.readFileSync('./db/db.json'))

// Reads db file
apiNotes.get('/notes/', (req, res) => {
    res.json(db)
})

// Post request for new notes
apiNotes.post('/notes/:id', (req, res) => {
    const { title, text } = req.body

    // New note object
    const newNote = {
        id: uuid.v4(),
        title,
        text
    }

    // Take the parsed array, and push the new note onto it
    dbParsed.push(newNote)

    // Writes the the file over with the new array (with the new note)
    fs.writeFile('./db/db.json', JSON.stringify(dbParsed, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData Written`))
})

// DELETE /api/notes/:id should receive a query param containing id of note to delete. In order to delete a note, you need to read all notes from db.json, remove note with given id, and rewrite notes to db.json
apiNotes.delete('/notes/:id', (req, res) => {
    // Crate id variable to use in noteToDelete variable
    const id = req.params.id
    // Filters through the array and removes anything that doesn't equal the id given, puts the result in the noteToDelete array
    const noteToDelete = dbParsed.filter(note => note.id !== id)

    // Writes the file over with the new array (with the removed note object)
    fs.writeFile('./db/db.json', JSON.stringify(noteToDelete, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData Deleted`))
})



module.exports = apiNotes