DROP DATABASE IF EXISTS tptqanda;

CREATE DATABASE tptqanda;

USE tptqanda;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  productId INT NOT NULL,
  date DATE NOT NULL,
  author TEXT NOT NULL,
  question TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id INT NOT NULL AUTO_INCREMENT,
  date DATE NOT NULL,
  seller TEXT NOT NULL,
  answer TEXT NOT NULL,
  question INT NOT NULL REFERENCES questions(id),
  PRIMARY KEY (id)
);

