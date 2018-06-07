const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log("Eyyyy on " + port );
});
