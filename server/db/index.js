const dbData = require('./db-data.js');

const data = dbData.dbData();
const questions = data[0];
const answers = data[1];

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'tptqanda',
  password: 'cdw@20TW'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql server!');
});

function promiseQueries(info) {
  info.map(x => {
    return 'INSERT INTO questions SET ?'
  })
}

async function loadData() {
  try {
    const questionQuery = await connection.query('INSERT INTO questions (id, productId, seller, date, author, question, flag) VALUES ?', [questions]);
    const answerQuery = await connection.query('INSERT INTO answers (date, answer, question_id, flag, helpful) VALUES ?', [answers]);
    console.log('done');
  } catch (err) {
    console.log(err);
  } finally {
    await connection.end();
  }
}

loadData();
