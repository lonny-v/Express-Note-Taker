const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// keeps index.html and CSS static
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// starts server
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));