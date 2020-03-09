const axios = require('axios');
const express = require('express');
const request = require('request');
const promise = require('bluebird');
const bodyParser = require('body-parser');
const db = require('./db');
let app = express();

app.use(express.static(__dirname + './client/dist'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-parse-application-id, x-parse-rest-api-key');
  next();
})

app.get('/api/cows', (req, res) => {
  console.log('Running: GET COWS (server.js)');
  let queryStr = 'SELECT * FROM cows';
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log('Error: GET COWS (server.js)')
      res.end('No cows, go add some!')
    } else {
      console.log('Success: GET COWS (server.js)')
      // res.send('Sending all the cows!')
      console.log(results);
      res.json(results);
    }
  })
});

app.post('/api/cows', (req, res) => {
  console.log('Running: POST COW (server.js)');
  console.log(`${req.body.name}, ${req.body.description}`);
  let queryStr = `INSERT INTO cows (name, description) VALUES ('${req.body.name}', '${req.body.description}')`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log('Error: POST COW (server.js)');
      console.log(err);
      res.end('Unable to post to database!');
    } else {
      console.log('Success: POST COW (server.js)');
      console.log(results);
      res.end(`Success! ${req.body.name} has been added to the database.  Updating cattle...`);
    }
  })

});

let port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Cows are listening on ${port}`);
});

module.exports.app = app;