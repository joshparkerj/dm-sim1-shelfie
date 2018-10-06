import React, { Component } from 'react';
import Product from '../product/Product';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      inventoryList: []
    }
  }

  componentDidMount(){
    this.getInventory();
  }

  deleteProduct = id => {
    axios.delete(`/api/product/${id}`)
      .then( res => {
        this.getInventory()
      })
      .catch(err => {
        console.error(err);
      })
  }

  getInventory = () => {
    axios.get('/api/inventory')
      .then(res => {
        this.setState({inventoryList: res.data});
      })
      .catch(err => {
        console.error(err);
      })
  }


  render(){
    return (
      <div className="dashboard">
        {
          this.state.inventoryList && this.state.inventoryList.map((e,i) => {
            return (
              <Product
                item={e}
                key={i}
                del={this.deleteProduct}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Dashboard;
