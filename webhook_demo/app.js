const express = require('express');
const routes = require('./routes');

const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.use('/api', routes);

module.exports = app;