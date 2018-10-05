module.exports = {
  getInventory: (req,res,next) => {
    const db = req.app.get('db');
    db.get_inventory()
      .then(r => {
        res.status(200).send(r);
      })
      .catch(err => {
        res.status(500).send('get inventory failed');
        console.log(err);
      })
  },
  createProduct: (req,res,next) => {
    const db = req.app.get('db');
    db.create_product([
      req.body.name,
      req.body.price,
      req.body.img_url
    ])
      .then(r => {
        res.status(200).send();
      })
      .catch(err => {
        console.error(err);
      })
  },
  updateProduct: (req,res,next) => {
    const db = req.app.get('db');
    db.update_product([
      req.body.name,
      req.body.price,
      req.body.img_url,
      req.params.id
    ])
      .then(r => {
        res.status(200).send();
      })
      .catch(err => {
        console.error(err);
      })
  },
  deleteProduct: (req,res,next) => {
    const db = req.app.get('db');
    db.delete_product([req.params.id])
      .then(r => {
        res.status(200).send();
      })
      .catch(err => {
        console.error(err);
      })
  }
}
