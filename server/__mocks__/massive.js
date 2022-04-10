module.exports = function massive() {
  const data = [];

  return new Promise((resolve) => {
    resolve({
      get_inventory: () => (new Promise((resolveGetInventory) => { resolveGetInventory(data); })),

      read_product: ([id]) => (new Promise((resolveReadProduct, reject) => {
        if (data[id]) {
          resolveReadProduct(data[id]);
        } else {
          reject();
        }
      })),

      create_product: ([name, price, imgUrl]) => (new Promise((resolveCreateProduct) => {
        data.push({ name, price, imgUrl });
        resolveCreateProduct();
      })),

      update_product: ([name, price, imgUrl, id]) => (
        new Promise((resolveUpdateProduct, reject) => {
          if (data[id]) {
            data[id] = { name, price, imgUrl };
            resolveUpdateProduct();
          } else {
            reject();
          }
        })
      ),

      delete_product: ([id]) => (new Promise((resolveDeleteProduct, reject) => {
        if (data[id]) {
          data[id] = null;
          resolveDeleteProduct();
        } else {
          reject();
        }
      })),
    });
  });
};
