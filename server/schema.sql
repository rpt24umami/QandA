/* eslint-disable */
DROP DATABASE IF EXISTS tptqanda;

CREATE DATABASE tptqanda;

USE tptqanda;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  seller TEXT NOT NULL,
  date DATE NOT NULL,
  author TEXT NOT NULL,
  question TEXT NOT NULL,
  flag INT,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  answer TEXT NOT NULL,
  question_id INT NOT NULL,
  flag INT,
  helpful INT,
  PRIMARY KEY (id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

