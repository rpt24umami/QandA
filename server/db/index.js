const mysql = require('mysql');
const dbData = require('./db-data.js');

const data = dbData.dbData();
const questions = data[0];
const answers = data[1];

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'tptqanda',
  password: 'cdw@20TW',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql server!');
});

async function loadData() {
  try {
    const questionQuery = await connection.query('INSERT INTO questions (id, product_id, seller, question_date, author, question, question_flag) VALUES ?', [questions]);
    const answerQuery = await connection.query('INSERT INTO answers (answer_date, answer, question_id, answer_flag, answer_helpful) VALUES ?', [answers]);
    console.log('done');
  } catch (err) {
    console.log(err);
  } finally {
    await connection.end();
  };
};

loadData();
