DROP DATABASE IF EXISTS tptqanda;

CREATE DATABASE tptqanda;

USE tptqanda;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  seller TEXT NOT NULL,
  question_date DATE NOT NULL,
  author TEXT NOT NULL,
  question TEXT NOT NULL,
  question_flag INT,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  answer_id INT NOT NULL AUTO_INCREMENT,
  answer_date DATE NOT NULL,
  answer TEXT NOT NULL,
  question_id INT NOT NULL,
  answer_flag INT,
  answer_helpful INT,
  PRIMARY KEY (answer_id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

