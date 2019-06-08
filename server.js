//Requires
const express = require('express');
const app = express();
const config = require('./config.json');
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
//Static Routes
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev')) // logging
//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));
const port = config.port;
//Run Server
app.listen(process.env.PORT || port, () => console.log(chalk.blue(`Listening intently on port ${port}`)));
