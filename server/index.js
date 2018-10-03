const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log('now listening on 4000');
})