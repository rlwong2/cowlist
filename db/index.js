const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cowlist'
});

connection.connect();

module.exports = connection;