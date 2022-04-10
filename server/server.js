const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

require('dotenv').config();

const controller = require('./controller');
const port = require('./port.json');

const server = {
  serverInstance: null,
  start: () => {
    const app = express();

    app.use(rateLimit({ windowMs: 1000000, max: 1000 }));

    app.use(bodyParser.json());
    app.use(express.static('../public'));
    app.use(express.static('../build'));

    app.use(morgan('dev'));

    massive(process.env.DB_URI)
      .then((db) => {
        app.set('db', db);
      })
      .catch((err) => {
        console.error(err);
      });

    app.get('/api/product/:id', controller.readProduct);
    app.get('/api/inventory', controller.getInventory);
    app.post('/api/product', controller.createProduct);
    app.delete('/api/product/:id', controller.deleteProduct);
    app.put('/api/product/:id', controller.updateProduct);

    app.get('/', (_, res) => {
      res.sendFile('../build/index.html');
    });

    server.serverInstance = app.listen(port, () => {
      console.log(`now listening on ${port}`);
    });
  },

  stop: () => {
    server.serverInstance.close();
  },
};

module.exports = server;
