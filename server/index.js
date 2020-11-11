const express = require('express')
const app = express()
const port = 3004

app.use(express.static(path.join(__dirname, 'client/dist'));

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
})