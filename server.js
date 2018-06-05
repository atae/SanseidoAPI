const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

//check both json file sets
//check through all 34 until a hit, then break
//combine results and filter out by entry number to prevent dups

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log("Eyyyy on " + port );
});
