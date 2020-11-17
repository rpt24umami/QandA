
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3004;
const getQsAndAs = require('../db/index.js');

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
};

app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/productid=1/qanda', cors(corsOptions), (req, res) => {
  getQsAndAs.getQsAndAs(1, (data) => {
    res.json(data);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
