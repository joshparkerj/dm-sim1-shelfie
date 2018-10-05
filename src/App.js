import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: [],
      selectedProduct: null
    };
  }

  componentDidMount(){
    this.getInventory();
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

  handleEdit = prod => {
    console.log(prod); //testing output
    this.setState({selectedProduct: prod});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          appGet = {this.getInventory}
          appEdit = {this.handleEdit}
          invList={this.state.inventoryList}
        />
        <Form
          appGet = {this.getInventory}
          product = {this.state.selectedProduct}
        />
      </div>
    );
  }
}

export default App;
