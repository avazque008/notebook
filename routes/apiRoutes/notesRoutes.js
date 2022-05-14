const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes');
const notes = require('../../db/db.json')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const notesArray = notes;
    req.body.id = notes.length.toString();

    createNewNote(req.body, notesArray);

    res.json({
        message: 'success',
        newNoteAdded: req.body
    })
});


module.exports = router;