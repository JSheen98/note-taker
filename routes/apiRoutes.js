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

    const newNote = {
        id: uuid.v4(),
        title,
        text
    }

    // Reads the file, parses the data, pushes it into the new array, then stringifies the data back
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            const parsedData = JSON.parse(data)
            parsedData.push(newNote)
            fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
                err ? console.error(err) : console.info(`\nData written`))
        }
    })
})

// BONUS TODO: DELETE /api/notes/:id should receive a query param containing id of note to delete. In order to delete a note, you need to read all notes from db.json, remove note with given id, and rewrite notes to db.json
apiNotes.delete('/notes/:id', (req, res) => {
    // const dbParsed = JSON.parse(fs.readFile('./db/db.json')) 
    const id = req.params.id * 1
    const noteToDelete = dbParsed.find(el => el.id === id)
    const index = dbParsed.indexOf(noteToDelete)

    dbParsed.splice(index, 1)

    fs.writeFile('./db/db.json', JSON.stringify(dbParsed, null, 4), (err) => 
        res.status(204).json({
            status: "success",
            data: {
                note: null
            }
        })
    )
})



module.exports = apiNotes