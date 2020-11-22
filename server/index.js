const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3004;
<<<<<<< HEAD
=======
const getQsAndAs = require('../db/index.js');
>>>>>>> sever-and-api

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/dist')));
<<<<<<< HEAD

app.get('/questions', cors(corsOptions), (req, res) => {
  console.log(res);

  res.json('get request');
});

app.listen(port, () => {
=======
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/product/:product_id/q-and-a', (req, res) => {
  const productId = req.params.product_id;
  getQsAndAs.getQsAndAs(productId, (data) => {
    res.json(data);
    res.end();
  });
});

app.post('/product/:product_id/helpful', (req, res) => {
  const productId = req.params.product_id;
  const answerIdToChange = req.body.answerId;

  getQsAndAs.handleHelpful(answerIdToChange, () => {
    res.json('hi');
    res.end();
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
>>>>>>> sever-and-api
  console.log(`Listening on port ${port}`);
});
