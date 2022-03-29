const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(express.static('../public'));
app.use(express.static('../build'));

massive(process.env.DB_URI)
  .then((db) => {
    app.set('db', db);
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/api/product/:id', controller.readProduct);
app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.createProduct);
app.delete('/api/product/:id', controller.deleteProduct);
app.put('/api/product/:id', controller.updateProduct);

app.get('/', (req, res) => {
  res.sendFile('../build/index.html');
});

app.listen(4000, () => {
  console.log('now listening on 4000');
});
