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
  let query = 'SELECT * FROM cows';
  db.query(query, (err, results) => {
    if (err) {
      res.end('No cows, go add some!')
    } else {
      res.send('Found cows!')
      console.log(results);
      res.end();
    }


  })
});

app.post('/api/cows', (req, res) => {
  console.log('Running: POST COW (server.js)');
  console.log(req.body);
});

let port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Cows are listening on ${port}`);
});

module.exports.app = app;