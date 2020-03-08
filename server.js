const axios = require('axios');
const express = require('express');
const request = require('request');
const promise = require('bluebird');
const bodyParser = require('body-parser');
const db = require('./db');
let app = express();

app.use(express.static(__dirname + './client/dist'));
app.use(bodyParser.json());

app.get('/api/cows', (req, res) => {
  console.log('Running: GET COWS (server.js)');
  let query = 'SELECT * FROM cows';

});

app.post('/api/cows', (req, res) => {
  console.log(req.body);
});

let port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Cows are listening on ${port}`);
});

module.exports.app = app;