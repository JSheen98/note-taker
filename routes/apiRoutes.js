const router = require('express').Router()
const uuid = require('uuid')
const fs = require('fs')

// GET request: Reads db.json file
router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => err ? console.error(err) : res.json(JSON.parse(data)))
})

// POST request: Creates new note and adds it to new array, new array is written onto the file
router.post('/notes', (req, res) => {
    const { title, text } = req.body

    // New note object
    const newNote = {
        id: uuid.v4(),
        title,
        text
    }

    // Reads the file, parses the data (if no error), pushes the new note object to the parsedData array, then writes it to the file. Then redirects user to the same page
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err
        const parsedData = JSON.parse(data)
        parsedData.push(newNote)
        fs.writeFile('db/db.json', JSON.stringify(parsedData, null, 4), (err) => err ? console.error(err) : res.redirect('/notes'))
    })
})

// DELETE request: Takes a given id, filters the note with that id from the parsed array, then puts the new filtered array over the file
router.delete('/notes/:id', (req, res) => {
    // Reads the file, throws error if needed, otherwise puts parsed data in a variable, filters that variable  
    // and puts it into a new array (noteToDelete), which is filtered through for the given id then posts the 
    // new array in the file, and redirects the user back to the same page
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err
        const parsedData = JSON.parse(data)
        const id = req.params.id
        const noteToDelete = parsedData.filter(note => note.id != id)
        fs.writeFile('db/db.json', JSON.stringify(noteToDelete, null, 4), (err) => err ? console.error(err) : res.redirect('/notes'))
    })
})


module.exports = router