import React, { Component } from 'react';
import './dashboard.css'
import Product from '../product/Product'

class Dashboard extends Component {
  render(){
    return (
      <div className="dashboard">
        this is the dashboard component.
        <Product />
      </div>
    );
  }
}

export default Dashboard;
