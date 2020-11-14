const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'tptqanda',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql server!');
});

