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
  }
}
