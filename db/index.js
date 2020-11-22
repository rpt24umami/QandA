const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'tptqanda',
  password: 'cdw@20TW',
});

connection.connect((err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log('Connected to mysql server!');
});

const getQsAndAs = (productId, callback) => {
  connection.query(`select * from questions INNER JOIN answers ON questions.product_id =${productId} AND questions.id = answers.question_id;`, (err, res) => {
    if (err) throw err;
    callback(res);
  });
};

module.exports = { getQsAndAs };
