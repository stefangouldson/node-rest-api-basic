const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

// Prevent CORS error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // Allow access to all
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE') // Allow access to methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') // Allow access to methods
    next();
})
app.use('/feed', feedRoutes);

app.listen(8080);