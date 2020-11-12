const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'tptqanda',
});

con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connection established');
});

const createQuestionsTable = `CREATE TABLE questions (
  id int(11) NOT NULL AUTO_INCREMENT,
  productId int(11) NOT NULL,
  date DATE NOT NULL,
  author TEXT NOT NULL,
  question TEXT NOT NULL,
  PRIMARY KEY (id)
);`;

const createAnswersTable = `CREATE TABLE answers (
  id int(11) NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  seller TEXT NOT NULL,
  answer TEXT NOT NULL,
  question int(11) UNSIGNED NOT NULL REFERENCES questions(id),
  PRIMARY KEY (id)
);`;

con.query(createAnswersTable, (err) => {
  if (err) throw err;
});

con.query(createQuestionsTable, (err) => {
  if (err) throw err;
});
