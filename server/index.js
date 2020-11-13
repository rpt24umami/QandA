const express = require('express');
const path = require('path');

const app = express();
const port = 3004;

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/questions', (req, res) => {
  console.log('in sever');
  res.send('Get request to home');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
