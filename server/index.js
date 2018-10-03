const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const dotenv = require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.DB_URI)
  .then(db => {
    app.set('db',db);
  })
  .catch(err => {
    console.log(err);
  })

app.listen(4000, () => {
  console.log('now listening on 4000');
})