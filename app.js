const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes");

// add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        note.addNote(argv.title, argv.body);
    },
});

// remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        note.removeNote(argv.title);
    },
});

// list command
yargs.command({
    command: "list",
    describe: "List all the notes.",
    handler: () => {
        console.log("Listing the notes.");
    },
});

// read command
yargs.command({
    command: "read",
    describle: "Read a note",
    handler: () => {
        console.log("Reading a note.");
    },
});

yargs.parse();
