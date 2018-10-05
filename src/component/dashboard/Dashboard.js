import React, { Component } from 'react';
import Product from '../product/Product';
import axios from 'axios';

class Dashboard extends Component {

  deleteProduct = id => {
    axios.delete(`/api/product/${id}`)
      .then( res => {
        this.props.appGet();
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    return (
      <div className="dashboard">
        {
          this.props.invList.map((e,i) => {
            return (
              <Product
                item={e}
                key={i}
                del={this.deleteProduct}
                edit={this.props.appEdit}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Dashboard;
