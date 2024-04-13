import fs from "fs"
import chalk from "chalk"

const getNotes = () =>
{
    return "Your notes...";
}
// const getNotes = function ()
// {
//     return "Your notes...";
// }

// const removeNotes = function (titleVal)
const removeNotes = (titleVal) =>
{
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) =>
    {
        return (note.title !== titleVal);
    });
    
    // const notesToKeep = notes.filter(function (note)
    // {
    //     return (note.title !== titleVal);
    // });

    if (notes.length > notesToKeep.length)
    {
        saveNotes(notesToKeep);
        console.log
        (
            chalk.red.inverse("Removing The Note : " + titleVal)
        );
    }
    else
    {
        console.log
        (
            chalk.green.inverse("No Note Found!")
        );
    }
}

// const addNotes = function (titleVal, bodyVal)
const addNotes = (titleVal, bodyVal) =>
{
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) =>
    // {
    //     return (note.title === titleVal);
    // });

    // const duplicateNotes = notes.filter(function (note)
    // {
    //     return (note.title === titleVal);
    // });

    const duplicateNote = notes.find((eachNote) =>
    {
        return (eachNote.title === titleVal);
    });

    if (duplicateNote === undefined)
    {
        notes.push({
            title : titleVal,
            body : bodyVal
        });

        saveNotes(notes);

        console.log
        (
            chalk.green.inverse("New Note Added : " + titleVal)
        );
    }
    else
    {
        console.log
        (
            chalk.red.inverse("Note Title Taken!")
        );
    }
}

// const readNotes = function ()
const readNotes = (titleVal) =>
{
    const notes = loadNotes();

    const noteInfo = notes.find((eachNote) =>
    {
        return (eachNote.title === titleVal);
    });

    if (noteInfo !== undefined)
    {
        console.log
        (
            "Title : " + chalk.green.bold(noteInfo.title)
        );
        console.log
        (
            "Body : " + chalk.green.bold(noteInfo.body)
        );
    }
    else
    {
        console.log
        (
            chalk.red.inverse("Note Not Found!")
        );
    }
}

// const listNotes = function ()
const listNotes = () =>
{
    const notes = loadNotes();

    if (notes.length > 0)
    {
        console.log
        (
            chalk.green.inverse("Your Notes!")
        );

        // notes.forEach(function(eachNote)
        notes.forEach((eachNote) =>
        {
            console.log
            (
                "Title : " + chalk.green.bold(eachNote.title)
            );
            console.log
            (
                "Body : " + chalk.green.bold(eachNote.body)
            );
        });
    }
}

// const saveNotes = function (notes)
const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

//const loadNotes = function ()
const loadNotes = () =>
{
    try
    {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e)
    {
        return [];
    }
}

export default 
    {
        getNotes : getNotes,
        addNotes : addNotes,
        removeNotes : removeNotes,
        listNotes : listNotes,
        readNotes : readNotes
    };