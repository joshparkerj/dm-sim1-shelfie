import React, { Component } from 'react';
import './dashboard.css'
import Product from '../product/Product'

class Dashboard extends Component {
  render(){
    return (
      <div className="dashboard">
        {
          this.props.invList.map((e,i) => {
            return (
              <Product item={e} key={i} />
            )
          })
        }
      </div>
    );
  }
}

export default Dashboard;
