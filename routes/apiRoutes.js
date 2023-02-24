const apiRoutes = require('express')


// TODO: GET /api/notes request should read db.json and return saved notes as JSON


// TODO: POST /api/notes request receive new note to save on request body, add it to db.json, then return new note to client. Need to give each new note a unique id (uuid npm package?)


// BONUS TODO: DELETE /api/notes/:id should receive a query param containing id of note to delete. In order ot delete a note, you need to read all notes from db.json, remove note with given id, and rewrite notes to db.json