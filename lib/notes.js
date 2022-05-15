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

// Delete Note Function

// function deleteNote (noteID, notesArray) {
//     let newNotesArray = notesArray.filter(note =>
//         note.id != noteID
//     )

//     fs.writeFileSync(
//         path.join(__dirname, '../db/notes.json'),
//         JSON.stringify({notes: newNotesArray}, null, 2)
//     );

//     return newNotesArray;
// };

module.exports = addNewNote;