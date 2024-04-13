import validator from "validator"
import chalk from "chalk"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import notes from "./notes.js"

// const message = getNotes();
// console.log(message);

// console.log(validator.isURL("https://sourav.com"));
// console.log(chalk.inverse.bold.red.underline("Success!"));

// console.log(process.argv);

// yargs(hideBin(process.argv)).version("1.1.0").parse();

yargs(hideBin(process.argv))
    .command({
        command : "add",
        describe : "Add a new note",
        builder : {
            title : {
                describe : "Note title",
                type : "string",
                demandOption : true
            },
            body : {
                describe : "Note body",
                type : "string",
                demandOption : true
            },
        },
        handler (argv)
        {
            notes.addNotes(argv.title, argv.body);
        }
        // handler : function(argv)
        // {
        //     notes.addNotes(argv.title, argv.body);
        // }
    })
    .command({
        command : "remove",
        describe : "Remove a note",
        builder : {
            title : {
                describe : "Note title",
                demandOption : true,
                type : "string"
            },
            body : {
                describe : "Note body",
                demandOption : false,
                type : "string"
            }
        },
        handler (argv)
        {
            notes.removeNotes(argv.title);
        }
        // handler : function(argv)
        // {
        //     notes.removeNotes(argv.title);
        // }
    })
    .command({
        command : "curl",
        describe : "fetch the contents of the url",
        handler (argv)
        {
            console.log(argv);
        }
        // handler : function(argv)
        // {
        //     console.log(argv);
        // }
    })
    .command({
        command : "list",
        describe : "List your notes",
        handler ()
        {
            console.log("Listing out all notes!");
            notes.listNotes();
        }
        // handler : function()
        // {
        //     console.log("Listing out all notes!");
        // }
    })
    .command({
        command : "read",
        describe : "Read a note",
        builder : {
            title : {
                describe : "Note Title",
                demandOption : true,
                type : "string"
            },
            body : {
                describe : "Note body",
                demandOption : false,
                type : "string"
            }
        },
        handler (argv)
        {
            console.log("Reading a note!");
            notes.readNotes(argv.title);
        }
        // handler : function()
        // {
        //     console.log("Reading a note!");
        // }
    }).parse();

// console.log(yargs(hideBin(process.argv)).argv);