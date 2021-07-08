var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var routes = require('./routes/index.js');
var music = require('./routes/music.js');
var account = require('./routes/account.js');
require('dotenv').config();

var port = process.env.PORT || 3000;

var app = express();


// set view engine and static directory
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routing
app.use('/', routes);
app.use('/music', music);
app.use('/account', account);

app.listen(port);
console.log(`Listening on port ${port}`);


module.exports = app;
