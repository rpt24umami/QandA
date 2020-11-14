
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3004;
const getQuestions = require('./db/helper/getQandA');

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
};

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/questions', cors(corsOptions), (req, res) => {
  getQuestions.getQuestions(1);
  console.log('in server');
  res.json('get request');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
