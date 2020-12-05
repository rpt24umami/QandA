const express = require('express');
const cors = require('cors');

const app = express();
const getQsAndAs = require('../db/index.js');

app.use(cors());
app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/products/:id', (req, res) => {
  if (req.params.id === 'bundle.js') {
    res.sendFile('/Users/Meyvi/Documents/Hack_Reactor/FEC/tptQandAService/client/dist/bundle.js');
  } else if (req.params.id === 'style.css') {
    res.sendFile('/Users/Meyvi/Documents/Hack_Reactor/FEC/tptQandAService/client/dist/style.css');
  } else {
    res.sendFile('/Users/Meyvi/Documents/Hack_Reactor/FEC/tptQandAService/client/dist/index.html');
  }
});

app.get('/products/:product_id/q-and-a', (req, res) => {
  const productId = req.params.product_id;
  getQsAndAs.getQsAndAs(productId, (data) => {
    res.status(200).json(data);
    res.end();
  });
});

app.post('/products/:product_id/helpful', (req, res) => {
  const answerIdToChange = req.body.answerId;

  getQsAndAs.handleHelpful(answerIdToChange, () => {
    res.json('hi');
    res.end();
  });
});

module.exports = app;
