import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';

const Dashboard = function Dashboard() {
  const [inventoryList, setInventoryList] = useState([]);

  const getInventory = () => {
    axios.get('/api/inventory')
      .then(({ data }) => {
        setInventoryList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getInventory();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`)
      .then(() => {
        getInventory();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="dashboard">
      {
        inventoryList && inventoryList.map((e) => (
          <Product
            item={e}
            key={e.id}
            del={deleteProduct}
          />
        ))
      }
    </div>
  );
};

export default Dashboard;
