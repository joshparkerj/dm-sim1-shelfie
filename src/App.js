import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: [
        {
          name: 'product1',
          price: 1.99,
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cartoon_Border_Collie.png/232px-Cartoon_Border_Collie.png'
        },
        {
          name: 'product2',
          price: 2.99,
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Melursus_skull.jpg'
        },
        {
          name: 'product3',
          price: 3.99,
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Argentinosaurus_scale.png/1024px-Argentinosaurus_scale.png'
        },
        {
          name: 'product4',
          price: 4.99,
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Piedras_farellones_y_condor_despegando.jpg/1024px-Piedras_farellones_y_condor_despegando.jpg'
        },
        {
          name: 'product5',
          price: 5.99,
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Fish45.JPG/320px-Fish45.JPG'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard invList={this.state.inventoryList}/>
        <Form />
      </div>
    );
  }
}

export default App;
