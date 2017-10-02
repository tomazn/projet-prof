const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const BodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

const port = 8080;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, function(err,database){

    if(err) return console.log(err);
    require('./app/routes')(app,database);
  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
    app.listen(port, function () {
        console.log("Running on port: " + port);
    });
})
