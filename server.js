const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// require('./Develop/public/routes/apiRoutes.js')(app);
require('./Develop/public/routes/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});