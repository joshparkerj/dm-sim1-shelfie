const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const dotenv = require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.static('../public'));

massive(process.env.DB_URI)
  .then(db => {
    app.set('db',db);
  })
  .catch(err => {
    console.log(err);
  })

app.get('/api/product/:id', controller.readProduct);
app.get('/api/inventory',controller.getInventory);
app.post('/api/product', controller.createProduct);
app.delete('/api/product/:id', controller.deleteProduct);
app.put('/api/product/:id', controller.updateProduct);

app.listen(4000, () => {
  console.log('now listening on 4000');
})