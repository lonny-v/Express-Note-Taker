const fs = require('fs');
const router = require('express').Router();
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// API routes
// calls notes json data
router.get("/notes", (req, res) => {
    readFileAsync("./db/db.json", "utf8").then(function(data){
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    });
});

// allows user to add new note
router.post("/notes", (req, res) => {
    const note = req.body;
    readFileAsync("./db/db.json", "utf8").then(function(data){
        const notes = [].concat(JSON.parse(data))
        // give note unique id
        note.id = notes.length + 1;
        notes.push(note);
        return notes
    })
    // rewrites notes array with new data
    .then(function(notes){
        writeFileAsync("./db/db.json", JSON.stringify(notes))
        res.json(notes);
        console.log("Note saved!")
    })
});

// finds note with id from /notes request and deletes it
router.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    readFileAsync("./db/db.json", "utf8").then(function(data){
        const notes = [].concat(JSON.parse(data));
        const newNotesArray = [];
        for (let i = 0; i < notes.length; i++ ){
            if (id !== notes[i].id){
                newNotesArray.push(notes[i])
            }
        }
        return newNotesArray;
    })
    // rewrites array without deleted note
    .then(function(notes){
        writeFileAsync("./db/db.json", JSON.stringify(notes))
        res.json(notes);
        console.log("Note saved!")
    });
})


module.exports = router;