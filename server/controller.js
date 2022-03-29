module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory()
      .then((r) => {
        res.status(200).send(r);
      })
      .catch((err) => {
        res.status(500).send('get inventory failed');
        console.log(err);
      });
  },
  readProduct: (req, res) => {
    const db = req.app.get('db');
    db.read_product([req.params.id])
      .then((r) => {
        res.status(200).send(r);
      })
      .catch((err) => {
        res.status(500).send('read product failed');
        console.log(err);
      });
  },
  createProduct: (req, res) => {
    const db = req.app.get('db');
    db.create_product([
      req.body.name,
      req.body.price,
      req.body.img_url,
    ])
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        res.status(500).send('create product failed');
        console.error(err);
      });
  },
  updateProduct: (req, res) => {
    const db = req.app.get('db');
    db.update_product([
      req.body.name,
      req.body.price,
      req.body.img_url,
      req.params.id,
    ])
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        res.status(500).send('update product failed');
        console.error(err);
      });
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    db.delete_product([req.params.id])
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        res.status(500).send('delete product failed');
        console.error(err);
      });
  },
};
