const router = require('express').Router();
var uniqid = require('uniqid');
const addNewNote = require('../../lib/notes');
const { notes } = require('../../db/notes.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // Notes Database
    let notesArray = notes;

    // New Note ID
    req.body.id = `${Math.floor(Math.random() * 100)}-${uniqid.time()}`;

    const newNote = req.body;

    addNewNote(newNote, notesArray);

    res.json({
        message: 'success',
        note_Added: newNote
    })
});


module.exports = router;