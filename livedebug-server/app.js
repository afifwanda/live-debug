const express = require('express');

const app = express();

const routes = require('./routes/index');
const errorHandler = require('./middlewares/error-handler');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(errorHandler);
app.use('/', routes);

module.exports = app
