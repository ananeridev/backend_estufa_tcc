require('dotenv/config');

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

require('./database');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes);

module.exports = app;
