const fs = require('fs');
const path = require('path');

function addNewNote (newNote, notesArray) {
    const note = newNote;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );

};


function deleteNote (note) {

};

module.exports = addNewNote;