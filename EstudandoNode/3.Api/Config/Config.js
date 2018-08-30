var express = require('express');
var bodyParser = require('body-parser');

var urlPost = bodyParser.urlencoded({ extended: true });

var app = express();
app.use(bodyParser.json());

// conecta no banco de dados
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/academico', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

require('./Routes').Routers(app);

app.listen(3000);
