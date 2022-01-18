const fs = require("fs");

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const getNotes = function () {
    return "Your notes...";
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log("New note added.");
    } else {
        console.log("Note title taken!");
    }
};

const removeNote = function (title) {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });

    if (filteredNotes.length === notes.length - 1) {
        saveNotes(filteredNotes);
        console.log("The note has been deleted.");
    } else {
        console.log("Oops, the title does not exist.");
    }
};

module.exports = {
    getNotes,
    addNote,
    removeNote,
};
