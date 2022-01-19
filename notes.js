const fs = require("fs");
const chalk = require("chalk");

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

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.green.bold("New note added."));
    } else {
        console.log(chalk.red.bold("Note title taken!"));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length - 1) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold("Note removed!"));
    } else {
        console.log(chalk.red.bold("No note found!"));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes..."));
    notes.forEach((note) => {
        console.log(`Title : ${note.title}`);
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.green(`Title : ${note.title}`));
        console.log(`Body : ${note.body}`);
    } else {
        console.log(chalk.red.bold("Note does not exists!"));
    }
};

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote,
};
