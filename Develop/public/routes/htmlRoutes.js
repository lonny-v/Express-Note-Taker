const path = require('path');

module.exports = (app) => {
    // returns notes.html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../notes.html'))
);
// returns index.html if anything besides 'notes' is searched for
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../index.html'))
);
}