const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3004;
<<<<<<< HEAD
=======
const getQsAndAs = require('../db/index.js');
>>>>>>> sever-and-api

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
};

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

app.get('/product-id/:product_id/q-and-a', cors(corsOptions), (req, res) => {
  const productId = req.params.product_id;
  getQsAndAs.getQsAndAs(productId, (data) => {
    res.json(data);
    res.end();
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
>>>>>>> sever-and-api
  console.log(`Listening on port ${port}`);
});
